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
// TYPES & DATA STRUCTURES
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
  // Incoming Labels
  | 'Rent Revenue'
  | 'Custom Order Sales'
  | 'Asset Sales'
  | 'Consulting'
  | 'Other Inflow'
  // Outgoing Labels
  | 'Asset Upkeep'
  | 'Utilities'
  | 'Salaries'
  | 'Raw Materials'
  | 'Shipping & Freight'
  | 'Taxes'
  | 'Other Outflow'

export interface Transaction {
  id: string
  date: string // YYYY-MM-DD
  amount: number
  type: 'incoming' | 'outgoing'
  label: TransactionLabel
  assetId?: string // Optional link to RentAsset
  description: string
  refNumber?: string
  paymentMethod: 'Bank Transfer' | 'Paypal' | 'Stripe' | 'Cash' | 'Credit Card'
}

// ==========================================
// PREMIUM HISTORICAL MOCK DATA
// ==========================================

const INITIAL_ASSETS: RentAsset[] = [
  {
    id: 'asset-1',
    name: 'Warehouse A (Shanghai Outpost)',
    type: 'Warehouse',
    monthlyRate: 4500,
    tenant: 'Fast Logistics Inc',
    status: 'Active',
    maintenanceCost: 120,
    createdAt: '2025-10-01'
  },
  {
    id: 'asset-2',
    name: 'Equipment Set #3 (Gravure Cylinder)',
    type: 'Equipment',
    monthlyRate: 1200,
    tenant: 'PouchCraft Co',
    status: 'Active',
    maintenanceCost: 80,
    createdAt: '2025-11-15'
  },
  {
    id: 'asset-3',
    name: 'Forklift Toyota T-100',
    type: 'Vehicle',
    monthlyRate: 600,
    tenant: 'Pack-N-Ship LLC',
    status: 'Active',
    maintenanceCost: 45,
    createdAt: '2025-12-01'
  },
  {
    id: 'asset-4',
    name: 'Warehouse B (Vercel Edge Bay)',
    type: 'Warehouse',
    monthlyRate: 3200,
    tenant: 'None (Renovation)',
    status: 'Idle',
    maintenanceCost: 850,
    createdAt: '2026-01-10'
  },
  {
    id: 'asset-5',
    name: 'Digital IP License (AchievePack design)',
    type: 'License',
    monthlyRate: 1500,
    tenant: 'Global Distrib Co',
    status: 'Active',
    maintenanceCost: 0,
    createdAt: '2025-08-01'
  }
]

