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
  Percent
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

export interface Transaction {
  id: string
  date: string // YYYY-MM-DD
  amount: number
  type: 'incoming' | 'outgoing'
  label: TransactionLabel
  assetId?: string // 可選關聯租賃資產
  description: string
  refNumber?: string
  paymentMethod: '銀行轉帳' | 'Paypal' | 'Stripe' | '現金支付' | '信用卡'
}

// ==========================================
// 高規格歷史模擬數據 (全面中文化)
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
  // --- 2026年6月 (當前月份模擬數據) ---
  {
    id: 't-jun-1',
    date: '2026-06-02',
    amount: 4500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-1',
    description: '華東 A 區倉庫月度租金回籠',
    refNumber: 'INV-2026-0601',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-2',
    date: '2026-06-02',
    amount: 1200,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-2',
    description: '印刷滾筒設備組租金回籠',
    refNumber: 'INV-2026-0602',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-jun-3',
    date: '2026-06-02',
    amount: 600,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-3',
    description: '豐田堆高機 T-100 月租金回籠',
    refNumber: 'INV-2026-0603',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-jun-4',
    date: '2026-06-02',
    amount: 1500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-5',
    description: '環保立體袋結構專利 IP 月度授權金',
    refNumber: 'INV-2026-0605',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-5',
    date: '2026-06-05',
    amount: 18500,
    type: 'incoming',
    label: '客製訂單銷售',
    description: '承接客製化可降解咖啡立體袋 - 5萬個中型生產跑單起算',
    refNumber: 'PO-984402',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-6',
    date: '2026-06-10',
    amount: 3400,
    type: 'outgoing',
    label: '原材料採購支出',
    description: '訂購高分子生物降解 PBS 包裝專用樹脂原料',
    refNumber: 'VEND-9981',
    paymentMethod: '信用卡'
  },
  {
    id: 't-jun-7',
    date: '2026-06-12',
    amount: 850,
    type: 'outgoing',
    label: '資產日常維護',
    assetId: 'asset-4',
    description: '華南 B 區冷鏈倉庫屋頂防漏水及升降梯加固維修',
    refNumber: 'MNT-4402',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-8',
    date: '2026-06-15',
    amount: 480,
    type: 'outgoing',
    label: '辦公水電網費',
    description: '辦公樓高頻電力、自來水及企業光纖寬頻水電費發票',
    refNumber: 'UTIL-06',
    paymentMethod: '信用卡'
  },
  
  // --- 2026年5月 ---
  {
    id: 't-may-1',
    date: '2026-05-02',
    amount: 4500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-1',
    description: '華東 A 區中央聯運倉庫月度租金回籠',
    refNumber: 'INV-2026-0501',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-2',
    date: '2026-05-02',
    amount: 1200,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-2',
    description: '印刷滾筒設備組月度租金回籠',
    refNumber: 'INV-2026-0502',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-may-3',
    date: '2026-05-02',
    amount: 600,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-3',
    description: '豐田堆高機 T-100 月度租金回籠',
    refNumber: 'INV-2026-0503',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-may-4',
    date: '2026-05-02',
    amount: 1500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-5',
    description: '環保立體袋結構專利 IP 授權費回籠',
    refNumber: 'INV-2026-0505',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-5',
    date: '2026-05-12',
    amount: 14200,
    type: 'incoming',
    label: '客製訂單銷售',
    description: '高端手工巧克力外包裝拉鍊袋大貨款項（3萬袋訂單）',
    refNumber: 'PO-421890',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-6',
    date: '2026-05-15',
    amount: 430,
    type: 'outgoing',
    label: '辦公水電網費',
    description: '辦公室電力及水費帳單結清',
    refNumber: 'UTIL-05',
    paymentMethod: '信用卡'
  },
  {
    id: 't-may-7',
    date: '2026-05-20',
    amount: 1500,
    type: 'outgoing',
    label: '物流貨運支出',
    description: '批發可回收咖啡袋空運至西雅圖港運雜費結清',
    refNumber: 'FRT-8871',
    paymentMethod: '信用卡'
  },
  {
    id: 't-may-8',
    date: '2026-05-28',
    amount: 6500,
    type: 'outgoing',
    label: '員工薪資發放',
    description: '5月份辦公及生產研發團隊月度工資下發',
    refNumber: 'PAY-2026-05',
    paymentMethod: '銀行轉帳'
  },

  // --- 2026年4月 ---
  {
    id: 't-apr-1',
    date: '2026-04-02',
    amount: 4500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-1',
    description: '華東 A 區中央聯運倉庫月租回籠',
    refNumber: 'INV-2026-0401',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-apr-2',
    date: '2026-04-02',
    amount: 1200,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-2',
    description: '印刷滾筒設備組月租回籠',
    refNumber: 'INV-2026-0402',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-apr-3',
    date: '2026-04-02',
    amount: 600,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-3',
    description: '豐田堆高機 T-100 月租回籠',
    refNumber: 'INV-2026-0403',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-apr-4',
    date: '2026-04-02',
    amount: 1500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-5',
    description: '環保立體袋結構專利 IP 授權費',
    refNumber: 'INV-2026-0405',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-apr-5',
    date: '2026-04-08',
    amount: 22000,
    type: 'incoming',
    label: '客製訂單銷售',
    description: '承接大規格牛皮紙重載防潮種子袋（跨國集團訂單首期）',
    refNumber: 'PO-881203',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-apr-6',
    date: '2026-04-10',
    amount: 5400,
    type: 'outgoing',
    label: '原材料採購支出',
    description: '補庫原色未漂白針葉林木牛皮紙卷材料 8 噸',
    refNumber: 'VEND-9712',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-apr-7',
    date: '2026-04-15',
    amount: 450,
    type: 'outgoing',
    label: '辦公水電網費',
    description: '4月份辦公基礎能源與光纖網絡帳單繳納',
    refNumber: 'UTIL-04',
    paymentMethod: '信用卡'
  },
  {
    id: 't-apr-8',
    date: '2026-04-20',
    amount: 2200,
    type: 'outgoing',
    label: '物流貨運支出',
    description: '環保重載袋至漢堡海運整櫃海運訂艙與報關什費',
    refNumber: 'FRT-8843',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-apr-9',
    date: '2026-04-28',
    amount: 6500,
    type: 'outgoing',
    label: '員工薪資發放',
    description: '4月份總部行政與生產端員工資發放',
    refNumber: 'PAY-2026-04',
    paymentMethod: '銀行轉帳'
  },

  // --- 2026年3月 ---
  {
    id: 't-mar-1',
    date: '2026-03-02',
    amount: 4500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-1',
    description: '華東 A 區中央聯運倉庫月租回籠',
    refNumber: 'INV-2026-0301',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-mar-2',
    date: '2026-03-02',
    amount: 1200,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-2',
    description: '印刷滾筒設備組月租回籠',
    refNumber: 'INV-2026-0302',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-mar-3',
    date: '2026-03-02',
    amount: 600,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-3',
    description: '豐田堆高機 T-100 月租回籠',
    refNumber: 'INV-2026-0303',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-mar-4',
    date: '2026-03-02',
    amount: 1500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-5',
    description: '環保立體袋結構專利 IP 授權費',
    refNumber: 'INV-2026-0305',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-mar-10',
    date: '2026-03-05',
    amount: 250,
    type: 'outgoing',
    label: '資產日常維護',
    assetId: 'asset-3',
    description: '堆高機液壓密封圈更換、齒輪油更換及蓄電池組維護',
    refNumber: 'MNT-4281',
    paymentMethod: '信用卡'
  },
  {
    id: 't-mar-11',
    date: '2026-03-12',
    amount: 16800,
    type: 'incoming',
    label: '客製訂單銷售',
    description: '承接客製環保立體零食密封袋（DTC 新銳健康零食品牌）',
    refNumber: 'PO-330179',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-mar-12',
    date: '2026-03-15',
    amount: 3200,
    type: 'outgoing',
    label: '企業稅收繳納',
    description: '申報並繳納 2026 第一季度企業所得稅及地方附加稅',
    refNumber: 'TAX-2026-Q1',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-mar-13',
    date: '2026-03-15',
    amount: 440,
    type: 'outgoing',
    label: '辦公水電網費',
    description: '3月份總部大樓水電費帳單結清',
    refNumber: 'UTIL-03',
    paymentMethod: '信用卡'
  },
  {
    id: 't-mar-14',
    date: '2026-03-28',
    amount: 6500,
    type: 'outgoing',
    label: '員工薪資發放',
    description: '3月份全體團隊月度薪資正常發放',
    refNumber: 'PAY-2026-03',
    paymentMethod: '銀行轉帳'
  },

  // --- 2026年2月 ---
  {
    id: 't-feb-1',
    date: '2026-02-02',
    amount: 4500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-1',
    description: '華東 A 區中央聯運倉庫月租回籠',
    refNumber: 'INV-2026-0201',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-feb-2',
    date: '2026-02-02',
    amount: 1200,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-2',
    description: '印刷滾筒設備組月租回籠',
    refNumber: 'INV-2026-0202',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-feb-3',
    date: '2026-02-02',
    amount: 600,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-3',
    description: '豐田堆高機 T-100 月租回籠',
    refNumber: 'INV-2026-0203',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-feb-4',
    date: '2026-02-02',
    amount: 1500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-5',
    description: '環保立體袋結構專利 IP 授權費',
    refNumber: 'INV-2026-0205',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-feb-5',
    date: '2026-02-15',
    amount: 4100,
    type: 'outgoing',
    label: '原材料採購支出',
    description: '採購複合軟包裝高阻隔 PET 薄膜及可降解拉鍊密封材料',
    refNumber: 'VEND-9602',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-feb-6',
    date: '2026-02-15',
    amount: 460,
    type: 'outgoing',
    label: '辦公水電網費',
    description: '2月份企業水電與光纖網絡帳單',
    refNumber: 'UTIL-02',
    paymentMethod: '信用卡'
  },
  {
    id: 't-feb-7',
    date: '2026-02-22',
    amount: 19800,
    type: 'incoming',
    label: '客製訂單銷售',
    description: '承接客製環保可回收立體拉鍊袋（有機堅果連鎖品牌大貨）',
    refNumber: 'PO-930182',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-feb-8',
    date: '2026-02-28',
    amount: 6500,
    type: 'outgoing',
    label: '員工薪資發放',
    description: '2月份辦公及技術人員工資劃發',
    refNumber: 'PAY-2026-02',
    paymentMethod: '銀行轉帳'
  },

  // --- 2026年1月 ---
  {
    id: 't-jan-1',
    date: '2026-01-02',
    amount: 4500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-1',
    description: '華東 A 區中央聯運倉庫月租回籠',
    refNumber: 'INV-2026-0101',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jan-2',
    date: '2026-01-02',
    amount: 1200,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-2',
    description: '印刷滾筒設備組月租回籠',
    refNumber: 'INV-2026-0102',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-jan-3',
    date: '2026-01-02',
    amount: 600,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-3',
    description: '豐田堆高機 T-100 月租回籠',
    refNumber: 'INV-2026-0103',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-jan-4',
    date: '2026-01-02',
    amount: 1500,
    type: 'incoming',
    label: '租金收入',
    assetId: 'asset-5',
    description: '環保立體袋結構專利 IP 授權費',
    refNumber: 'INV-2026-0105',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jan-5',
    date: '2026-01-10',
    amount: 12000,
    type: 'incoming',
    label: '諮詢規劃收入',
    description: '承接大型包裝製造業綠色循環包裝升級諮詢藍圖規劃案（尾款結清）',
    refNumber: 'INV-AP-9901',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jan-6',
    date: '2026-01-15',
    amount: 430,
    type: 'outgoing',
    label: '辦公水電網費',
    description: '1月份企業總部辦公大樓能源費與環境維護費結案發票',
    refNumber: 'UTIL-01',
    paymentMethod: '信用卡'
  },
  {
    id: 't-jan-7',
    date: '2026-01-20',
    amount: 950,
    type: 'outgoing',
    label: '物流貨運支出',
    description: '支付寄送海外高精細度打樣樣品包的特快空運費（順豐/DHL）',
    refNumber: 'FRT-7712',
    paymentMethod: '信用卡'
  },
  {
    id: 't-jan-8',
    date: '2026-01-28',
    amount: 6500,
    type: 'outgoing',
    label: '員工薪資發放',
    description: '1月份核心管理與生產骨幹薪資劃扣發放',
    refNumber: 'PAY-2026-01',
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

  // 同步寫入 LocalStorage
  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_assets', JSON.stringify(assets))
  }, [assets])

  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_transactions', JSON.stringify(transactions))
  }, [transactions])

  // 總帳明細篩選器 state
  const [ledgerSearch, setLedgerSearch] = useState('')
  const [ledgerTypeFilter, setLedgerTypeFilter] = useState<'all' | 'incoming' | 'outgoing'>('all')
  const [ledgerLabelFilter, setLedgerLabelFilter] = useState<string>('all')
  const [ledgerAssetFilter, setLedgerAssetFilter] = useState<string>('all')

  // 自訂日期篩選
  const [ledgerDateStart, setLedgerDateStart] = useState('')
  const [ledgerDateEnd, setLedgerDateEnd] = useState('')

  // 收支日曆 state
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)) // 起始設定於2026年6月，以對齊預設模擬數據
  const [selectedDayDetail, setSelectedDayDetail] = useState<{ dayString: string; items: Transaction[] } | null>(null)
  const [showCalendarAddForm, setShowCalendarAddForm] = useState(false)

  // 收支登錄表單 state
  const [showAddForm, setShowAddForm] = useState(false)
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0])
  const [formAmount, setFormAmount] = useState('')
  const [formType, setFormType] = useState<'incoming' | 'outgoing'>('incoming')
  const [formLabel, setFormLabel] = useState<TransactionLabel>('租金收入')
  const [formAssetId, setFormAssetId] = useState('')
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

  // 損益表查詢年度與期間
  const [plYear, setPlYear] = useState('2026')
  const [plQuarter, setPlQuarter] = useState<'all' | 'Q1' | 'Q2' | 'Q3' | 'Q4'>('all')

  // 重置表單輔助函式
  const resetTransactionForm = () => {
    setFormDate(new Date().toISOString().split('T')[0])
    setFormAmount('')
    setFormType('incoming')
    setFormLabel('租金收入')
    setFormAssetId('')
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

  // 儲存或更新收支記錄
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

    const tData: Transaction = {
      id: editingTransactionId || `t-${Date.now()}`,
      date: formDate,
      amount: Number(formAmount),
      type: formType,
      label: formLabel,
      assetId: formAssetId || undefined,
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
    setFormAmount(String(t.amount))
    setFormType(t.type)
    setFormLabel(t.label)
    setFormAssetId(t.assetId || '')
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

  // ==========================================
  // 動態指標與財務數據計算
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

  // 計算每個獨立資產的累計淨收益 (關聯收入 - 關聯維護支出 - 基準維護成本)
  const assetNetYields = useMemo(() => {
    const yields: Record<string, number> = {}
    assets.forEach(a => {
      const linkedTransactions = transactions.filter(t => t.assetId === a.id)
      let income = 0
      let expense = a.maintenanceCost // 以基礎月維護開支為基線

      linkedTransactions.forEach(t => {
        if (t.type === 'incoming') income += t.amount
        else expense += t.amount
      })
      yields[a.id] = income - expense
    })
    return yields
  }, [transactions, assets])

  // 總帳明細過濾後的交易流水
  const filteredLedger = useMemo(() => {
    return transactions.filter(t => {
      const matchSearch =
        t.description.toLowerCase().includes(ledgerSearch.toLowerCase()) ||
        (t.refNumber && t.refNumber.toLowerCase().includes(ledgerSearch.toLowerCase()))

      const matchType = ledgerTypeFilter === 'all' || t.type === ledgerTypeFilter
      const matchLabel = ledgerLabelFilter === 'all' || t.label === ledgerLabelFilter
      const matchAsset = ledgerAssetFilter === 'all' || t.assetId === ledgerAssetFilter

      let matchDate = true
      if (ledgerDateStart) {
        matchDate = matchDate && t.date >= ledgerDateStart
      }
      if (ledgerDateEnd) {
        matchDate = matchDate && t.date <= ledgerDateEnd
      }

      return matchSearch && matchType && matchLabel && matchAsset && matchDate
    })
  }, [transactions, ledgerSearch, ledgerTypeFilter, ledgerLabelFilter, ledgerAssetFilter, ledgerDateStart, ledgerDateEnd])

  // P&L 財務報表專用科目歸檔與拆解
  const plReport = useMemo(() => {
    let totalRevenue = 0
    let totalCOGS = 0 // 營業直接成本 (原材料採購、物流貨運等)
    let totalOpEx = 0 // 運營費用 (資產日常維護、水電網費、工資、稅收、其他)

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
  }, [transactions, plYear, plQuarter])

  // P&L CSV 明細報表匯出
  const exportPLToCSV = () => {
    const headers = '\uFEFF會計科目類別,累計總金額 (USD)\n'
    const rows = Object.entries(plReport.breakdown)
      .map(([label, amt]) => `"${label}",${amt}`)
      .join('\n')

    const summaryRows = `\n"營業收入總計",${plReport.revenue}\n"直接營業成本 (COGS)",${plReport.cogs}\n"營業毛利額",${plReport.grossProfit}\n"毛利率 %",${plReport.grossMargin.toFixed(2)}%\n"營業運營費用 (OpEx)",${plReport.opex}\n"企業淨利潤",${plReport.netProfit}\n"企業淨利率 %",${plReport.netMargin.toFixed(2)}%`

    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(headers + rows + summaryRows)
    const link = document.createElement('a')
    link.setAttribute('href', csvContent)
    link.setAttribute('download', `AchievePack_企業損益分析表_${plYear}_${plQuarter}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('企業損益分析數據已成功匯出為 CSV 報表！')
  }

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
                  <h1 className="text-xl font-bold text-white tracking-wide">企業財務記賬與現金流系統</h1>
                  <p className="text-xs text-gray-400 font-mono">控制台總帳明細流水 • 安全邊緣架構</p>
                </div>
              </div>
            </div>

            {/* 快速新建功能 */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  resetTransactionForm()
                  setShowAddForm(true)
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4" />
                登錄收支明細
              </button>
              <button
                onClick={() => {
                  resetAssetForm()
                  setShowAssetForm(true)
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-600 transition-all flex items-center gap-2"
              >
                <Building className="w-4 h-4" />
                新增租賃資產
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------- 數據卡片看板 ----------------- */}
      <section className="bg-gray-900/40 border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 累計淨收益 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/30 transition-all group">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">累計淨收益 (淨利額)</p>
                <span className={`p-1.5 rounded-lg text-xs font-semibold ${stats.net >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {stats.net >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                </span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight mt-2 font-mono">
                ${stats.net.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                <Percent className="w-3.5 h-3.5 text-green-400" />
                <span>累計淨利率: <strong className="text-gray-200">{stats.margin.toFixed(1)}%</strong></span>
              </div>
            </div>

            {/* 現金流入 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">累計現金流入 (收入)</p>
                <span className="p-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-green-400 tracking-tight mt-2 font-mono">
                +${stats.inflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-gray-500 mt-2">企業運營、銷售與租金所得累計</p>
            </div>

            {/* 現金流出 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-red-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">累計現金流出 (支出)</p>
                <span className="p-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs">
                  <TrendingDown className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-red-400 tracking-tight mt-2 font-mono">
                -${stats.outflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-gray-500 mt-2">原材料、薪資、物流與日常維護支出</p>
            </div>

            {/* 資產數量 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-blue-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">營運中租賃資產</p>
                <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-xs">
                  <Building className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-blue-400 tracking-tight mt-2 font-mono">
                {stats.activeAssetsCount} <span className="text-sm text-gray-400 font-normal">/ {assets.length} 個項目</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">持續產生長期月度租金回籠</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 主標籤分頁控制 ----------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="flex border-b border-gray-700/80 mb-8 overflow-x-auto gap-2 scrollbar-none">
          {[
            { id: 'dashboard', label: '現金流儀表盤', icon: Sparkles },
            { id: 'transactions', label: '收支總帳明細', icon: Briefcase },
            { id: 'calendar', label: '收支日曆視圖', icon: Calendar },
            { id: 'assets', label: '租賃資產管理', icon: Building },
            { id: 'pandl', label: '損益分析表 (P&L)', icon: FileSpreadsheet }
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
            {/* 說明字樣 */}
            <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  企業財務狀況與核心健康概覽
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  即時顯示租賃資產收益表現與企業營運支出分配結構。可點擊其餘標籤頁進行資料增刪修。
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm bg-gray-900/60 px-4 py-2.5 rounded-xl border border-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-gray-400">數據存取狀態：</span>
                <span className="text-white font-bold">100% 本地邊緣防丟失儲存</span>
              </div>
            </div>

            {/* 資產效益與比例圖表 */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 左側: 資產淨收益細分錶 */}
              <div className="lg:col-span-2 bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6">
                <h4 className="text-md font-bold text-white mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400" />
                  各項租賃資產月租表現 (累計淨利回籠)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700/60 text-gray-400">
                        <th className="pb-3 font-semibold">資產名稱項目</th>
                        <th className="pb-3 font-semibold">承租客戶</th>
                        <th className="pb-3 font-semibold">營運狀態</th>
                        <th className="pb-3 font-semibold text-right">約定月租</th>
                        <th className="pb-3 font-semibold text-right">累計淨收益 (已收-已付)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60 font-medium">
                      {assets.map(asset => {
                        const netYield = assetNetYields[asset.id] || 0
                        return (
                          <tr key={asset.id} className="hover:bg-gray-800/30 transition-all group">
                            <td className="py-4">
                              <p className="text-white font-bold group-hover:text-green-400 transition-colors">{asset.name}</p>
                              <p className="text-xs text-gray-400 font-mono mt-0.5">{asset.type === 'Warehouse' ? '倉庫房產' : asset.type === 'Equipment' ? '重型機具' : asset.type === 'Vehicle' ? '物流車輛' : '專利授權'} • ID: {asset.id}</p>
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
                              {netYield >= 0 ? '+' : '-'}${Math.abs(netYield).toLocaleString()}
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
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">現金流入來源排行</p>
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
                              <span className="text-green-400 font-mono">${val.toLocaleString()} ({pct.toFixed(0)}%)</span>
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
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">現金流出分類排行</p>
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
                              <span className="text-red-400 font-mono">${val.toLocaleString()} ({pct.toFixed(0)}%)</span>
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

            {/* 最新交易明細表格 (前5筆) */}
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  最新總帳明細交易流水
                </h4>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className="text-xs text-green-400 hover:text-green-300 font-semibold"
                >
                  進入總帳查看完整流水 →
                </button>
              </div>
              <div className="divide-y divide-gray-800/60">
                {transactions.slice(0, 5).map(t => {
                  const linkedAsset = assets.find(a => a.id === t.assetId)
                  return (
                    <div key={t.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-xl mt-0.5 ${t.type === 'incoming' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                          {t.type === 'incoming' ? <TrendingUp className="w-4.5 h-4.5" /> : <TrendingDown className="w-4.5 h-4.5" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{t.description}</p>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mt-1 font-mono">
                            <span className="bg-gray-700/40 px-2 py-0.5 rounded text-gray-300">{t.label}</span>
                            <span>•</span>
                            <span>交易日期: {t.date}</span>
                            {t.refNumber && (
                              <>
                                <span>•</span>
                                <span>參考號: {t.refNumber}</span>
                              </>
                            )}
                            {linkedAsset && (
                              <>
                                <span>•</span>
                                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                  <Building className="w-3 h-3" />
                                  {linkedAsset.name}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 self-end sm:self-center font-mono">
                        <p className={`text-md font-bold ${t.type === 'incoming' ? 'text-green-400' : 'text-red-400'}`}>
                          {t.type === 'incoming' ? '+' : '-'}${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </p>
                        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 transition-all">
                          <button
                            onClick={() => startEditTransaction(t)}
                            className="p-1.5 hover:bg-gray-700/60 rounded text-gray-300 hover:text-white"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteTransaction(t.id)}
                            className="p-1.5 hover:bg-red-950/40 rounded text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 標籤頁: 收支總帳明細 ----------------- */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            {/* 過濾控制面板 */}
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 關鍵字搜尋 */}
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={ledgerSearch}
                    onChange={(e) => setLedgerSearch(e.target.value)}
                    placeholder="搜尋描述、發票參考編號..."
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* 流向過濾 */}
                <div>
                  <select
                    value={ledgerTypeFilter}
                    onChange={(e) => setLedgerTypeFilter(e.target.value as any)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">所有收支方向</option>
                    <option value="incoming">現金流入 (+)</option>
                    <option value="outgoing">現金流出 (-)</option>
                  </select>
                </div>

                {/* 類別篩選 */}
                <div>
                  <select
                    value={ledgerLabelFilter}
                    onChange={(e) => setLedgerLabelFilter(e.target.value)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                {(ledgerSearch || ledgerTypeFilter !== 'all' || ledgerLabelFilter !== 'all' || ledgerAssetFilter !== 'all' || ledgerDateStart || ledgerDateEnd) && (
                  <button
                    onClick={() => {
                      setLedgerSearch('')
                      setLedgerTypeFilter('all')
                      setLedgerLabelFilter('all')
                      setLedgerAssetFilter('all')
                      setLedgerDateStart('')
                      setLedgerDateEnd('')
                    }}
                    className="text-xs text-red-400 hover:text-red-300 font-semibold"
                  >
                    清除所有過濾篩選器
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
                    <p className="text-sm">請嘗試拓寬搜尋字詞或點擊清除篩選條件按鈕</p>
                  </div>
                ) : (
                  filteredLedger.map(t => {
                    const linkedAsset = assets.find(a => a.id === t.assetId)
                    return (
                      <div key={t.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-gray-800/25 transition-all">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-xl mt-0.5 ${t.type === 'incoming' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                            {t.type === 'incoming' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{t.description}</p>
                            <div className="flex flex-wrap items-center gap-3.5 text-xs text-gray-400 mt-1 font-mono">
                              <span className="bg-gray-700/50 px-2.5 py-0.5 rounded text-gray-300 flex items-center gap-1">
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
                              <span>支付模式: {t.paymentMethod}</span>
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
                        <div className="flex items-center gap-5 self-end sm:self-center font-mono">
                          <p className={`text-lg font-bold ${t.type === 'incoming' ? 'text-green-400' : 'text-red-400'}`}>
                            {t.type === 'incoming' ? '+' : '-'}${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </p>
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
                  月度企業現金收支日曆格網
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  直觀顯示每日累計收入流入（綠色）與開支費用流出（紅色）。點擊任何日期 block 即可查看當日明細或在此日期快速記賬。
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
              {/* 星期行 */}
              <div className="grid grid-cols-7 bg-gray-800/80 border-b border-gray-700/80 text-center py-3 text-xs font-bold text-gray-400 tracking-wider">
                <div>星期日</div>
                <div>星期一</div>
                <div>星期二</div>
                <div>星期三</div>
                <div>星期四</div>
                <div>星期五</div>
                <div>星期六</div>
              </div>

              {/* 天數網格 */}
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

                      {/* Cashflows */}
                      <div className="space-y-1 mt-4">
                        {inflow > 0 && (
                          <div className="text-[10px] font-bold font-mono text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center justify-between">
                            <span>流入:</span>
                            <span>+${inflow.toLocaleString()}</span>
                          </div>
                        )}
                        {outflow > 0 && (
                          <div className="text-[10px] font-bold font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded flex items-center justify-between">
                            <span>流出:</span>
                            <span>-${outflow.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 日曆點擊彈窗 (Drawer-like Modal) */}
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
                        return (
                          <div key={t.id} className="p-4 bg-gray-850 rounded-xl border border-gray-800 flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-bold text-white">{t.description}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 font-mono">
                                <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded">{t.label}</span>
                                <span>發票參考號: {t.refNumber || '無'}</span>
                                {linkedAsset && (
                                  <span className="text-emerald-400 font-semibold">{linkedAsset.name}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-3 font-mono">
                              <span className={`text-sm font-bold ${t.type === 'incoming' ? 'text-green-400' : 'text-red-400'}`}>
                                {t.type === 'incoming' ? '+' : '-'}${t.amount.toLocaleString()}
                              </span>
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
              {/* 受管資產網格 (左邊 2 欄位) */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-gray-300 font-mono">企業受管固定及無形租賃資產清冊</h4>
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
                  租賃資產淨回籠分析策略
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  租賃資產是公司持有的固定實體或無形智慧產權，可透過持續出租產生穩健月租金收入。
                </p>
                <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-850 space-y-2">
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    如何精準核算收益率：
                  </p>
                  <ol className="text-[11px] text-gray-400 space-y-1.5 list-decimal pl-4">
                    <li>在此建立你的租賃資產（填寫月租與基準維修成本）。</li>
                    <li>在「收支總帳」登錄收回租金時，在「關聯資產」欄位選擇對應的資產項目。</li>
                    <li>登錄該倉庫或機具的損壞維修帳單時，同樣綁定此資產，系統即可動態計算其**實時純利回籠率**。</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 標籤頁: P&L 財務分析報表 ----------------- */}
        {activeTab === 'pandl' && (
          <div className="space-y-6">
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-6">
              {/* 年代與期間控制 */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-800">
                <div className="flex items-center gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-bold">選定財政年度</label>
                    <select
                      value={plYear}
                      onChange={(e) => setPlYear(e.target.value)}
                      className="bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      className="bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-emerald-500 transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  匯出 Excel CSV 財務報表
                </button>
              </div>

              {/* 損益表帳單渲染 */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-white text-center">
                    企業會計核算損益表 (Statement of Profit and Loss) — {plYear}年度 {plQuarter === 'all' ? '全年度合算' : plQuarter}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono text-center mt-1">系統動態結轉時間：{new Date().toLocaleString()}</p>
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
                      <p className="text-xs text-gray-400 mt-1">包括月度資產租金回籠、產品銷售利潤與客製諮詢費用所得</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-green-400">+${plReport.revenue.toLocaleString()}</span>
                  </div>

                  {/* COGS */}
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-md font-bold text-white flex items-center gap-2">
                        <TrendingDown className="w-4.5 h-4.5 text-rose-400" />
                        主營直接成本 (Cost of Goods Sold - COGS)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">包括生產原材料直接採購、國際與國內幹線物流貨運支出</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-rose-400">-${plReport.cogs.toLocaleString()}</span>
                  </div>

                  {/* Gross Margin */}
                  <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-700/60 flex items-center justify-between border-l-4 border-l-emerald-500">
                    <div>
                      <p className="text-md font-bold text-emerald-400 uppercase tracking-wider">營業毛利額與毛利率</p>
                      <p className="text-xs text-gray-400 mt-1">扣除主營直接採購與物流成本後的原始毛利潤率表現</p>
                    </div>
                    <div className="text-right font-mono">
                      <p className="text-lg font-bold text-white">${plReport.grossProfit.toLocaleString()}</p>
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
                      <p className="text-xs text-gray-400 mt-1">包括行政/操作員工資、租賃資產維修保養、大樓水電費及企業所得稅繳納</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-rose-400">-${plReport.opex.toLocaleString()}</span>
                  </div>

                  {/* Net Profit */}
                  <div className="p-5 bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border border-green-500/30 rounded-xl flex items-center justify-between border-l-4 border-l-green-500">
                    <div>
                      <p className="text-lg font-bold text-green-400 uppercase tracking-wider">淨利潤 (Net Income)</p>
                      <p className="text-xs text-gray-400 mt-1">扣除直接生產成本與全額運營開支後，最終留在企業帳戶中的淨現金利潤額。</p>
                    </div>
                    <div className="text-right font-mono">
                      <p className="text-xl font-bold text-green-400">${plReport.netProfit.toLocaleString()}</p>
                      <p className="text-xs text-green-400 font-bold">淨利率 {plReport.netMargin.toFixed(1)}%</p>
                    </div>
                  </div>
                </div>

                {/* 科目明細表 */}
                <div className="max-w-3xl mx-auto pt-6 border-t border-gray-800 space-y-4">
                  <h4 className="text-sm font-bold text-gray-300">各級會計科目累計明細拆解</h4>
                  <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20">
                    <div className="divide-y divide-gray-800/60">
                      {Object.entries(plReport.breakdown).map(([label, amt]) => {
                        const isIncome = ['租金收入', '客製訂單銷售', '資產處置收益', '諮詢規劃收入', '其他現金流入'].includes(label)
                        return (
                          <div key={label} className="px-5 py-3 flex justify-between text-sm">
                            <span className="text-gray-400 font-semibold">{label}</span>
                            <span className={`font-mono font-bold ${isIncome ? 'text-green-400' : 'text-rose-400'}`}>
                              {isIncome ? '+' : '-'}${amt.toLocaleString()}
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
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* 交易金額 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">交易金額 (USD)</label>
                  <input
                    type="number"
                    required
                    min="0.01"
                    step="0.01"
                    placeholder="例如 1500"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500 font-mono"
                  />
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

              {/* 科目別 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">收支會計科目類別</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as TransactionLabel)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
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
                <label className="block text-xs font-semibold text-gray-400 mb-1">綁定關聯受管租賃資產 (選填)</label>
                <select
                  value={formAssetId}
                  onChange={(e) => setFormAssetId(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
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
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
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

                {/* 交易金額 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">交易金額 (USD)</label>
                  <input
                    type="number"
                    required
                    min="0.01"
                    step="0.01"
                    placeholder="例如 1500"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none font-mono"
                  />
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

              {/* 科目別 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">會計科目科目類別</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as TransactionLabel)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
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
                <label className="block text-xs font-semibold text-gray-400 mb-1">綁定關聯受管租賃資產 (選填)</label>
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
                className="p-1 bg-gray-700 hover:bg-gray-650 rounded-lg text-gray-400 hover:text-white"
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