const INITIAL_TRANSACTIONS: Transaction[] = [
  // --- JUNE 2026 (Current Month) ---
  {
    id: 't-jun-1',
    date: '2026-06-02',
    amount: 4500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-1',
    description: 'Warehouse A Monthly Rent collected',
    refNumber: 'INV-2026-0601',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-jun-2',
    date: '2026-06-02',
    amount: 1200,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-2',
    description: 'Gravure Cylinder Set Rent collected',
    refNumber: 'INV-2026-0602',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-jun-3',
    date: '2026-06-02',
    amount: 600,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-3',
    description: 'Forklift T-100 Rent collected',
    refNumber: 'INV-2026-0603',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-jun-4',
    date: '2026-06-02',
    amount: 1500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-5',
    description: 'Digital IP Design Licensing fee',
    refNumber: 'INV-2026-0605',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-jun-5',
    date: '2026-06-05',
    amount: 18500,
    type: 'incoming',
    label: 'Custom Order Sales',
    description: 'Custom Compostable Stand Up Pouches - 50k Coffee Roastery run',
    refNumber: 'PO-984402',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-jun-6',
    date: '2026-06-10',
    amount: 3400,
    type: 'outgoing',
    label: 'Raw Materials',
    description: 'Premium biodegradable PBS resin batch purchase',
    refNumber: 'VEND-9981',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-jun-7',
    date: '2026-06-12',
    amount: 850,
    type: 'outgoing',
    label: 'Asset Upkeep',
    assetId: 'asset-4',
    description: 'Roof repairing and sealing maintenance for Warehouse B',
    refNumber: 'MNT-4402',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-jun-8',
    date: '2026-06-15',
    amount: 480,
    type: 'outgoing',
    label: 'Utilities',
    description: 'Office water and high-speed fiber connection invoice',
    refNumber: 'UTIL-06',
    paymentMethod: 'Credit Card'
  },
  
  // --- MAY 2026 ---
  {
    id: 't-may-1',
    date: '2026-05-02',
    amount: 4500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-1',
    description: 'Warehouse A Rent collected',
    refNumber: 'INV-2026-0501',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-may-2',
    date: '2026-05-02',
    amount: 1200,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-2',
    description: 'Gravure Cylinder Set Rent collected',
    refNumber: 'INV-2026-0502',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-may-3',
    date: '2026-05-02',
    amount: 600,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-3',
    description: 'Forklift T-100 Rent collected',
    refNumber: 'INV-2026-0503',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-may-4',
    date: '2026-05-02',
    amount: 1500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-5',
    description: 'Digital IP Design Licensing fee',
    refNumber: 'INV-2026-0505',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-may-5',
    date: '2026-05-12',
    amount: 14200,
    type: 'incoming',
    label: 'Custom Order Sales',
    description: 'Artisan Chocolate pouch production run (30k boxes + labels)',
    refNumber: 'PO-421890',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-may-6',
    date: '2026-05-15',
    amount: 430,
    type: 'outgoing',
    label: 'Utilities',
    description: 'Office water and electrical billing',
    refNumber: 'UTIL-05',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-may-7',
    date: '2026-05-20',
    amount: 1500,
    type: 'outgoing',
    label: 'Shipping & Freight',
    description: 'Wholesale coffee bags air cargo shipping charges to Seattle',
    refNumber: 'FRT-8871',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-may-8',
    date: '2026-05-28',
    amount: 6500,
    type: 'outgoing',
    label: 'Salaries',
    description: 'Admin and operations monthly staff payroll payout',
    refNumber: 'PAY-2026-05',
    paymentMethod: 'Bank Transfer'
  },

  // --- APRIL 2026 ---
  {
    id: 't-apr-1',
    date: '2026-04-02',
    amount: 4500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-1',
    description: 'Warehouse A Rent collected',
    refNumber: 'INV-2026-0401',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-apr-2',
    date: '2026-04-02',
    amount: 1200,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-2',
    description: 'Gravure Cylinder Set Rent collected',
    refNumber: 'INV-2026-0402',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-apr-3',
    date: '2026-04-02',
    amount: 600,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-3',
    description: 'Forklift T-100 Rent collected',
    refNumber: 'INV-2026-0403',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-apr-4',
    date: '2026-04-02',
    amount: 1500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-5',
    description: 'Digital IP Design Licensing fee',
    refNumber: 'INV-2026-0405',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-apr-5',
    date: '2026-04-08',
    amount: 22000,
    type: 'incoming',
    label: 'Custom Order Sales',
    description: 'Large Format Kraft bag order for agricultural seeds distributor',
    refNumber: 'PO-881203',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-apr-6',
    date: '2026-04-10',
    amount: 5400,
    type: 'outgoing',
    label: 'Raw Materials',
    description: 'Raw kraft paper and unbleached fiber rolls replenishment',
    refNumber: 'VEND-9712',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-apr-7',
    date: '2026-04-15',
    amount: 450,
    type: 'outgoing',
    label: 'Utilities',
    description: 'Office internet and utility bill payment',
    refNumber: 'UTIL-04',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-apr-8',
    date: '2026-04-20',
    amount: 2200,
    type: 'outgoing',
    label: 'Shipping & Freight',
    description: 'Sea shipping booking container charges to Hamburg',
    refNumber: 'FRT-8843',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-apr-9',
    date: '2026-04-28',
    amount: 6500,
    type: 'outgoing',
    label: 'Salaries',
    description: 'Operations monthly staff payroll',
    refNumber: 'PAY-2026-04',
    paymentMethod: 'Bank Transfer'
  },

  // --- MARCH 2026 ---
  {
    id: 't-mar-1',
    date: '2026-03-02',
    amount: 4500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-1',
    description: 'Warehouse A Rent collected',
    refNumber: 'INV-2026-0301',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-mar-2',
    date: '2026-03-02',
    amount: 1200,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-2',
    description: 'Gravure Cylinder Set Rent collected',
    refNumber: 'INV-2026-0302',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-mar-3',
    date: '2026-03-02',
    amount: 600,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-3',
    description: 'Forklift T-100 Rent collected',
    refNumber: 'INV-2026-0303',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-mar-4',
    date: '2026-03-02',
    amount: 1500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-5',
    description: 'Digital IP Design Licensing fee',
    refNumber: 'INV-2026-0305',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-mar-10',
    date: '2026-03-05',
    amount: 250,
    type: 'outgoing',
    label: 'Asset Upkeep',
    assetId: 'asset-3',
    description: 'Hydraulic system servicing and battery change for Forklift',
    refNumber: 'MNT-4281',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-mar-11',
    date: '2026-03-12',
    amount: 16800,
    type: 'incoming',
    label: 'Custom Order Sales',
    description: 'Eco-friendly snack bags production for DTC health foods brand',
    refNumber: 'PO-330179',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-mar-12',
    date: '2026-03-15',
    amount: 3200,
    type: 'outgoing',
    label: 'Taxes',
    description: 'Quarterly state enterprise income tax payout',
    refNumber: 'TAX-2026-Q1',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-mar-13',
    date: '2026-03-15',
    amount: 440,
    type: 'outgoing',
    label: 'Utilities',
    description: 'Office water and electrical billing',
    refNumber: 'UTIL-03',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-mar-14',
    date: '2026-03-28',
    amount: 6500,
    type: 'outgoing',
    label: 'Salaries',
    description: 'Operations monthly staff payroll payout',
    refNumber: 'PAY-2026-03',
    paymentMethod: 'Bank Transfer'
  },

  // --- FEBRUARY 2026 ---
  {
    id: 't-feb-1',
    date: '2026-02-02',
    amount: 4500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-1',
    description: 'Warehouse A Rent collected',
    refNumber: 'INV-2026-0201',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-feb-2',
    date: '2026-02-02',
    amount: 1200,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-2',
    description: 'Gravure Cylinder Set Rent collected',
    refNumber: 'INV-2026-0202',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-feb-3',
    date: '2026-02-02',
    amount: 600,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-3',
    description: 'Forklift T-100 Rent collected',
    refNumber: 'INV-2026-0203',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-feb-4',
    date: '2026-02-02',
    amount: 1500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-5',
    description: 'Digital IP Design Licensing fee',
    refNumber: 'INV-2026-0205',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-feb-5',
    date: '2026-02-15',
    amount: 4100,
    type: 'outgoing',
    label: 'Raw Materials',
    description: 'Lamination film rolls and high-barrier compostable cellos buy',
    refNumber: 'VEND-9602',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-feb-6',
    date: '2026-02-15',
    amount: 460,
    type: 'outgoing',
    label: 'Utilities',
    description: 'Office high-speed fiber internet and electrical billing',
    refNumber: 'UTIL-02',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-feb-7',
    date: '2026-02-22',
    amount: 19800,
    type: 'incoming',
    label: 'Custom Order Sales',
    description: 'Custom Recyclable Stand-Up Pouches for organic almond brand',
    refNumber: 'PO-930182',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-feb-8',
    date: '2026-02-28',
    amount: 6500,
    type: 'outgoing',
    label: 'Salaries',
    description: 'Operations monthly staff payroll payout',
    refNumber: 'PAY-2026-02',
    paymentMethod: 'Bank Transfer'
  },

  // --- JANUARY 2026 ---
  {
    id: 't-jan-1',
    date: '2026-01-02',
    amount: 4500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-1',
    description: 'Warehouse A Rent collected',
    refNumber: 'INV-2026-0101',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-jan-2',
    date: '2026-01-02',
    amount: 1200,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-2',
    description: 'Gravure Cylinder Set Rent collected',
    refNumber: 'INV-2026-0102',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-jan-3',
    date: '2026-01-02',
    amount: 600,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-3',
    description: 'Forklift T-100 Rent collected',
    refNumber: 'INV-2026-0103',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-jan-4',
    date: '2026-01-02',
    amount: 1500,
    type: 'incoming',
    label: 'Rent Revenue',
    assetId: 'asset-5',
    description: 'Digital IP Design Licensing fee',
    refNumber: 'INV-2026-0105',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-jan-5',
    date: '2026-01-10',
    amount: 12000,
    type: 'incoming',
    label: 'Consulting',
    description: 'B2B Circular Economy transition blueprint planning fee',
    refNumber: 'INV-AP-9901',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 't-jan-6',
    date: '2026-01-15',
    amount: 430,
    type: 'outgoing',
    label: 'Utilities',
    description: 'Office water, electric, and cleaning vendor invoice',
    refNumber: 'UTIL-01',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-jan-7',
    date: '2026-01-20',
    amount: 950,
    type: 'outgoing',
    label: 'Shipping & Freight',
    description: 'Urgent air sample boxes courier service charges',
    refNumber: 'FRT-7712',
    paymentMethod: 'Credit Card'
  },
  {
    id: 't-jan-8',
    date: '2026-01-28',
    amount: 6500,
    type: 'outgoing',
    label: 'Salaries',
    description: 'Operations monthly staff payroll payout',
    refNumber: 'PAY-2026-01',
    paymentMethod: 'Bank Transfer'
  }
]

// ==========================================
// COMPONENT IMPLEMENTATION
// ==========================================

const BookkeepingPage: React.FC = () => {
  // Tabs: dashboard, transactions, calendar, assets, pandl
  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions' | 'calendar' | 'assets' | 'pandl'>('dashboard')

  // Core State
  const [assets, setAssets] = useState<RentAsset[]>(() => {
    const saved = localStorage.getItem('achievepack_bookkeeping_assets')
    return saved ? JSON.parse(saved) : INITIAL_ASSETS
  })

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('achievepack_bookkeeping_transactions')
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS
  })

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_assets', JSON.stringify(assets))
  }, [assets])

  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_transactions', JSON.stringify(transactions))
  }, [transactions])

  // Filters State for ledger list
  const [ledgerSearch, setLedgerSearch] = useState('')
  const [ledgerTypeFilter, setLedgerTypeFilter] = useState<'all' | 'incoming' | 'outgoing'>('all')
  const [ledgerLabelFilter, setLedgerLabelFilter] = useState<string>('all')
  const [ledgerAssetFilter, setLedgerAssetFilter] = useState<string>('all')

  // Date picker states for custom ledger ranges
  const [ledgerDateStart, setLedgerDateStart] = useState('')
  const [ledgerDateEnd, setLedgerDateEnd] = useState('')

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)) // Start in June 2026 to match mock data
  const [selectedDayDetail, setSelectedDayDetail] = useState<{ dayString: string; items: Transaction[] } | null>(null)
  const [showCalendarAddForm, setShowCalendarAddForm] = useState(false)

  // Transaction form state
  const [showAddForm, setShowAddForm] = useState(false)
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0])
  const [formAmount, setFormAmount] = useState('')
  const [formType, setFormType] = useState<'incoming' | 'outgoing'>('incoming')
  const [formLabel, setFormLabel] = useState<TransactionLabel>('Rent Revenue')
  const [formAssetId, setFormAssetId] = useState('')
  const [formDescription, setFormDescription] = useState('')
  const [formRefNumber, setFormRefNumber] = useState('')
  const [formPaymentMethod, setFormPaymentMethod] = useState<Transaction['paymentMethod']>('Bank Transfer')
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null)

  // Asset form state
  const [showAssetForm, setShowAssetForm] = useState(false)
  const [assetName, setAssetName] = useState('')
  const [assetType, setAssetType] = useState<RentAsset['type']>('Warehouse')
  const [assetRate, setAssetRate] = useState('')
  const [assetTenant, setAssetTenant] = useState('')
  const [assetStatus, setAssetStatus] = useState<RentAsset['status']>('Active')
  const [assetMaintenanceCost, setAssetMaintenanceCost] = useState('')
  const [editingAssetId, setEditingAssetId] = useState<string | null>(null)

  // P&L Date Range
  const [plYear, setPlYear] = useState('2026')
  const [plQuarter, setPlQuarter] = useState<'all' | 'Q1' | 'Q2' | 'Q3' | 'Q4'>('all')

  // Reset forms
  const resetTransactionForm = () => {
    setFormDate(new Date().toISOString().split('T')[0])
    setFormAmount('')
    setFormType('incoming')
    setFormLabel('Rent Revenue')
    setFormAssetId('')
    setFormDescription('')
    setFormRefNumber('')
    setFormPaymentMethod('Bank Transfer')
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

  // Handle adding/editing transaction
  const handleSaveTransaction = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formAmount || isNaN(Number(formAmount)) || Number(formAmount) <= 0) {
      toast.error('Please enter a valid amount')
      return
    }
    if (!formDescription.trim()) {
      toast.error('Please enter a description')
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
      toast.success('Transaction updated successfully!')
    } else {
      setTransactions(prev => [tData, ...prev])
      toast.success('Transaction logged successfully!')
    }

    setShowAddForm(false)
    setShowCalendarAddForm(false)
    resetTransactionForm()
  }

  // Edit transaction triggers
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

  // Delete transaction
  const handleDeleteTransaction = (id: string) => {
    if (window.confirm('Are you sure you want to delete this transaction record?')) {
      setTransactions(prev => prev.filter(t => t.id !== id))
      toast.success('Transaction deleted')
      // If we are looking at day details in calendar, close or sync
      setSelectedDayDetail(null)
    }
  }

  // Handle saving asset
  const handleSaveAsset = (e: React.FormEvent) => {
    e.preventDefault()
    if (!assetName.trim()) {
      toast.error('Please enter asset name')
      return
    }
    if (!assetRate || isNaN(Number(assetRate))) {
      toast.error('Please enter a valid monthly rate')
      return
    }

    const aData: RentAsset = {
      id: editingAssetId || `asset-${Date.now()}`,
      name: assetName.trim(),
      type: assetType,
      monthlyRate: Number(assetRate),
      tenant: assetTenant.trim() || 'Vacant',
      status: assetStatus,
      maintenanceCost: Number(assetMaintenanceCost) || 0,
      createdAt: new Date().toISOString().split('T')[0]
    }

    if (editingAssetId) {
      setAssets(prev => prev.map(a => (a.id === editingAssetId ? aData : a)))
      toast.success('Asset updated successfully!')
    } else {
      setAssets(prev => [...prev, aData])
      toast.success('Asset created successfully!')
    }

    setShowAssetForm(false)
    resetAssetForm()
  }

  // Edit asset trigger
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

  // Delete asset
  const handleDeleteAsset = (id: string) => {
    if (window.confirm('Delete this rental asset? Existing transactions linked to this asset will lose their tag reference.')) {
      setAssets(prev => prev.filter(a => a.id !== id))
      toast.success('Asset removed')
    }
  }

  // Auto label select based on type
  useEffect(() => {
    if (formType === 'incoming') {
      setFormLabel('Rent Revenue')
    } else {
      setFormLabel('Asset Upkeep')
    }
  }, [formType])

  // ==========================================
  // CALCULATED METRICS
  // ==========================================

  // Overall statistics (Historical totals)
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

  // Net yield for each individual asset: linked incomes minus upkeep costs
  const assetNetYields = useMemo(() => {
    const yields: Record<string, number> = {}
    assets.forEach(a => {
      // Calculate active transactions bound to this asset
      const linkedTransactions = transactions.filter(t => t.assetId === a.id)
      let income = 0
      let expense = a.maintenanceCost // Start with custom baseline maintenance cost

      linkedTransactions.forEach(t => {
        if (t.type === 'incoming') income += t.amount
        else expense += t.amount
      })
      yields[a.id] = income - expense
    })
    return yields
  }, [transactions, assets])

  // Filtered ledger records
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

  // Category breakdowns for P&L calculations
  const plReport = useMemo(() => {
    let totalRevenue = 0
    let totalCOGS = 0 // Raw materials, shipping
    let totalOpEx = 0 // Upkeep, utilities, salaries, taxes, other

    const breakdown: Record<TransactionLabel, number> = {
      'Rent Revenue': 0,
      'Custom Order Sales': 0,
      'Asset Sales': 0,
      'Consulting': 0,
      'Other Inflow': 0,
      'Asset Upkeep': 0,
      'Utilities': 0,
      'Salaries': 0,
      'Raw Materials': 0,
      'Shipping & Freight': 0,
      'Taxes': 0,
      'Other Outflow': 0
    }

    transactions.forEach(t => {
      // Date filter based on P&L selected Year & Quarter
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
        if (t.label === 'Raw Materials' || t.label === 'Shipping & Freight') {
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

  // CSV Exporter for P&L
  const exportPLToCSV = () => {
    const headers = 'Label,Amount (USD)\n'
    const rows = Object.entries(plReport.breakdown)
      .map(([label, amt]) => `"${label}",${amt}`)
      .join('\n')

    const summaryRows = `\n"Total Revenue",${plReport.revenue}\n"Cost of Goods Sold (COGS)",${plReport.cogs}\n"Gross Profit",${plReport.grossProfit}\n"Gross Margin %",${plReport.grossMargin.toFixed(2)}%\n"Operating Expenses (OpEx)",${plReport.opex}\n"Net Profit",${plReport.netProfit}\n"Net Margin %",${plReport.netMargin.toFixed(2)}%`

    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(headers + rows + summaryRows)
    const link = document.createElement('a')
    link.setAttribute('href', csvContent)
    link.setAttribute('download', `AchievePack_PL_Report_${plYear}_${plQuarter}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('P&L data exported successfully as CSV!')
  }

  // ==========================================
  // CALENDAR DRAW & GRID GENERATION
  // ==========================================

  const monthYearLabel = useMemo(() => {
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
  }, [currentDate])

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // First day of month
    const firstDay = new Date(year, month, 1)
    const startOffset = firstDay.getDay() // Sun = 0, Mon = 1, etc

    // Total days in month
    const totalDays = new Date(year, month + 1, 0).getDate()

    const days = []

    // Empty spots for padding start of month
    for (let i = 0; i < startOffset; i++) {
      days.push(null)
    }

    // Actual day entries
    for (let day = 1; day <= totalDays; day++) {
      const monthStr = String(month + 1).padStart(2, '0')
      const dayStr = String(day).padStart(2, '0')
      const dateString = `${year}-${monthStr}-${dayStr}`

      // Match transactions
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
      {/* ----------------- HEADER ----------------- */}
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
                  <h1 className="text-xl font-bold text-white tracking-wide">Company Bookkeeping & Cashflow</h1>
                  <p className="text-xs text-gray-400 font-mono">Control Panel Ledger System • Secure Edge</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  resetTransactionForm()
                  setShowAddForm(true)
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4" />
                Log Cashflow
              </button>
              <button
                onClick={() => {
                  resetAssetForm()
                  setShowAssetForm(true)
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-600 transition-all flex items-center gap-2"
              >
                <Building className="w-4 h-4" />
                New Rental Asset
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------- SUBHEADER STATS ----------------- */}
      <section className="bg-gray-900/40 border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* KPI 1 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/30 transition-all group">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">Total Net Income</p>
                <span className={`p-1.5 rounded-lg text-xs font-semibold ${stats.net >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {stats.net >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                </span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight mt-2 font-mono">
                ${stats.net.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                <Percent className="w-3.5 h-3.5 text-green-400" />
                <span>Net Margin: <strong className="text-gray-200">{stats.margin.toFixed(1)}%</strong></span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">Incoming (Revenue)</p>
                <span className="p-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-green-400 tracking-tight mt-2 font-mono">
                +${stats.inflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-gray-500 mt-2">Sum of all collected inflows</p>
            </div>

            {/* KPI 3 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-red-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">Outgoing (Expenses)</p>
                <span className="p-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs">
                  <TrendingDown className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-red-400 tracking-tight mt-2 font-mono">
                -${stats.outflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-gray-500 mt-2">Sum of all operational costs</p>
            </div>

            {/* KPI 4 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-blue-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">Active Assets Yielding</p>
                <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-xs">
                  <Building className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-blue-400 tracking-tight mt-2 font-mono">
                {stats.activeAssetsCount} <span className="text-sm text-gray-400 font-normal">/ {assets.length} Assets</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">Yielding constant monthly revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- MAIN TABS MENU ----------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-700/80 mb-8 overflow-x-auto gap-2 scrollbar-none">
          {[
            { id: 'dashboard', label: 'Cashflow Dashboard', icon: Sparkles },
            { id: 'transactions', label: 'Ledger Ledger (Transactions)', icon: Briefcase },
            { id: 'calendar', label: 'Interactive Calendar', icon: Calendar },
            { id: 'assets', label: 'Rental Assets Manager', icon: Building },
            { id: 'pandl', label: 'Profit & Loss Sheet', icon: FileSpreadsheet }
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

        {/* ----------------- TAB: DASHBOARD ----------------- */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Intro text */}
            <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  Financial Health Overview
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Summary analysis of assets monthly rental incomes and operational outgoing flows. Click tabs to edit.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm bg-gray-900/60 px-4 py-2.5 rounded-xl border border-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-gray-400">Database Sync Status: </span>
                <span className="text-white font-bold">100% Edge Persistent</span>
              </div>
            </div>

            {/* Quick List and Charts Breakdown */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column: Asset yield table */}
              <div className="lg:col-span-2 bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6">
                <h4 className="text-md font-bold text-white mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400" />
                  Rent Asset Income Performance (Net Yield)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700/60 text-gray-400">
                        <th className="pb-3 font-semibold">Asset Details</th>
                        <th className="pb-3 font-semibold">Current Tenant</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 font-semibold text-right">Rent Rate</th>
                        <th className="pb-3 font-semibold text-right">Net Yield (All-time)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60 font-medium">
                      {assets.map(asset => {
                        const netYield = assetNetYields[asset.id] || 0
                        return (
                          <tr key={asset.id} className="hover:bg-gray-800/30 transition-all group">
                            <td className="py-4">
                              <p className="text-white font-bold group-hover:text-green-400 transition-colors">{asset.name}</p>
                              <p className="text-xs text-gray-400 font-mono mt-0.5">{asset.type} • ID: {asset.id}</p>
                            </td>
                            <td className="py-4 text-gray-300">{asset.tenant}</td>
                            <td className="py-4">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                                asset.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                              }`}>
                                {asset.status}
                              </span>
                            </td>
                            <td className="py-4 text-right text-gray-300 font-mono">${asset.monthlyRate}/mo</td>
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

              {/* Right Column: Inflow/Outflow label distribution charts */}
              <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-6">
                <h4 className="text-md font-bold text-white mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-green-400" />
                  Cashflow Label Mix
                </h4>
                
                {/* Horizontal bar visualization */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Top Inflow Sources</p>
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

                <div className="space-y-4 pt-4 border-t border-gray-800">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Top Outflow Targets</p>
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

            {/* Recent 5 Transactions */}
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  Latest Operations Ledger
                </h4>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className="text-xs text-green-400 hover:text-green-300 font-semibold"
                >
                  View All Transactions →
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
                            <span>{t.date}</span>
                            {t.refNumber && (
                              <>
                                <span>•</span>
                                <span>Ref: {t.refNumber}</span>
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

        {/* ----------------- TAB: LEDGER / TRANSACTIONS ----------------- */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            {/* Filter controls */}
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={ledgerSearch}
                    onChange={(e) => setLedgerSearch(e.target.value)}
                    placeholder="Search desc or reference..."
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Type Filter */}
                <div>
                  <select
                    value={ledgerTypeFilter}
                    onChange={(e) => setLedgerTypeFilter(e.target.value as any)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Cashflow Directions</option>
                    <option value="incoming">Inflow (+)</option>
                    <option value="outgoing">Outflow (-)</option>
                  </select>
                </div>

                {/* Tag/Label Filter */}
                <div>
                  <select
                    value={ledgerLabelFilter}
                    onChange={(e) => setLedgerLabelFilter(e.target.value)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Category Labels</option>
                    <option value="Rent Revenue">Rent Revenue</option>
                    <option value="Custom Order Sales">Custom Order Sales</option>
                    <option value="Asset Sales">Asset Sales</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other Inflow">Other Inflow</option>
                    <option value="Asset Upkeep">Asset Upkeep</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Salaries">Salaries</option>
                    <option value="Raw Materials">Raw Materials</option>
                    <option value="Shipping & Freight">Shipping & Freight</option>
                    <option value="Taxes">Taxes</option>
                    <option value="Other Outflow">Other Outflow</option>
                  </select>
                </div>

                {/* Asset Link Filter */}
                <div>
                  <select
                    value={ledgerAssetFilter}
                    onChange={(e) => setLedgerAssetFilter(e.target.value)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Rental Assets</option>
                    {assets.map(a => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Filters Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-800">
                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-green-400" />
                  Custom Date Filters:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={ledgerDateStart}
                    onChange={(e) => setLedgerDateStart(e.target.value)}
                    className="bg-gray-900/60 border border-gray-600 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
                  />
                  <span className="text-gray-500 text-xs">to</span>
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
                    Reset Filter Parameters
                  </button>
                )}
              </div>
            </div>

            {/* Transactions count */}
            <div className="flex justify-between items-center text-sm text-gray-400">
              <p>Showing <strong className="text-white">{filteredLedger.length}</strong> transactions matching search parameters</p>
            </div>

            {/* List */}
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl overflow-hidden">
              <div className="divide-y divide-gray-800/60">
                {filteredLedger.length === 0 ? (
                  <div className="py-20 text-center text-gray-500 space-y-3">
                    <Briefcase className="w-12 h-12 mx-auto text-gray-600" />
                    <p className="text-lg font-semibold">No records found matching filters</p>
                    <p className="text-sm">Try broadening your search query or reset date options</p>
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
                              <span>Date: {t.date}</span>
                              {t.refNumber && (
                                <>
                                  <span>•</span>
                                  <span>Ref: {t.refNumber}</span>
                                </>
                              )}
                              <span>•</span>
                              <span>Method: {t.paymentMethod}</span>
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

        {/* ----------------- TAB: CALENDAR ----------------- */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-md font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-400" />
                  Monthly Cashflow Grid View
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Daily collected incomes (green) and operational outflows (red). Click any date block to view list or add records.
                </p>
              </div>

              {/* Month Selector */}
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

            {/* Calendar Grid */}
            <div className="bg-gray-850 border border-gray-750 rounded-2xl overflow-hidden shadow-2xl">
              {/* Day names */}
              <div className="grid grid-cols-7 bg-gray-800/80 border-b border-gray-700/80 text-center py-3 text-xs font-bold text-gray-400 tracking-wider">
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
              </div>

              {/* Grid content */}
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
                          {day}
                        </span>
                        {items.length > 0 && (
                          <span className="text-[10px] bg-gray-800 text-gray-300 font-bold px-1.5 py-0.5 rounded">
                            {items.length} records
                          </span>
                        )}
                      </div>

                      {/* Flows */}
                      <div className="space-y-1 mt-4">
                        {inflow > 0 && (
                          <div className="text-[10px] font-bold font-mono text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center justify-between">
                            <span>IN:</span>
                            <span>+${inflow.toLocaleString()}</span>
                          </div>
                        )}
                        {outflow > 0 && (
                          <div className="text-[10px] font-bold font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded flex items-center justify-between">
                            <span>OUT:</span>
                            <span>-${outflow.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Daily Drawer / Popover Detail */}
            {selectedDayDetail && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-gray-900 border border-gray-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
                  <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                    <div>
                      <h3 className="text-md font-bold text-white flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-400" />
                        Transactions on {selectedDayDetail.dayString}
                      </h3>
                      <p className="text-xs text-gray-400">Total detailed operations logs</p>
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
                        <p className="text-sm">No cashflow transactions recorded for this day.</p>
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
                                <span>Ref: {t.refNumber || 'N/A'}</span>
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
                      Add Record to this Day
                    </button>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      Dismiss View
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----------------- TAB: RENTAL ASSETS ----------------- */}
        {activeTab === 'assets' && (
          <div className="space-y-6">
            {/* List and dynamic layout */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Asset grid list (Left 2 columns) */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-gray-300">Managed Company Assets</h4>
                  <span className="text-xs text-gray-400 font-mono">{assets.length} items logged</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {assets.map(asset => {
                    const netYield = assetNetYields[asset.id] || 0
                    return (
                      <div key={asset.id} className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-5 flex flex-col justify-between hover:border-green-500/30 transition-all group">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                              asset.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            }`}>
                              {asset.status}
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
                            <p className="text-xs text-gray-400 mt-1 font-mono">Category: {asset.type}</p>
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-gray-850 space-y-2 text-xs">
                          <div className="flex justify-between text-gray-400">
                            <span>Monthly rental rate:</span>
                            <span className="font-mono text-white font-bold">${asset.monthlyRate.toLocaleString()}/mo</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Current tenant link:</span>
                            <span className="text-gray-200 font-semibold">{asset.tenant}</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Baseline maintenance cost:</span>
                            <span className="font-mono text-red-400">${asset.maintenanceCost.toLocaleString()}/mo</span>
                          </div>
                          <div className="flex justify-between text-gray-400 pt-2 border-t border-gray-850">
                            <span className="font-semibold">Calculated net yield:</span>
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

              {/* Side Asset creator tip card */}
              <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-4 h-fit">
                <h4 className="text-md font-bold text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-green-400" />
                  Asset Yield Strategy
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Rent assets are physical or digital properties owned by the corporation that produce steady lease revenues.
                </p>
                <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-850 space-y-2">
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    How to track yields:
                  </p>
                  <ol className="text-[11px] text-gray-400 space-y-1.5 list-decimal pl-4">
                    <li>Create the asset structure here.</li>
                    <li>Link ledger income transactions using the "Asset Binding" selector.</li>
                    <li>Log upkeep maintenance bills specifying the same asset to calculate individual net yields instantly.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- TAB: P&L REPORT ----------------- */}
        {activeTab === 'pandl' && (
          <div className="space-y-6">
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-6">
              {/* Range Filters */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-800">
                <div className="flex items-center gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-bold">Select Fiscal Year</label>
                    <select
                      value={plYear}
                      onChange={(e) => setPlYear(e.target.value)}
                      className="bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-bold">Select Period</label>
                    <select
                      value={plQuarter}
                      onChange={(e) => setPlQuarter(e.target.value as any)}
                      className="bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="all">Full Year (12 months)</option>
                      <option value="Q1">Q1 (Jan - March)</option>
                      <option value="Q2">Q2 (April - June)</option>
                      <option value="Q3">Q3 (July - Sept)</option>
                      <option value="Q4">Q4 (Oct - Dec)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={exportPLToCSV}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-emerald-500 transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Export CSV Report
                </button>
              </div>

              {/* Dynamic P&L Calculation Sheet layout */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-white text-center">
                    Statement of Profit and Loss — {plYear} {plQuarter === 'all' ? 'Full Fiscal Year' : plQuarter}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono text-center mt-1">Generated: {new Date().toLocaleString()}</p>
                </div>

                {/* Grid rows */}
                <div className="space-y-4 max-w-3xl mx-auto">
                  {/* Revenue Row */}
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-md font-bold text-white flex items-center gap-2">
                        <TrendingUp className="w-4.5 h-4.5 text-green-400" />
                        Operating Revenue (Inflows)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Sum of Rent Revenue, Custom Orders, and consulting fees</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-green-400">+${plReport.revenue.toLocaleString()}</span>
                  </div>

                  {/* COGS Row */}
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-md font-bold text-white flex items-center gap-2">
                        <TrendingDown className="w-4.5 h-4.5 text-rose-400" />
                        Cost of Goods Sold (COGS)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Sum of raw material buying, freight shipping, and freight storage</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-rose-400">-${plReport.cogs.toLocaleString()}</span>
                  </div>

                  {/* Gross Profit Row */}
                  <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-700/60 flex items-center justify-between border-l-4 border-l-emerald-500">
                    <div>
                      <p className="text-md font-bold text-emerald-400 uppercase tracking-wider">Gross Profit Margin</p>
                      <p className="text-xs text-gray-400 mt-1">Total revenue minus direct costs. Gross margin percentage details.</p>
                    </div>
                    <div className="text-right font-mono">
                      <p className="text-lg font-bold text-white">${plReport.grossProfit.toLocaleString()}</p>
                      <p className="text-xs text-emerald-400 font-semibold">{plReport.grossMargin.toFixed(1)}% margin</p>
                    </div>
                  </div>

                  {/* OpEx Row */}
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-md font-bold text-white flex items-center gap-2">
                        <TrendingDown className="w-4.5 h-4.5 text-rose-400" />
                        Operating Expenses (OpEx)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Sum of Salaries, Asset Maintenance, Utilities, and taxes</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-rose-400">-${plReport.opex.toLocaleString()}</span>
                  </div>

                  {/* Net Income Row */}
                  <div className="p-5 bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border border-green-500/30 rounded-xl flex items-center justify-between border-l-4 border-l-green-500">
                    <div>
                      <p className="text-lg font-bold text-green-400 uppercase tracking-wider">Net Profit (Income)</p>
                      <p className="text-xs text-gray-400 mt-1">Final company cash profit after all business expenses.</p>
                    </div>
                    <div className="text-right font-mono">
                      <p className="text-xl font-bold text-green-400">${plReport.netProfit.toLocaleString()}</p>
                      <p className="text-xs text-green-400 font-bold">{plReport.netMargin.toFixed(1)}% net margin</p>
                    </div>
                  </div>
                </div>

                {/* Sub breakdown details table */}
                <div className="max-w-3xl mx-auto pt-6 border-t border-gray-800 space-y-4">
                  <h4 className="text-sm font-bold text-gray-300">Detailed Accounts Breakdown</h4>
                  <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20">
                    <div className="divide-y divide-gray-800/60">
                      {Object.entries(plReport.breakdown).map(([label, amt]) => {
                        const isIncome = ['Rent Revenue', 'Custom Order Sales', 'Asset Sales', 'Consulting', 'Other Inflow'].includes(label)
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

      {/* ----------------- MODAL: ADD/EDIT TRANSACTION ----------------- */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white">
                {editingTransactionId ? 'Modify Ledger Record' : 'Record Transaction / Invoice'}
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
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Amount (USD)</label>
                  <input
                    type="number"
                    required
                    min="0.01"
                    step="0.01"
                    placeholder="e.g. 1500"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500 font-mono"
                  />
                </div>
              </div>

              {/* Type toggle */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Flow Direction</label>
                <div className="grid grid-cols-2 gap-2 bg-gray-950 p-1 rounded-xl border border-gray-800">
                  <button
                    type="button"
                    onClick={() => setFormType('incoming')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'incoming' ? 'bg-green-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Incoming Inflow (+)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('outgoing')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'outgoing' ? 'bg-red-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Outgoing Outflow (-)
                  </button>
                </div>
              </div>

              {/* Category Label */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Category Account Tag</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as TransactionLabel)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  {formType === 'incoming' ? (
                    <>
                      <option value="Rent Revenue">Rent Revenue (Leases)</option>
                      <option value="Custom Order Sales">Custom Order Sales</option>
                      <option value="Asset Sales">Asset Sales</option>
                      <option value="Consulting">Consulting fee</option>
                      <option value="Other Inflow">Other Income</option>
                    </>
                  ) : (
                    <>
                      <option value="Asset Upkeep">Asset Upkeep (Maintenance)</option>
                      <option value="Utilities">Utilities (Bills)</option>
                      <option value="Salaries">Salaries (Payroll)</option>
                      <option value="Raw Materials">Raw Materials (Purchases)</option>
                      <option value="Shipping & Freight">Shipping & Freight</option>
                      <option value="Taxes">Taxes</option>
                      <option value="Other Outflow">Other operational expenses</option>
                    </>
                  )}
                </select>
              </div>

              {/* Asset Binding (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Asset Binding link (Optional)</label>
                <select
                  value={formAssetId}
                  onChange={(e) => setFormAssetId(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">No rental asset link</option>
                  {assets.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Description / Notes</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Warehouse monthly rent collected"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Ref Number */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Reference ID (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. INV-9981"
                    value={formRefNumber}
                    onChange={(e) => setFormRefNumber(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Payment Method</label>
                  <select
                    value={formPaymentMethod}
                    onChange={(e) => setFormPaymentMethod(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Stripe">Stripe</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cash">Cash</option>
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
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  {editingTransactionId ? 'Save Edits' : 'Log Cashflow'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- MODAL: CALENDAR ADD TRANSACTION ----------------- */}
      {showCalendarAddForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white">Record cashflow on {formDate}</h3>
              <button
                onClick={() => {
                  setShowCalendarAddForm(false)
                  resetTransactionForm()
                }}
                className="p-1 bg-gray-700 hover:bg-gray-650 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-6 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    readOnly
                    value={formDate}
                    className="w-full bg-gray-950 border border-gray-800 text-gray-500 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Amount (USD)</label>
                  <input
                    type="number"
                    required
                    min="0.01"
                    step="0.01"
                    placeholder="e.g. 1500"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Type toggle */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Flow Direction</label>
                <div className="grid grid-cols-2 gap-2 bg-gray-950 p-1 rounded-xl border border-gray-800">
                  <button
                    type="button"
                    onClick={() => setFormType('incoming')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'incoming' ? 'bg-green-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Incoming Inflow (+)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('outgoing')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'outgoing' ? 'bg-red-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Outgoing Outflow (-)
                  </button>
                </div>
              </div>

              {/* Category Label */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Category Account Tag</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as TransactionLabel)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  {formType === 'incoming' ? (
                    <>
                      <option value="Rent Revenue">Rent Revenue (Leases)</option>
                      <option value="Custom Order Sales">Custom Order Sales</option>
                      <option value="Asset Sales">Asset Sales</option>
                      <option value="Consulting">Consulting fee</option>
                      <option value="Other Inflow">Other Income</option>
                    </>
                  ) : (
                    <>
                      <option value="Asset Upkeep">Asset Upkeep (Maintenance)</option>
                      <option value="Utilities">Utilities (Bills)</option>
                      <option value="Salaries">Salaries (Payroll)</option>
                      <option value="Raw Materials">Raw Materials (Purchases)</option>
                      <option value="Shipping & Freight">Shipping & Freight</option>
                      <option value="Taxes">Taxes</option>
                      <option value="Other Outflow">Other operational expenses</option>
                    </>
                  )}
                </select>
              </div>

              {/* Asset Binding */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Asset Binding link (Optional)</label>
                <select
                  value={formAssetId}
                  onChange={(e) => setFormAssetId(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  <option value="">No rental asset link</option>
                  {assets.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Description / Notes</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Warehouse monthly rent collected"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Ref Number */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Reference ID (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. INV-9981"
                    value={formRefNumber}
                    onChange={(e) => setFormRefNumber(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-750 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Payment Method</label>
                  <select
                    value={formPaymentMethod}
                    onChange={(e) => setFormPaymentMethod(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Stripe">Stripe</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cash">Cash</option>
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
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  Log Cashflow
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- MODAL: ADD/EDIT ASSET ----------------- */}
      {showAssetForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white">
                {editingAssetId ? 'Modify Rental Asset Structure' : 'Log New Rental Asset'}
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
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Asset Name / Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Warehouse A (Shanghai Outpost)"
                  value={assetName}
                  onChange={(e) => setAssetName(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Type */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Asset Category</label>
                  <select
                    value={assetType}
                    onChange={(e) => setAssetType(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="Warehouse">Warehouse (Real Estate)</option>
                    <option value="Equipment">Equipment (Machinery)</option>
                    <option value="Vehicle">Vehicle (Forklifts, Trucks)</option>
                    <option value="License">Digital IP / License</option>
                    <option value="Other">Other Asset Type</option>
                  </select>
                </div>

                {/* Rate */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Monthly Lease Rate (USD)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="e.g. 4500"
                    value={assetRate}
                    onChange={(e) => setAssetRate(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Tenant */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Current Tenant Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Fast Logistics Inc"
                    value={assetTenant}
                    onChange={(e) => setAssetTenant(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Active Status</label>
                  <select
                    value={assetStatus}
                    onChange={(e) => setAssetStatus(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="Active">Active (Yielding)</option>
                    <option value="Idle">Idle (Vacant / Maintenance)</option>
                  </select>
                </div>
              </div>

              {/* Maintenance cost baseline */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Baseline Maintenance Cost (USD / month)</label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 150"
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
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  {editingAssetId ? 'Save Asset Edits' : 'Save Asset'}
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
