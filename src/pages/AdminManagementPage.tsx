import React, { useState, useEffect, useMemo, startTransition } from 'react'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { supabase, Quote, ArtworkFile, Profile, ArtworkComment, CRMInquiry, Project } from '../lib/supabase'
import { analyzeArtworkWithXAI, getAISearchableText } from '../lib/artworkAnalysis'
import { SlidingNumber } from '../components/animate-ui/primitives/texts/sliding-number'
import { 
  Home, FileCheck, Image as ImageIcon, LogOut, Eye, Trash2, ArrowLeft, 
  RefreshCw, CheckCircle, Clock, AlertCircle, MessageSquare, X, 
  Mail, Globe, Camera, FileText, Link2, Upload, Tag, Search, LayoutGrid, List, Plus, User, Send, RotateCcw, Archive, Bell, Zap, Palette
} from 'lucide-react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '../components/animate-ui/components/radix/tabs'
import { DataManagementBar } from '../components/ui/DataManagementBar'
import { CheckCircle as ApproveIcon, XCircle as RejectIcon, Send as SendIcon } from 'lucide-react'
import { NotificationList, type Notification } from '../components/animate-ui/components/community/notification-list'
import { PinList, type PinListItem } from '../components/animate-ui/components/community/pin-list'
import { ArtworkStatusAvatar, AdminWorkQueue, type StatusItem, type WorkItem, type ArtworkStatus } from '../components/animate-ui/components/community/user-presence-avatar'
import { QuickAccessSheet, type QuickAccessItem, type QuoteStatus, type InvoiceStatus, type ArtworkQuickStatus } from '../components/ui/QuickAccessSheet'

type TabType = 'quotes' | 'artwork' | 'projects' | 'customers' | 'bin'

const ADMIN_EMAIL = 'ryan@achievepack.com'

const AdminManagementPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user, signOut, loading: authLoading } = useAuth()
  const [activeTab, setActiveTab] = useState<TabType>('quotes')
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [artworks, setArtworks] = useState<ArtworkFile[]>([])
    const [deletedArtworks, setDeletedArtworks] = useState<ArtworkFile[]>([])
    const [deletedQuotes, setDeletedQuotes] = useState<Quote[]>([])
  const [customers, setCustomers] = useState<Profile[]>([])
  const [inquiries, setInquiries] = useState<CRMInquiry[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkFile | null>(null)
  const [artworkFeedback, setArtworkFeedback] = useState('')
  const [internalFile, setInternalFile] = useState<File | null>(null)  // Internal remark file
  const [uploadingInternal, setUploadingInternal] = useState(false)
  const [adminReply, setAdminReply] = useState('')
  const [quotedAmount, setQuotedAmount] = useState('')
  
  // Coding assignment states
  const [artworkCustomerCode, setArtworkCustomerCode] = useState('')
  const [artworkProductCode, setArtworkProductCode] = useState('')
  const [artworkLinkType, setArtworkLinkType] = useState<'order' | 'quote' | 'none'>('none')
  const [artworkLinkedId, setArtworkLinkedId] = useState('')
  const [artworkAssignedUserId, setArtworkAssignedUserId] = useState('')  // Assign customer to artwork
  const [assignCustomerSearch, setAssignCustomerSearch] = useState('')  // Search for assign customer
  
  // Search and view states
  const [artworkSearch, setArtworkSearch] = useState('')
  const [artworkViewMode, setArtworkViewMode] = useState<'card' | 'list'>('card')
  const [hoveredArtworkId, setHoveredArtworkId] = useState<string | null>(null)
  
  // Admin upload artwork states
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadCustomerId, setUploadCustomerId] = useState('')
  const [uploadContactType, setUploadContactType] = useState<'customer' | 'inquiry'>('customer')
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [contactSearch, setContactSearch] = useState('')
  
  // Artwork comments states (Thread System)
  const [artworkComments, setArtworkComments] = useState<ArtworkComment[]>([])
  const [newComment, setNewComment] = useState('')
  const [loadingComments, setLoadingComments] = useState(false)
  const [threadFile, setThreadFile] = useState<File | null>(null)
  const [uploadingThread, setUploadingThread] = useState(false)
  
  // Pagination states
  const [artworkPage, setArtworkPage] = useState(1)
  const [quotePage, setQuotePage] = useState(1)
  const ITEMS_PER_PAGE = 12
  
  // Notification dropdown state
  const [showNotifications, setShowNotifications] = useState(false)
  
  // Generate notifications from recent activity
  const notifications: Notification[] = useMemo(() => {
    const notifs: Notification[] = []
    const now = Date.now()
    
    // Helper to format time ago
    const timeAgo = (date: string) => {
      const diff = now - new Date(date).getTime()
      const mins = Math.floor(diff / 60000)
      if (mins < 1) return 'just now'
      if (mins < 60) return `${mins}m ago`
      const hours = Math.floor(mins / 60)
      if (hours < 24) return `${hours}h ago`
      const days = Math.floor(hours / 24)
      return `${days}d ago`
    }
    
    // Recent pending artworks (customer uploads)
    artworks
      .filter(a => a.status === 'pending_review')
      .slice(0, 3)
      .forEach(a => {
        notifs.push({
          id: `artwork-${a.id}`,
          title: 'New Artwork Uploaded',
          subtitle: a.name,
          time: timeAgo(a.created_at),
          type: 'upload',
          onClick: () => {
            setActiveTab('artwork')
            setSelectedArtwork(a)
          }
        })
      })
    
    // Recent pending quotes
    quotes
      .filter(q => q.status === 'pending')
      .slice(0, 3)
      .forEach(q => {
        notifs.push({
          id: `quote-${q.id}`,
          title: q.is_rfq ? 'New RFQ Request' : 'New Quote Request',
          subtitle: q.notes?.slice(0, 50) || 'Awaiting response',
          time: timeAgo(q.created_at),
          type: 'default',
          onClick: () => {
            setActiveTab('quotes')
            setSelectedQuote(q)
          }
        })
      })
    
    // Recently approved artworks
    artworks
      .filter(a => a.status === 'approved' && a.updated_at)
      .slice(0, 2)
      .forEach(a => {
        notifs.push({
          id: `approved-${a.id}`,
          title: 'Artwork Approved',
          subtitle: a.name,
          time: timeAgo(a.updated_at || a.created_at),
          type: 'approve',
          isAdmin: true
        })
      })
    
    // Sort by time (most recent first) and limit
    return notifs.slice(0, 6)
  }, [artworks, quotes])
  
  // Pinned items state (stored in localStorage)
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('admin_pinned_items')
    return saved ? new Set(JSON.parse(saved)) : new Set()
  })
  
  // Save pinned items to localStorage
  useEffect(() => {
    localStorage.setItem('admin_pinned_items', JSON.stringify([...pinnedIds]))
  }, [pinnedIds])
  
  // Handle pin change
  const handlePinChange = (id: string | number, pinned: boolean) => {
    setPinnedIds(prev => {
      const next = new Set(prev)
      if (pinned) next.add(String(id))
      else next.delete(String(id))
      return next
    })
  }
  
  // Generate pin list items from quotes and artworks
  const pinListItems: PinListItem[] = useMemo(() => {
    const items: PinListItem[] = []
    
    // Add pending quotes
    quotes.filter(q => q.status === 'pending').slice(0, 5).forEach(q => {
      items.push({
        id: q.id,
        name: q.is_rfq ? `RFQ: ${q.quote_number}` : `Quote: ${q.quote_number}`,
        info: q.notes?.slice(0, 40) || 'Awaiting response',
        type: 'quote',
        badge: 'Pending',
        badgeColor: 'bg-yellow-100 text-yellow-700',
        pinned: pinnedIds.has(q.id),
        onClick: () => {
          setActiveTab('quotes')
          setSelectedQuote(q)
        }
      })
    })
    
    // Add pending artworks
    artworks.filter(a => a.status === 'pending_review').slice(0, 5).forEach(a => {
      items.push({
        id: a.id,
        name: a.name,
        info: (a as any).customer_email || 'Review needed',
        type: 'artwork',
        badge: 'Review',
        badgeColor: 'bg-purple-100 text-purple-700',
        pinned: pinnedIds.has(a.id),
        onClick: () => {
          setActiveTab('artwork')
          setSelectedArtwork(a)
        }
      })
    })
    
    // Add in-progress artworks
    artworks.filter(a => a.status === 'in_review' || a.status === 'prepress').slice(0, 3).forEach(a => {
      items.push({
        id: a.id,
        name: a.name,
        info: a.status === 'prepress' ? 'In Prepress' : 'In Review',
        type: 'artwork',
        badge: a.status === 'prepress' ? 'Prepress' : 'Review',
        badgeColor: 'bg-blue-100 text-blue-700',
        pinned: pinnedIds.has(a.id),
        onClick: () => {
          setActiveTab('artwork')
          setSelectedArtwork(a)
        }
      })
    })
    
    // Sort: pinned first
    return items.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
  }, [quotes, artworks, pinnedIds])
  
  // Artwork status items for ArtworkStatusAvatar
  const artworkStatusItems: StatusItem[] = useMemo(() => {
    return artworks.map(a => {
      const customer = customers.find(c => c.id === a.user_id)
      return {
        id: a.id,
        name: a.name,
        fallback: a.name.slice(0, 2).toUpperCase(),
        tooltip: customer?.full_name || customer?.email || 'Unassigned',
        status: a.status as ArtworkStatus,
        onClick: () => {
          setActiveTab('artwork')
          setSelectedArtwork(a)
        }
      }
    })
  }, [artworks, customers])
  
  // Admin work queue items (items needing attention)
  const workQueueItems: WorkItem[] = useMemo(() => {
    const items: WorkItem[] = []
    
    // Pending quotes need response
    quotes.filter(q => q.status === 'pending').forEach(q => {
      const customer = customers.find(c => c.id === q.user_id)
      items.push({
        id: q.id,
        type: 'quote',
        name: q.is_rfq ? `RFQ: ${q.quote_number}` : `Quote: ${q.quote_number}`,
        customerName: customer?.full_name || customer?.email,
        status: 'pending',
        urgent: true,
        onClick: () => {
          setActiveTab('quotes')
          setSelectedQuote(q)
        }
      })
    })
    
    // Artworks needing review
    artworks.filter(a => a.status === 'pending_review').forEach(a => {
      const customer = customers.find(c => c.id === a.user_id)
      items.push({
        id: a.id,
        type: 'artwork',
        name: a.name,
        customerName: customer?.full_name || customer?.email,
        status: 'pending_review',
        urgent: true,
        onClick: () => {
          setActiveTab('artwork')
          setSelectedArtwork(a)
        }
      })
    })
    
    // Artworks in prepress (active work)
    artworks.filter(a => a.status === 'prepress' || a.status === 'in_review').forEach(a => {
      const customer = customers.find(c => c.id === a.user_id)
      items.push({
        id: a.id,
        type: 'artwork',
        name: a.name,
        customerName: customer?.full_name || customer?.email,
        status: a.status,
        urgent: false,
        onClick: () => {
          setActiveTab('artwork')
          setSelectedArtwork(a)
        }
      })
    })
    
    // Active orders
    orders.filter(o => o.status === 'pending' || o.status === 'processing').forEach(o => {
      const customer = customers.find(c => c.id === o.user_id)
      items.push({
        id: o.id,
        type: 'order',
        name: `Order #${o.order_number || o.id.slice(0, 8)}`,
        customerName: customer?.full_name || customer?.email,
        status: o.status,
        urgent: o.status === 'pending',
        onClick: () => {
          // Navigate to AdminPage orders tab
          navigate(`/ctrl-x9k7m?tab=orders&order=${o.id}`)
        }
      })
    })
    
    return items
  }, [quotes, artworks, orders, customers])
  
  // Quick Access items for sheet (with radial menu status)
  const quickAccessItems: QuickAccessItem[] = useMemo(() => {
    const items: QuickAccessItem[] = []
    
    // Add quotes
    quotes.filter(q => q.status === 'pending').slice(0, 8).forEach(q => {
      const customer = customers.find(c => c.id === q.user_id)
      items.push({
        id: q.id,
        name: q.is_rfq ? `RFQ: ${q.quote_number}` : `Quote: ${q.quote_number}`,
        info: customer?.full_name || customer?.email || 'Unknown',
        type: 'quote',
        status: 'received' as QuoteStatus,
        onClick: () => {
          setActiveTab('quotes')
          setSelectedQuote(q)
        }
      })
    })
    
    // Add artworks needing attention
    artworks.filter(a => ['pending_review', 'in_review', 'prepress', 'proof_ready'].includes(a.status)).slice(0, 8).forEach(a => {
      const customer = customers.find(c => c.id === a.user_id)
      items.push({
        id: a.id,
        name: a.name,
        info: customer?.full_name || customer?.email || 'Unknown',
        type: 'artwork',
        status: 'received' as ArtworkQuickStatus,
        onClick: () => {
          setActiveTab('artwork')
          setSelectedArtwork(a)
        }
      })
    })
    
    // Add active orders as invoices
    orders.filter(o => ['pending', 'processing', 'production', 'shipped'].includes(o.status)).slice(0, 8).forEach(o => {
      const customer = customers.find(c => c.id === o.user_id)
      items.push({
        id: o.id,
        name: `Order #${o.order_number || o.id.slice(0, 8)}`,
        info: customer?.full_name || customer?.email || 'Unknown',
        type: 'invoice',
        status: 'pending' as InvoiceStatus,
        onClick: () => {
          // Navigate to AdminPage orders tab
          navigate(`/ctrl-x9k7m?tab=orders&order=${o.id}`)
        }
      })
    })
    
    return items
  }, [quotes, artworks, orders, customers])
  
  // Handle quick access status change
  const handleQuickAccessStatusChange = async (id: string, type: 'quote' | 'invoice' | 'artwork', newStatus: string) => {
    try {
      if (type === 'quote') {
        // For quotes, we map our custom status to the DB status
        let dbStatus = 'pending'
        if (newStatus === 'win') dbStatus = 'accepted'
        else if (newStatus === 'lose') dbStatus = 'rejected'
        
        await supabase.from('quotes').update({ status: dbStatus }).eq('id', id)
        // Also update RFQ if applicable
        await supabase.from('rfq_submissions').update({ status: dbStatus }).eq('id', id)
      } else if (type === 'artwork') {
        // For artwork, map to existing statuses
        const dbStatus = newStatus === 'confirmed_by_customer' ? 'approved' : 'pending_review'
        await supabase.from('artwork_files').update({ status: dbStatus }).eq('id', id)
      } else if (type === 'invoice') {
        // For orders/invoices
        let dbStatus = 'pending'
        if (newStatus === 'deposit_received') dbStatus = 'confirmed'
        else if (newStatus === 'spec_confirmed') dbStatus = 'confirmed'
        else if (newStatus === 'in_production') dbStatus = 'production'
        else if (newStatus === 'production_finished') dbStatus = 'production'
        else if (newStatus === 'final_payment') dbStatus = 'production'
        else if (newStatus === 'shipped') dbStatus = 'shipped'
        else if (newStatus === 'arrived') dbStatus = 'delivered'
        
        await supabase.from('orders').update({ status: dbStatus }).eq('id', id)
      }
      
      // Refresh data
      fetchData()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  // Check URL params for tab
  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab === 'quotes' || tab === 'artwork') {
      setActiveTab(tab)
    }
  }, [searchParams])

  // Check if user is admin
  useEffect(() => {
    if (!authLoading && (!user || user.email !== ADMIN_EMAIL)) {
      navigate('/signin')
    }
  }, [user, authLoading, navigate])

  // Fetch data
  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) {
      fetchData()
    }
  }, [user])

  const fetchData = async () => {
    setLoading(true)
    const [quotesRes, rfqRes, artworksRes, customersRes, ordersRes, inquiriesRes, deletedArtworksRes, deletedQuotesRes, deletedRfqRes, projectsRes] = await Promise.all([
      supabase.from('quotes').select('*').is('deleted_at', null).order('created_at', { ascending: false }),
      supabase.from('rfq_submissions').select('*').is('deleted_at', null).order('created_at', { ascending: false }),
      supabase.from('artwork_files').select('*').is('deleted_at', null).order('created_at', { ascending: false }),
      supabase.from('profiles').select('*').range(0, 9999),
      supabase.from('orders').select('*').order('created_at', { ascending: false }),
      supabase.from('crm_inquiries').select('*').order('created_at', { ascending: false }).range(0, 9999),
      // Fetch deleted items for bin
      supabase.from('artwork_files').select('*').not('deleted_at', 'is', null).order('deleted_at', { ascending: false }),
      supabase.from('quotes').select('*').not('deleted_at', 'is', null).order('deleted_at', { ascending: false }),
      supabase.from('rfq_submissions').select('*').not('deleted_at', 'is', null).order('deleted_at', { ascending: false }),
      // Fetch all projects for admin view
      supabase.from('projects').select('*').order('created_at', { ascending: false })
    ])
    
    // Merge quotes and RFQ submissions
    const regularQuotes = quotesRes.data || []
    const rfqSubmissions = (rfqRes.data || []).map(rfq => ({
      ...rfq,
      quote_number: `RFQ-${rfq.id.slice(0, 8)}`,
      total_amount: 0,
      valid_until: new Date(new Date(rfq.created_at).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      notes: rfq.message,
      is_rfq: true
    }))
    
    const allQuotes = [...regularQuotes, ...rfqSubmissions].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    
    // Merge deleted quotes and RFQ submissions
    const deletedRegularQuotes = deletedQuotesRes.data || []
    const deletedRfqSubmissions = (deletedRfqRes.data || []).map(rfq => ({
      ...rfq,
      quote_number: `RFQ-${rfq.id.slice(0, 8)}`,
      total_amount: 0,
      is_rfq: true
    }))
    const allDeletedQuotes = [...deletedRegularQuotes, ...deletedRfqSubmissions].sort(
      (a, b) => new Date(b.deleted_at || b.created_at).getTime() - new Date(a.deleted_at || a.created_at).getTime()
    )
    
    setQuotes(allQuotes)
    setArtworks(artworksRes.data || [])
    setDeletedArtworks(deletedArtworksRes.data || [])
    setDeletedQuotes(allDeletedQuotes)
    setCustomers(customersRes.data || [])
    setInquiries(inquiriesRes.data || [])
    setOrders(ordersRes.data || [])
    setProjects(projectsRes.data || [])
    setLoading(false)
  }

  // Filter contacts based on search
  const filteredCustomers = customers.filter(c => {
    if (!contactSearch.trim()) return true
    const search = contactSearch.toLowerCase()
    return (
      c.full_name?.toLowerCase().includes(search) ||
      c.email?.toLowerCase().includes(search) ||
      c.company?.toLowerCase().includes(search)
    )
  })

  const filteredInquiries = inquiries.filter(i => {
    if (!contactSearch.trim()) return true
    const search = contactSearch.toLowerCase()
    return (
      i.name?.toLowerCase().includes(search) ||
      i.email?.toLowerCase().includes(search) ||
      i.company?.toLowerCase().includes(search)
    )
  })

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const updateQuoteStatus = async (quoteId: string, status: string) => {
    const quote = quotes.find(q => q.id === quoteId)
    if (quote?.is_rfq) {
      await supabase.from('rfq_submissions').update({ status }).eq('id', quoteId)
    } else {
      await supabase.from('quotes').update({ status }).eq('id', quoteId)
    }
    fetchData()
    setSelectedQuote(null)
  }

  const sendQuoteReply = async () => {
    if (!selectedQuote || !adminReply.trim()) {
      alert('Please enter a reply message')
      return
    }

    try {
      const quote = quotes.find(q => q.id === selectedQuote.id)
      const updateData: any = {
        admin_reply: adminReply,
        replied_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      // Add quoted amount if provided
      if (quotedAmount && !isNaN(parseFloat(quotedAmount))) {
        updateData.quoted_amount = parseFloat(quotedAmount)
      }

      // Update the appropriate table
      if (quote?.is_rfq) {
        await supabase.from('rfq_submissions').update(updateData).eq('id', selectedQuote.id)
      } else {
        await supabase.from('quotes').update(updateData).eq('id', selectedQuote.id)
      }

      // TODO: Send email notification to customer
      // This would require setting up email service (e.g., SendGrid, AWS SES)

      alert('Reply sent successfully! Customer will be notified via email.')
      setAdminReply('')
      setQuotedAmount('')
      fetchData()
      setSelectedQuote(null)
    } catch (error: any) {
      console.error('Error sending reply:', error)
      alert('Failed to send reply: ' + error.message)
    }
  }

  const deleteQuote = async (quoteId: string) => {
    if (confirm('Move this quote to Bin? You can restore it later.')) {
      // Close modal immediately for responsive UI
      startTransition(() => {
        setSelectedQuote(null)
      })
      
      // Defer heavy operations
      setTimeout(async () => {
        const quote = quotes.find(q => q.id === quoteId)
        const deleteData = { deleted_at: new Date().toISOString() }
        if (quote?.is_rfq) {
          await supabase.from('rfq_submissions').update(deleteData).eq('id', quoteId)
        } else {
          await supabase.from('quotes').update(deleteData).eq('id', quoteId)
        }
        fetchData()
      }, 0)
    }
  }

  // Restore deleted item from bin
  const restoreQuote = async (quoteId: string, isRfq: boolean) => {
    const restoreData = { deleted_at: null }
    if (isRfq) {
      await supabase.from('rfq_submissions').update(restoreData).eq('id', quoteId)
    } else {
      await supabase.from('quotes').update(restoreData).eq('id', quoteId)
    }
    fetchData()
  }

  // Permanently delete quote from bin
  const permanentlyDeleteQuote = async (quoteId: string, isRfq: boolean) => {
    if (confirm('Permanently delete this quote? This cannot be undone!')) {
      if (isRfq) {
        await supabase.from('rfq_submissions').delete().eq('id', quoteId)
      } else {
        await supabase.from('quotes').delete().eq('id', quoteId)
      }
      fetchData()
    }
  }

  // Send artwork notification email
  const sendArtworkNotification = async (params: {
    type: 'status_update' | 'new_message' | 'new_file'
    artworkId: string
    artworkName: string
    artworkCode?: string
    customerEmail?: string
    customerName?: string
    status?: string
    message?: string
    isAdmin?: boolean
    fileUrl?: string
    fileName?: string
  }) => {
    try {
      console.log('Sending artwork notification:', params)
      const response = await fetch('/api/send-artwork-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      })
      const result = await response.json()
      console.log('Notification result:', result)
    } catch (e) {
      console.error('Failed to send artwork notification:', e)
    }
  }

  const updateArtworkStatus = async (artworkId: string, status: string, feedback?: string) => {
    const artwork = artworks.find(a => a.id === artworkId)
    const customer = artwork ? getCustomer(artwork.user_id) : null
    
    await supabase.from('artwork_files').update({ 
      status,
      admin_feedback: feedback || null,
      updated_at: new Date().toISOString()
    }).eq('id', artworkId)
    
    // Send email notification to customer
    if (artwork && customer?.email) {
      sendArtworkNotification({
        type: 'status_update',
        artworkId,
        artworkName: artwork.name,
        artworkCode: artwork.artwork_code,
        customerEmail: customer.email,
        customerName: customer.full_name,
        status
      })
    }
    
    fetchData()
    setSelectedArtwork(null)
    setArtworkFeedback('')
  }

  const deleteArtwork = async (artworkId: string) => {
    if (confirm('Move this artwork to Bin? You can restore it later.')) {
      // Close modal immediately for responsive UI
      startTransition(() => {
        setSelectedArtwork(null)
      })
      
      // Defer heavy operations
      setTimeout(async () => {
        await supabase.from('artwork_files').update({ deleted_at: new Date().toISOString() }).eq('id', artworkId)
        fetchData()
      }, 0)
    }
  }

  // Restore deleted artwork from bin
  const restoreArtwork = async (artworkId: string) => {
    await supabase.from('artwork_files').update({ deleted_at: null }).eq('id', artworkId)
    fetchData()
  }

  // Permanently delete artwork from bin
  const permanentlyDeleteArtwork = async (artworkId: string) => {
    if (confirm('Permanently delete this artwork? This cannot be undone!')) {
      await supabase.from('artwork_files').delete().eq('id', artworkId)
      fetchData()
    }
  }

  // Fetch comments for selected artwork
  const fetchArtworkComments = async (artworkId: string) => {
    setLoadingComments(true)
    const { data, error } = await supabase
      .from('artwork_comments')
      .select('*')
      .eq('artwork_id', artworkId)
      .order('created_at', { ascending: false })
    
    if (!error && data) {
      setArtworkComments(data)
    }
    setLoadingComments(false)
  }

  // Add new comment (supports text and file uploads for thread system)
  const addComment = async () => {
    if (!selectedArtwork || (!newComment.trim() && !threadFile)) return
    
    setUploadingThread(true)
    try {
      let fileUrl = ''
      let fileName = ''
      let fileSize = 0
      let fileType = ''
      let messageType: 'text' | 'file' = 'text'
      
      // If there's a file, upload it first
      if (threadFile) {
        const ext = threadFile.name.split('.').pop() || 'bin'
        const storagePath = `threads/${selectedArtwork.id}/${Date.now()}.${ext}`
        
        const { data: uploadData, error: storageError } = await supabase.storage
          .from('artworks')
          .upload(storagePath, threadFile, {
            cacheControl: '3600',
            upsert: false,
            contentType: threadFile.type || 'application/octet-stream'
          })
        
        if (storageError) throw new Error(storageError.message)
        
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(uploadData?.path || storagePath)
        fileUrl = urlData.publicUrl
        fileName = threadFile.name
        fileSize = threadFile.size
        fileType = threadFile.type || 'unknown'
        messageType = 'file'
      }
      
      const customer = getCustomer(selectedArtwork.user_id)
      const { error } = await supabase.from('artwork_comments').insert({
        artwork_id: selectedArtwork.id,
        user_id: user?.id,
        user_email: user?.email,
        user_name: 'Admin',
        is_admin: true,
        message: newComment.trim() || (threadFile ? `Uploaded: ${threadFile.name}` : ''),
        file_url: fileUrl || null,
        file_name: fileName || null,
        file_size: fileSize || null,
        file_type: fileType || null,
        message_type: messageType
      })
      
      if (!error) {
        // Send email notification to customer
        const customer = getCustomer(selectedArtwork.user_id)
        if (customer?.email) {
          sendArtworkNotification({
            type: messageType === 'file' ? 'new_file' : 'new_message',
            artworkId: selectedArtwork.id,
            artworkName: selectedArtwork.name,
            artworkCode: selectedArtwork.artwork_code,
            customerEmail: customer.email,
            customerName: customer.full_name,
            message: newComment.trim() || undefined,
            isAdmin: true,
            fileUrl: fileUrl || undefined,
            fileName: fileName || undefined
          })
        }
        
        setNewComment('')
        setThreadFile(null)
        fetchArtworkComments(selectedArtwork.id)
      }
    } catch (error: any) {
      console.error('Error adding comment:', error)
      alert('Error: ' + error.message)
    } finally {
      setUploadingThread(false)
    }
  }

  // Admin upload artwork for customer or inquiry contact
  const handleAdminUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    if (!uploadCustomerId) {
      setUploadError('Please select a contact first')
      return
    }
    
    setUploading(true)
    setUploadError('')
    
    try {
      // Get contact info based on type
      let contactName = ''
      let contactEmail = ''
      let userId = uploadCustomerId
      
      if (uploadContactType === 'customer') {
        const customer = customers.find(c => c.id === uploadCustomerId)
        contactName = customer?.full_name || 'Unknown'
        contactEmail = customer?.email || ''
      } else {
        // For inquiry contacts, use a placeholder user_id (admin's id) since they don't have accounts
        const inquiry = inquiries.find(i => i.id === uploadCustomerId)
        contactName = inquiry?.name || 'Unknown'
        contactEmail = inquiry?.email || ''
        userId = user?.id || uploadCustomerId // Use admin's user_id for storage
      }
      
      for (const file of Array.from(files) as File[]) {
        // Validate file size (10MB limit)
        const maxSize = 10 * 1024 * 1024
        if (file.size > maxSize) {
          setUploadError(`File "${file.name}" is too large. Maximum 10MB.`)
          continue
        }
        
        // Validate file type
        const isValid = file.name.match(/\.(ai|eps|pdf|png|jpg|jpeg|tiff|tif|zip|psd)$/i)
        if (!isValid) {
          setUploadError(`Invalid file type: ${file.name}`)
          continue
        }
        
        // Upload to storage - use contact email in path for inquiry type
        const ext = file.name.split('.').pop() || 'bin'
        const storagePath = uploadContactType === 'customer' 
          ? `${uploadCustomerId}/${Date.now()}.${ext}`
          : `inquiries/${contactEmail.replace('@', '_at_')}/${Date.now()}.${ext}`
        
        const { data: uploadData, error: storageError } = await supabase.storage
          .from('artworks')
          .upload(storagePath, file, {
            cacheControl: '3600',
            upsert: false,
            contentType: file.type || 'application/octet-stream'
          })
        
        if (storageError) {
          throw new Error(storageError.message)
        }
        
        // Get public URL
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(uploadData?.path || storagePath)
        const fileUrl = urlData.publicUrl
        
        // Insert database record
        // For CRM inquiry, check if there's a matching Website Customer by email
        let actualUserId = uploadCustomerId
        if (uploadContactType === 'inquiry') {
          const matchingCustomer = customers.find(c => c.email?.toLowerCase() === contactEmail.toLowerCase())
          if (matchingCustomer) {
            actualUserId = matchingCustomer.id
            console.log('CRM Contact matched to Website Customer:', contactEmail, '-> user_id:', matchingCustomer.id)
          } else {
            // No matching customer - artwork won't appear in customer center
            actualUserId = uploadCustomerId
            console.log('CRM Contact has no matching Website account, using inquiry ID:', uploadCustomerId)
          }
        }
        
        const insertData: any = {
          user_id: actualUserId,
          customer_email: contactEmail, // Always save email for fallback matching
          name: file.name,
          file_url: fileUrl,
          file_type: file.type || 'unknown',
          file_size: file.size,
          status: 'pending_review',
          admin_feedback: uploadContactType === 'customer' 
            ? 'Uploaded by admin'
            : `Uploaded by admin for: ${contactName} (${contactEmail})`
        }
        
        const { data: insertedData, error: insertError } = await supabase.from('artwork_files').insert(insertData).select()
        
        if (insertError) {
          throw new Error(insertError.message)
        }
        
        // NOTE: xAI auto-analysis disabled - use Artwork Hub for manual JSON management
        
        // Send email notification to both artwork@achievepack.com and customer
        try {
          await fetch('/api/send-admin-artwork-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              customerName: contactName,
              customerEmail: contactEmail,
              adminEmail: user?.email || ADMIN_EMAIL,
              fileName: file.name,
              fileUrl: fileUrl,
              fileType: file.type || 'unknown',
              fileSize: file.size,
              uploadedBy: 'admin'
            })
          })
          console.log('Email notification sent for artwork upload:', file.name)
        } catch (emailError) {
          console.error('Email notification failed:', emailError)
          // Don't fail the upload if email fails
        }
      }
      
      fetchData()
      setShowUploadModal(false)
      setUploadCustomerId('')
      setContactSearch('')
      setUploadContactType('customer')
      alert(`Artwork uploaded successfully for ${contactName}! Email notification sent.`)
    } catch (error: any) {
      console.error('Upload error:', error)
      setUploadError(error.message || 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800',
      rejected: 'bg-red-100 text-red-800',
      pending_review: 'bg-blue-100 text-blue-800',
      approved: 'bg-green-100 text-green-800',
      revision_needed: 'bg-orange-100 text-orange-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getCustomer = (userId: string): { id: string; email?: string; full_name?: string; company?: string } | undefined => {
    // First check Website Customers (profiles)
    const customer = customers.find(c => c.id === userId)
    if (customer) return customer
    
    // Then check CRM Inquiries
    const inquiry = inquiries.find(i => i.id === userId)
    if (inquiry) {
      return {
        id: inquiry.id,
        email: inquiry.email,
        full_name: inquiry.name,
        company: inquiry.company
      }
    }
    
    return undefined
  }

  // Auto-generate customer code from name
  const generateCustomerCode = (customer: { full_name?: string } | undefined): string => {
    if (!customer?.full_name) return ''
    const words = customer.full_name.toUpperCase().split(' ').filter(w => w.length > 0)
    if (words.length >= 2) {
      return words[0].charAt(0) + words[1].charAt(0) + words[0].charAt(1) + '01'
    } else if (words.length === 1) {
      return words[0].substring(0, 3) + '01'
    }
    return ''
  }

  // Filter artworks by search (includes AI analysis content)
  const filteredArtworks = artworks.filter(artwork => {
    if (!artworkSearch.trim()) return true
    const customer = getCustomer(artwork.user_id)
    const searchLower = artworkSearch.toLowerCase()
    const aiSearchText = getAISearchableText(artwork.ai_analysis)
    return (
      artwork.name.toLowerCase().includes(searchLower) ||
      customer?.full_name?.toLowerCase().includes(searchLower) ||
      customer?.email?.toLowerCase().includes(searchLower) ||
      artwork.artwork_code?.toLowerCase().includes(searchLower) ||
      artwork.status.toLowerCase().includes(searchLower) ||
      aiSearchText.includes(searchLower)
    )
  })
  
  // Pagination calculations
  const artworkTotalPages = Math.max(1, Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE))
  const paginatedArtworks = filteredArtworks.slice(
    (artworkPage - 1) * ITEMS_PER_PAGE,
    artworkPage * ITEMS_PER_PAGE
  )
  
  // Reset page when search changes
  React.useEffect(() => {
    setArtworkPage(1)
  }, [artworkSearch])

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <RefreshCw className="h-8 w-8 animate-spin text-primary-500 mx-auto mb-4" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  }

  if (!user || user.email !== ADMIN_EMAIL) return null

  const pendingQuotes = quotes.filter(q => q.status === 'pending').length
  const pendingArtworks = artworks.filter(a => a.status === 'pending_review').length

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link to="/ctrl-x9k7m" className="flex items-center gap-2">
              <img src="/ap-logo.svg" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold text-gray-900">Admin</span>
            </Link>
          </div>

          <div className="px-4 mt-8">
            <Link to="/ctrl-x9k7m" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Main Admin
            </Link>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6">
            <nav className="flex-1 space-y-2">
              <button
                onClick={() => setActiveTab('quotes')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'quotes'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <FileCheck className="flex-shrink-0 w-5 h-5 mr-4" />
                Quotes & RFQ
                {pendingQuotes > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {pendingQuotes}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('artwork')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'artwork'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <ImageIcon className="flex-shrink-0 w-5 h-5 mr-4" />
                Artwork Files
                {pendingArtworks > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {pendingArtworks}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'projects'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <FileText className="flex-shrink-0 w-5 h-5 mr-4" />
                Projects
                {projects.length > 0 && (
                  <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {projects.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('customers')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'customers'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <User className="flex-shrink-0 w-5 h-5 mr-4" />
                Customers
                {customers.length > 0 && (
                  <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {customers.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('bin')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'bin'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Archive className="flex-shrink-0 w-5 h-5 mr-4" />
                Bin
                {(deletedArtworks.length + deletedQuotes.length) > 0 && (
                  <span className="ml-auto bg-gray-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {deletedArtworks.length + deletedQuotes.length}
                  </span>
                )}
              </button>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tools</p>
                <Link
                  to="/ctrl-x9k7m/artwork-hub"
                  className="flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-900 hover:bg-primary-50 hover:text-primary-600"
                >
                  <Palette className="flex-shrink-0 w-5 h-5 mr-4" />
                  Artwork Hub
                </Link>
              </div>
            </nav>

            <div className="pb-4 mt-auto">
              {/* Notification Bell */}
              <div className="relative px-4 mb-2">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span>Notifications</span>
                  {notifications.length > 0 && (
                    <span className="absolute top-1 left-6 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {/* Notification Dropdown */}
                {showNotifications && (
                  <div className="absolute bottom-full left-4 mb-2 z-50">
                    <NotificationList
                      notifications={notifications}
                      onViewAll={() => {
                        setShowNotifications(false)
                        setActiveTab('artwork')
                      }}
                      title="Updates"
                    />
                  </div>
                )}
              </div>
              
              <button
                onClick={handleSignOut}
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <LogOut className="flex-shrink-0 w-5 h-5 mr-3 text-gray-500" />
                Sign Out
              </button>
              <div className="flex items-center px-4 py-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
          <Link to="/ctrl-x9k7m" className="flex items-center gap-2">
            <img src="/ap-logo.svg" alt="Logo" className="h-7 w-auto" />
            <span className="font-bold text-gray-900">Admin</span>
          </Link>
          <div className="flex items-center gap-3">
            {/* Quick Access Sheet - Right Side */}
            <QuickAccessSheet
              items={quickAccessItems}
              pinListItems={pinListItems}
              onStatusChange={handleQuickAccessStatusChange}
              onPinChange={handlePinChange}
              trigger={
                <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition relative">
                  <Zap className="h-5 w-5" />
                  {quickAccessItems.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                      {quickAccessItems.length}
                    </span>
                  )}
                </button>
              }
              title="Quick Access"
              description="Right-click on items to update status"
            />
            {/* Mobile Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)} 
                className="relative p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {notifications.length}
                  </span>
                )}
              </button>
              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 z-50">
                  <NotificationList
                    notifications={notifications}
                    onViewAll={() => {
                      setShowNotifications(false)
                      setActiveTab('artwork')
                    }}
                    title="Updates"
                  />
                </div>
              )}
            </div>
            <button onClick={fetchData} className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition">
              <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={handleSignOut} className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-sm">
              <FileCheck className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Website Orders</h1>
              <p className="text-sm text-gray-500">
                {pendingQuotes + pendingArtworks > 0 
                  ? `${pendingQuotes + pendingArtworks} items need attention`
                  : 'All caught up!'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Quick Access Sheet - Desktop */}
            <QuickAccessSheet
              items={quickAccessItems}
              pinListItems={pinListItems}
              onStatusChange={handleQuickAccessStatusChange}
              onPinChange={handlePinChange}
              trigger={
                <button className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition relative">
                  <Zap className="h-5 w-5" />
                  {quickAccessItems.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                      {quickAccessItems.length}
                    </span>
                  )}
                </button>
              }
              title="Quick Access"
              description="Right-click on items to update status"
            />
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition relative"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {notifications.length}
                  </span>
                )}
              </button>
              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 z-50">
                  <NotificationList
                    notifications={notifications}
                    onViewAll={() => {
                      setShowNotifications(false)
                      setActiveTab('artwork')
                    }}
                    title="Updates"
                  />
                </div>
              )}
            </div>
            <button 
              onClick={fetchData} 
              className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </header>

        {/* Mobile Nav - Animated Tabs */}
        <div className="md:hidden bg-white border-b px-4 py-2 sticky top-0 z-30">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabType)} className="w-full">
            <TabsList className="inline-flex gap-1 p-1 bg-gray-100 rounded-lg w-full">
              <TabsTrigger value="quotes" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all">
                <FileCheck className="h-4 w-4" />
                <span>Quotes</span>
                {pendingQuotes > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-red-100 text-red-700 rounded-full">
                    {pendingQuotes}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="artwork" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all">
                <ImageIcon className="h-4 w-4" />
                <span>Artwork</span>
                {pendingArtworks > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-red-100 text-red-700 rounded-full">
                    {pendingArtworks}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all">
                <FileText className="h-4 w-4" />
                <span>Projects</span>
              </TabsTrigger>
              <TabsTrigger value="customers" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all">
                <User className="h-4 w-4" />
                <span>Customers</span>
              </TabsTrigger>
              <TabsTrigger value="bin" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all">
                <Archive className="h-4 w-4" />
                <span>Bin</span>
                {(deletedArtworks.length + deletedQuotes.length) > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-gray-200 text-gray-700 rounded-full">
                    {deletedArtworks.length + deletedQuotes.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Work Queue Overview - Shows items needing attention */}
          {workQueueItems.length > 0 && (
            <div className="mb-6 bg-white rounded-xl p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Needs Attention</h3>
                <span className="text-xs text-gray-500">{workQueueItems.filter(i => i.urgent).length} urgent</span>
              </div>
              <AdminWorkQueue items={workQueueItems} maxVisible={12} />
            </div>
          )}
          
          {/* Quotes Tab */}
          {activeTab === 'quotes' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">RFQ & Store Orders</h1>
                  <p className="text-sm text-gray-500 mt-1">Manage all RFQ submissions and store orders from website</p>
                </div>
                <button
                  onClick={fetchData}
                  className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Total Quotes</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1"><SlidingNumber number={quotes.length} /></p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1"><SlidingNumber number={pendingQuotes} /></p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">RFQ Submissions</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    <SlidingNumber number={quotes.filter(q => q.is_rfq).length} />
                  </p>
                </div>
              </div>

              {/* Quotes Table */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quote #</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {quotes.map(quote => {
                        const customer = getCustomer(quote.user_id)
                        return (
                          <tr key={quote.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{quote.quote_number}</td>
                            <td className="px-6 py-4">
                              <div>
                                <p className="text-sm font-medium text-gray-900">{customer?.full_name || 'Unknown'}</p>
                                <p className="text-xs text-gray-500">{customer?.email}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {quote.is_rfq ? (
                                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                                  RFQ
                                </span>
                              ) : (
                                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                                  Quote
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {quote.is_rfq ? '-' : `$${quote.total_amount?.toLocaleString()}`}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(quote.status)}`}>
                                {quote.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {new Date(quote.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button onClick={() => setSelectedQuote(quote)} className="text-primary-600 hover:text-primary-700">
                                  <Eye className="h-5 w-5" />
                                </button>
                                <button onClick={() => deleteQuote(quote.id)} className="text-red-600 hover:text-red-700">
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  {quotes.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No quotes found</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Artwork Tab */}
          {activeTab === 'artwork' && (
            <div className="space-y-4 md:space-y-6">
              {/* Header with Search and View Toggle */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Artwork Files</h1>
                    <p className="text-sm text-gray-500 mt-1">Review and manage customer artwork</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Upload Button */}
                    <button
                      onClick={() => setShowUploadModal(true)}
                      className="flex items-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="hidden sm:inline">Upload</span>
                    </button>
                    {/* View Toggle */}
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setArtworkViewMode('card')}
                        className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${artworkViewMode === 'card' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}
                      >
                        <LayoutGrid className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setArtworkViewMode('list')}
                        className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${artworkViewMode === 'list' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}
                      >
                        <List className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={fetchData}
                      className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                    >
                      <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    value={artworkSearch}
                    onChange={(e) => setArtworkSearch(e.target.value)}
                    placeholder="Search by filename, customer, code, or status..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  {artworkSearch && (
                    <button 
                      onClick={() => setArtworkSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                <div className="w-[160px] flex-shrink-0 bg-white rounded-xl p-3 md:p-4 shadow-sm border">
                  <p className="text-xs md:text-sm text-gray-500">Total</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1"><SlidingNumber number={artworks.length} /></p>
                </div>
                <div className="w-[160px] flex-shrink-0 bg-white rounded-xl p-3 md:p-4 shadow-sm border">
                  <p className="text-xs md:text-sm text-gray-500">Pending</p>
                  <p className="text-xl md:text-2xl font-bold text-blue-600 mt-1">
                    <SlidingNumber number={artworks.filter(a => a.status === 'pending_review').length} />
                  </p>
                </div>
                <div className="w-[160px] flex-shrink-0 bg-white rounded-xl p-3 md:p-4 shadow-sm border">
                  <p className="text-xs md:text-sm text-gray-500">Proof Ready</p>
                  <p className="text-xl md:text-2xl font-bold text-indigo-600 mt-1">
                    <SlidingNumber number={artworks.filter(a => a.status === 'proof_ready').length} />
                  </p>
                </div>
                <div className="w-[160px] flex-shrink-0 bg-white rounded-xl p-3 md:p-4 shadow-sm border">
                  <p className="text-xs md:text-sm text-gray-500">Revision</p>
                  <p className="text-xl md:text-2xl font-bold text-orange-600 mt-1">
                    <SlidingNumber number={artworks.filter(a => a.status === 'revision_needed').length} />
                  </p>
                </div>
              </div>
              
              {/* Artwork Status Overview */}
              {artworkStatusItems.length > 0 && (
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Artwork Status Overview</h3>
                  <ArtworkStatusAvatar items={artworkStatusItems} maxVisible={12} size="sm" />
                </div>
              )}

              {/* Management Bar with Pagination */}
              <DataManagementBar
                currentPage={artworkPage}
                totalPages={artworkTotalPages}
                onPageChange={setArtworkPage}
                totalCount={filteredArtworks.length}
              />

              {/* Card View */}
              {artworkViewMode === 'card' && (
                <div className="flex flex-wrap gap-4">
                  {paginatedArtworks.map(artwork => {
                    const customer = getCustomer(artwork.user_id)
                    const isImage = artwork.file_type?.startsWith('image/') || /\.(png|jpg|jpeg|gif|webp)$/i.test(artwork.file_url || '')
                    return (
                      <div key={artwork.id} className="w-[300px] flex-shrink-0 bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
                        {/* Artwork Preview */}
                        <div className="relative h-32 bg-gray-100 overflow-hidden">
                          {isImage ? (
                            <img 
                              src={artwork.file_url} 
                              alt={artwork.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none'
                                ;(e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden')
                              }}
                            />
                          ) : null}
                          <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 ${isImage ? 'hidden' : ''}`}>
                            <ImageIcon className="h-8 w-8 text-purple-400 mb-1" />
                            <p className="text-[10px] text-purple-500 text-center px-2">Click to preview file</p>
                          </div>
                          <span className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] font-medium rounded-full ${getStatusColor(artwork.status)}`}>
                            {artwork.status.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{artwork.name}</p>
                              <p className="text-xs text-gray-500">{formatFileSize(artwork.file_size)}</p>
                            </div>
                          </div>

                          {artwork.artwork_code && (
                            <div className="mb-3">
                              <span className="font-mono text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                {artwork.artwork_code}
                              </span>
                            </div>
                          )}

                          <div className="space-y-2 mb-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Customer</span>
                              <span className="text-gray-900 font-medium truncate ml-2">{customer?.full_name || 'Unknown'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Date</span>
                              <span className="text-gray-900">{new Date(artwork.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setSelectedArtwork(artwork)
                                const autoCode = generateCustomerCode(customer)
                                setArtworkCustomerCode(artwork.customer_code || autoCode)
                                setArtworkProductCode(artwork.product_code || 'PKG01')
                                setArtworkLinkType((artwork.link_type as 'order' | 'quote' | 'none') || 'none')
                                setArtworkLinkedId(artwork.linked_order_id || artwork.linked_quote_id || '')
                                setArtworkAssignedUserId(artwork.user_id || '')
                                setArtworkFeedback(artwork.admin_feedback || '')
                                fetchArtworkComments(artwork.id)
                              }}
                              className="flex-1 px-3 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition"
                            >
                              Review
                            </button>
                            <a
                              href={artwork.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition"
                            >
                              ↓
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* List View - Redesigned with inline actions and hover preview */}
              {artworkViewMode === 'list' && (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  {/* Table Header - Desktop */}
                  <div className="hidden md:grid md:grid-cols-[60px_1fr_120px_200px_140px] gap-3 px-4 py-3 bg-gray-50 border-b text-xs font-medium text-gray-500">
                    <div>Preview</div>
                    <div>File Info</div>
                    <div>Status</div>
                    <div>Quick Actions</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {paginatedArtworks.map(artwork => {
                      const customer = getCustomer(artwork.user_id)
                      const isImage = artwork.file_type?.startsWith('image/') || /\.(png|jpg|jpeg|gif|webp)$/i.test(artwork.file_url || '')
                      const isHovered = hoveredArtworkId === artwork.id
                      return (
                        <div key={artwork.id} className="p-3 md:p-4 hover:bg-gray-50 relative">
                          {/* Desktop: Grid layout */}
                          <div className="hidden md:grid md:grid-cols-[60px_1fr_120px_200px_140px] gap-3 items-center">
                            {/* Thumbnail with hover preview */}
                            <div 
                              className="relative"
                              onMouseEnter={() => setHoveredArtworkId(artwork.id)}
                              onMouseLeave={() => setHoveredArtworkId(null)}
                            >
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 cursor-pointer">
                                {isImage ? (
                                  <img 
                                    src={artwork.file_url} 
                                    alt={artwork.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-purple-50">
                                    <ImageIcon className="h-5 w-5 text-purple-400" />
                                  </div>
                                )}
                              </div>
                              {/* Hover Preview Popup */}
                              {isHovered && isImage && (
                                <div className="absolute left-16 top-0 z-50 bg-white rounded-xl shadow-2xl border p-2 animate-in fade-in zoom-in-95 duration-200">
                                  <img 
                                    src={artwork.file_url} 
                                    alt={artwork.name}
                                    className="w-64 h-64 object-contain rounded-lg"
                                  />
                                  <p className="text-xs text-gray-500 mt-2 text-center truncate max-w-64">{artwork.name}</p>
                                </div>
                              )}
                            </div>
                            
                            {/* File Info */}
                            <div className="min-w-0">
                              <p className="font-medium text-gray-900 text-sm truncate">{artwork.name}</p>
                              <p className="text-xs text-gray-500">
                                {customer?.full_name || 'Unknown'} • {formatFileSize(artwork.file_size)}
                              </p>
                              {artwork.artwork_code && (
                                <span className="inline-block mt-1 font-mono text-[10px] font-bold text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded">
                                  {artwork.artwork_code}
                                </span>
                              )}
                            </div>
                            
                            {/* Status */}
                            <div>
                              <span className={`px-2 py-1 text-[10px] font-medium rounded-full ${getStatusColor(artwork.status)}`}>
                                {artwork.status.replace(/_/g, ' ')}
                              </span>
                            </div>
                            
                            {/* Quick Status Buttons */}
                            <div className="flex flex-wrap gap-1">
                              <button
                                onClick={() => updateArtworkStatus(artwork.id, 'proof_ready')}
                                className={`px-2 py-1 text-[10px] rounded-md transition ${artwork.status === 'proof_ready' ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}
                                title="Set Proof Ready"
                              >
                                Proof
                              </button>
                              <button
                                onClick={() => updateArtworkStatus(artwork.id, 'revision_needed')}
                                className={`px-2 py-1 text-[10px] rounded-md transition ${artwork.status === 'revision_needed' ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'}`}
                                title="Needs Revision"
                              >
                                Revision
                              </button>
                              <button
                                onClick={() => updateArtworkStatus(artwork.id, 'in_production')}
                                className={`px-2 py-1 text-[10px] rounded-md transition ${artwork.status === 'in_production' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'}`}
                                title="In Production"
                              >
                                Prod
                              </button>
                              <button
                                onClick={() => updateArtworkStatus(artwork.id, 'prepress')}
                                className={`px-2 py-1 text-[10px] rounded-md transition ${artwork.status === 'prepress' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                                title="Prepress"
                              >
                                Pre
                              </button>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => {
                                  setSelectedArtwork(artwork)
                                  const autoCode = generateCustomerCode(customer)
                                  setArtworkCustomerCode(artwork.customer_code || autoCode)
                                  setArtworkProductCode(artwork.product_code || 'PKG01')
                                  setArtworkLinkType((artwork.link_type as 'order' | 'quote' | 'none') || 'none')
                                  setArtworkLinkedId(artwork.linked_order_id || artwork.linked_quote_id || '')
                                  setArtworkAssignedUserId(artwork.user_id || '')
                                  setArtworkFeedback(artwork.admin_feedback || '')
                                  fetchArtworkComments(artwork.id)
                                }}
                                className="p-1.5 text-primary-600 hover:bg-primary-50 rounded-lg transition"
                                title="Review Details"
                              >
                                <MessageSquare className="h-4 w-4" />
                              </button>
                              <a
                                href={artwork.file_url}
                                target="_blank"
                                className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                title="Download"
                              >
                                <FileText className="h-4 w-4" />
                              </a>
                              <button
                                onClick={() => deleteArtwork(artwork.id)}
                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition"
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Mobile: Stack layout */}
                          <div className="md:hidden">
                            <div className="flex items-start gap-3">
                              {/* Thumbnail */}
                              <div 
                                className="relative"
                                onClick={() => setHoveredArtworkId(isHovered ? null : artwork.id)}
                              >
                                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                                  {isImage ? (
                                    <img src={artwork.file_url} alt={artwork.name} className="w-full h-full object-cover" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-purple-50">
                                      <ImageIcon className="h-5 w-5 text-purple-400" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <div className="min-w-0">
                                    <p className="font-medium text-gray-900 text-sm truncate">{artwork.name}</p>
                                    <p className="text-xs text-gray-500">{customer?.full_name || 'Unknown'}</p>
                                  </div>
                                  <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${getStatusColor(artwork.status)}`}>
                                    {artwork.status.replace(/_/g, ' ')}
                                  </span>
                                </div>
                                
                                {/* Mobile Quick Actions */}
                                <div className="flex flex-wrap gap-1 mt-2">
                                  <button
                                    onClick={() => updateArtworkStatus(artwork.id, 'proof_ready')}
                                    className="px-2 py-1 text-[10px] bg-indigo-50 text-indigo-700 rounded-md"
                                  >
                                    Proof
                                  </button>
                                  <button
                                    onClick={() => updateArtworkStatus(artwork.id, 'revision_needed')}
                                    className="px-2 py-1 text-[10px] bg-orange-50 text-orange-700 rounded-md"
                                  >
                                    Revision
                                  </button>
                                  <button
                                    onClick={() => {
                                      setSelectedArtwork(artwork)
                                      fetchArtworkComments(artwork.id)
                                    }}
                                    className="px-2 py-1 text-[10px] bg-primary-50 text-primary-700 rounded-md"
                                  >
                                    Review
                                  </button>
                                  <a
                                    href={artwork.file_url}
                                    target="_blank"
                                    className="px-2 py-1 text-[10px] bg-gray-100 text-gray-700 rounded-md"
                                  >
                                    ↓
                                  </a>
                                </div>
                              </div>
                            </div>
                            
                            {/* Mobile hover preview */}
                            {isHovered && isImage && (
                              <div className="mt-3 p-2 bg-gray-50 rounded-lg">
                                <img 
                                  src={artwork.file_url} 
                                  alt={artwork.name}
                                  className="w-full h-48 object-contain rounded-lg"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {filteredArtworks.length === 0 && (
                <div className="text-center py-12 text-gray-500 bg-white rounded-xl border">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>{artworkSearch ? 'No artworks match your search' : 'No artwork files uploaded yet'}</p>
                </div>
              )}
            </div>
          )}

          {/* Projects Tab - Unified Order Tracking */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                  <p className="text-sm text-gray-500 mt-1">Unified order tracking across all customers</p>
                </div>
                <button
                  onClick={fetchData}
                  className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Total Projects</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1"><SlidingNumber number={projects.length} /></p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">RFQ Stage</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1">
                    <SlidingNumber number={projects.filter(p => p.status === 'rfq').length} />
                  </p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Production</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">
                    <SlidingNumber number={projects.filter(p => p.status === 'production').length} />
                  </p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Shipping</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    <SlidingNumber number={projects.filter(p => p.status === 'shipping').length} />
                  </p>
                </div>
              </div>

              {/* Projects List */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project Code</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stage</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progress</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Updated</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {projects.map(project => {
                        const customer = customers.find(c => c.id === project.user_id) || 
                                        customers.find(c => c.email?.toLowerCase() === project.customer_email?.toLowerCase())
                        const stageColors: Record<string, string> = {
                          rfq: 'bg-yellow-100 text-yellow-700',
                          artwork: 'bg-purple-100 text-purple-700',
                          order: 'bg-blue-100 text-blue-700',
                          production: 'bg-indigo-100 text-indigo-700',
                          shipping: 'bg-cyan-100 text-cyan-700',
                          complete: 'bg-green-100 text-green-700'
                        }
                        const stages = ['rfq', 'artwork', 'order', 'production', 'shipping', 'complete']
                        const currentStageIndex = stages.indexOf(project.status)
                        const progressPercent = Math.round(((currentStageIndex + 1) / stages.length) * 100)
                        
                        return (
                          <tr key={project.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <span className="text-sm font-mono font-bold text-primary-600">{project.project_code}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <p className="text-sm font-medium text-gray-900">{customer?.full_name || project.customer_name || 'Unknown'}</p>
                                <p className="text-xs text-gray-500">{customer?.email || project.customer_email}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 text-xs font-medium rounded ${
                                project.project_type === 'stock' ? 'bg-green-100 text-green-700' :
                                project.project_type === 'custom' ? 'bg-purple-100 text-purple-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {project.project_type?.toUpperCase() || 'CUSTOM'}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${stageColors[project.status] || 'bg-gray-100 text-gray-600'}`}>
                                {project.status?.charAt(0).toUpperCase() + project.status?.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="w-24">
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary-500 rounded-full transition-all"
                                      style={{ width: `${progressPercent}%` }}
                                    />
                                  </div>
                                  <span className="text-xs text-gray-500">{progressPercent}%</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {new Date(project.updated_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <select
                                value={project.status}
                                onChange={async (e) => {
                                  const newStage = e.target.value
                                  await supabase.from('projects').update({ 
                                    status: newStage,
                                    updated_at: new Date().toISOString()
                                  }).eq('id', project.id)
                                  fetchData()
                                }}
                                className="text-sm border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-primary-500"
                              >
                                <option value="rfq">RFQ</option>
                                <option value="artwork">Artwork</option>
                                <option value="order">Order</option>
                                <option value="production">Production</option>
                                <option value="shipping">Shipping</option>
                                <option value="complete">Complete</option>
                              </select>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  {projects.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p>No projects found</p>
                      <p className="text-xs mt-1">Projects will appear here when created</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* Customers Tab - Manage Customer Accounts */}
          {activeTab === 'customers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
                  <p className="text-sm text-gray-500 mt-1">Manage all registered customer accounts</p>
                </div>
                <button
                  onClick={fetchData}
                  className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Total Customers</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1"><SlidingNumber number={customers.length} /></p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Recent Signups</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">
                    <SlidingNumber number={customers.filter(c => new Date(c.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length} />
                  </p>
                </div>
              </div>

              {/* Customers List */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {customers.map(customer => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-primary-800">
                                  {customer.full_name?.charAt(0).toUpperCase() || customer.email?.charAt(0).toUpperCase() || '?'}
                                </span>
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">{customer.full_name || 'N/A'}</p>
                                <p className="text-xs text-gray-500">ID: {customer.id.substring(0, 8)}...</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-gray-900">{customer.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-gray-900">{customer.company || 'N/A'}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-gray-500">{new Date(customer.created_at).toLocaleDateString()}</p>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <button 
                              onClick={() => {
                                // Navigate to customer dashboard or view details
                                alert(`View customer details for ${customer.full_name || customer.email}`);
                              }}
                              className="text-primary-600 hover:text-primary-900 font-medium"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {customers.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <User className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p>No customers found</p>
                      <p className="text-xs mt-1">Customer accounts will appear here when created</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Bin Tab - Deleted Items */}
          {activeTab === 'bin' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Bin</h1>
                  <p className="text-sm text-gray-500 mt-1">Recover accidentally deleted items or permanently delete them</p>
                </div>
                <button
                  onClick={fetchData}
                  className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Total in Bin</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1"><SlidingNumber number={deletedArtworks.length + deletedQuotes.length} /></p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Deleted Artworks</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1"><SlidingNumber number={deletedArtworks.length} /></p>
                </div>
                <div className="w-[200px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Deleted Quotes</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1"><SlidingNumber number={deletedQuotes.length} /></p>
                </div>
              </div>

              {/* Deleted Artworks Section */}
              {deletedArtworks.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="px-6 py-4 border-b bg-gray-50">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <ImageIcon className="h-5 w-5 text-purple-600" />
                      Deleted Artworks ({deletedArtworks.length})
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {deletedArtworks.map(artwork => {
                      const customer = getCustomer(artwork.user_id)
                      return (
                        <div key={artwork.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <ImageIcon className="h-5 w-5 text-purple-600" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{artwork.name}</p>
                              <p className="text-xs text-gray-500">{customer?.full_name || 'Unknown'} • Deleted {new Date(artwork.deleted_at || '').toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => restoreArtwork(artwork.id)}
                              className="flex items-center gap-1 px-3 py-1.5 text-sm text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition"
                            >
                              <RotateCcw className="h-4 w-4" />
                              Restore
                            </button>
                            <button
                              onClick={() => permanentlyDeleteArtwork(artwork.id)}
                              className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition"
                            >
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Deleted Quotes Section */}
              {deletedQuotes.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="px-6 py-4 border-b bg-gray-50">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-blue-600" />
                      Deleted Quotes & RFQ ({deletedQuotes.length})
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {deletedQuotes.map(quote => {
                      const customer = getCustomer(quote.user_id)
                      return (
                        <div key={quote.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${quote.is_rfq ? 'bg-blue-100' : 'bg-green-100'}`}>
                              <FileCheck className={`h-5 w-5 ${quote.is_rfq ? 'text-blue-600' : 'text-green-600'}`} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {quote.quote_number}
                                {quote.is_rfq && <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-blue-100 text-blue-700 rounded">RFQ</span>}
                              </p>
                              <p className="text-xs text-gray-500">{customer?.full_name || 'Unknown'} • Deleted {new Date(quote.deleted_at || '').toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => restoreQuote(quote.id, !!quote.is_rfq)}
                              className="flex items-center gap-1 px-3 py-1.5 text-sm text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition"
                            >
                              <RotateCcw className="h-4 w-4" />
                              Restore
                            </button>
                            <button
                              onClick={() => permanentlyDeleteQuote(quote.id, !!quote.is_rfq)}
                              className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition"
                            >
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Empty State */}
              {deletedArtworks.length === 0 && deletedQuotes.length === 0 && (
                <div className="text-center py-12 text-gray-500 bg-white rounded-xl border">
                  <Archive className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Bin is empty</p>
                  <p className="text-sm mt-1">Deleted items will appear here</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{selectedQuote.quote_number}</h2>
                {selectedQuote.is_rfq && (
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                    Customer Request (RFQ)
                  </span>
                )}
              </div>
              <button onClick={() => setSelectedQuote(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="font-medium">{getCustomer(selectedQuote.user_id)?.full_name || 'Unknown'}</p>
                  <p className="text-sm text-gray-600">{getCustomer(selectedQuote.user_id)?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <select
                    value={selectedQuote.status}
                    onChange={(e) => updateQuoteStatus(selectedQuote.id, e.target.value)}
                    className={`mt-1 px-3 py-1 rounded-lg border ${getStatusColor(selectedQuote.status)}`}
                  >
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>
              </div>

              {selectedQuote.is_rfq && (
                <>
                  {selectedQuote.message && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Customer Message</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedQuote.message}</p>
                      </div>
                    </div>
                  )}

                  {selectedQuote.website_link && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Product Website</p>
                      <a 
                        href={selectedQuote.website_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline flex items-center gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        {selectedQuote.website_link}
                      </a>
                    </div>
                  )}

                  {selectedQuote.photo_urls && selectedQuote.photo_urls.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Reference Images ({selectedQuote.photo_urls.length})</p>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedQuote.photo_urls.map((url, idx) => (
                          <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="block">
                            <img 
                              src={url} 
                              alt={`Reference ${idx + 1}`} 
                              className="w-full h-32 object-cover rounded-lg border border-gray-200 hover:border-primary-400 transition"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {!selectedQuote.is_rfq && selectedQuote.total_amount !== undefined && (
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-green-600">${selectedQuote.total_amount.toLocaleString()}</p>
                </div>
              )}

              {/* Show existing admin reply if present */}
              {(selectedQuote.admin_reply || (selectedQuote as any).quoted_amount) && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-2">Previous Admin Reply</p>
                  {selectedQuote.admin_reply && (
                    <p className="text-sm text-blue-900 whitespace-pre-wrap mb-2">{selectedQuote.admin_reply}</p>
                  )}
                  {(selectedQuote as any).quoted_amount && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-blue-700">Quoted Amount:</span>
                      <span className="text-lg font-bold text-blue-900">${(selectedQuote as any).quoted_amount.toLocaleString()}</span>
                    </div>
                  )}
                  {(selectedQuote as any).replied_at && (
                    <p className="text-xs text-blue-600 mt-2">Replied: {new Date((selectedQuote as any).replied_at).toLocaleString()}</p>
                  )}
                </div>
              )}

              {/* Admin Reply Section */}
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Admin Reply to Customer
                </label>
                <textarea
                  value={adminReply}
                  onChange={(e) => setAdminReply(e.target.value)}
                  placeholder="Enter your reply to the customer...\n\nExample:\n- Pricing details\n- Product recommendations\n- Timeline estimates\n- Next steps"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                />
                
                {/* Quoted Amount (optional) */}
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quoted Amount (Optional)
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <input
                      type="number"
                      value={quotedAmount}
                      onChange={(e) => setQuotedAmount(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                {/* Send Reply Button */}
                <button
                  onClick={sendQuoteReply}
                  disabled={!adminReply.trim()}
                  className="w-full mt-3 px-4 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Send Reply to Customer
                </button>
              </div>

              <div className="text-sm text-gray-500">
                Created: {new Date(selectedQuote.created_at).toLocaleString()}
              </div>

              <button
                onClick={() => deleteQuote(selectedQuote.id)}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete {selectedQuote.is_rfq ? 'Request' : 'Quote'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Artwork Review Modal - Mobile Optimized */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 md:p-4">
          <div className="bg-white rounded-t-2xl md:rounded-xl w-full md:max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6 border-b flex items-center justify-between sticky top-0 bg-white z-10">
              <div>
                <h2 className="text-lg md:text-xl font-bold">Review Artwork</h2>
                {selectedArtwork.artwork_code && (
                  <span className="inline-block mt-1 font-mono text-xs md:text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                    {selectedArtwork.artwork_code}
                  </span>
                )}
              </div>
              <button onClick={() => { 
                setSelectedArtwork(null); 
                setArtworkFeedback('');
                setArtworkCustomerCode('');
                setArtworkProductCode('');
                setArtworkLinkType('none');
                setArtworkLinkedId('');
                setArtworkAssignedUserId('');
                setAssignCustomerSearch('');
                setArtworkComments([]);
                setNewComment('');
              }} className="text-gray-500 hover:text-gray-700 p-1">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Customer Assignment */}
              <div className="bg-amber-50 rounded-lg p-3 md:p-4 border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <User className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />
                  Assign Customer
                </h3>
                {/* Search Input */}
                <div className="relative mb-2">
                  <input
                    type="text"
                    value={assignCustomerSearch}
                    onChange={(e) => setAssignCustomerSearch(e.target.value)}
                    placeholder="Search by name, email, company..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  {assignCustomerSearch && (
                    <button
                      onClick={() => setAssignCustomerSearch('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <select
                  value={artworkAssignedUserId || selectedArtwork.user_id || ''}
                  onChange={(e) => setArtworkAssignedUserId(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">-- Select Customer --</option>
                  {(() => {
                    const search = assignCustomerSearch.toLowerCase().trim()
                    const filteredC = search ? customers.filter(c => 
                      c.full_name?.toLowerCase().includes(search) ||
                      c.email?.toLowerCase().includes(search) ||
                      c.company?.toLowerCase().includes(search)
                    ) : customers
                    const filteredI = search ? inquiries.filter(i => 
                      i.name?.toLowerCase().includes(search) ||
                      i.email?.toLowerCase().includes(search) ||
                      i.company?.toLowerCase().includes(search)
                    ) : inquiries
                    return (
                      <>
                        {filteredC.length > 0 && (
                          <optgroup label={`Website Customers (${filteredC.length})`}>
                            {filteredC.map(c => (
                              <option key={c.id} value={c.id}>
                                {c.email} {c.full_name ? `- ${c.full_name}` : ''} {c.company ? `(${c.company})` : ''}
                              </option>
                            ))}
                          </optgroup>
                        )}
                        {filteredI.length > 0 && (
                          <optgroup label={`CRM Contacts (${filteredI.length})`}>
                            {filteredI.map(i => (
                              <option key={`inq-${i.id}`} value={i.id}>
                                {i.name || i.email} {i.company ? `(${i.company})` : ''} - {i.source}
                              </option>
                            ))}
                          </optgroup>
                        )}
                        {filteredC.length === 0 && filteredI.length === 0 && search && (
                          <option disabled>No results for "{assignCustomerSearch}"</option>
                        )}
                      </>
                    )
                  })()}
                </select>
                {(artworkAssignedUserId || selectedArtwork.user_id) && (
                  <p className="text-xs text-gray-600 mt-2">
                    Current: <span className="font-medium text-amber-700">{getCustomer(artworkAssignedUserId || selectedArtwork.user_id)?.email || 'Unknown Email'}</span>
                    {getCustomer(artworkAssignedUserId || selectedArtwork.user_id)?.full_name && (
                      <span className="text-gray-500"> ({getCustomer(artworkAssignedUserId || selectedArtwork.user_id)?.full_name})</span>
                    )}
                  </p>
                )}
              </div>

              {/* File Info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">File</p>
                <p className="font-medium text-sm truncate">{selectedArtwork.name}</p>
                <p className="text-xs text-gray-600">{formatFileSize(selectedArtwork.file_size)}</p>
              </div>

              {/* AI Analysis Section - Admin Only */}
              {selectedArtwork.ai_analysis && (
                <div className="bg-purple-50 rounded-lg p-3 md:p-4 border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Zap className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                    AI Analysis
                    <span className="text-[10px] font-normal text-purple-500">(Admin Only)</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedArtwork.ai_analysis.title && (
                      <div>
                        <p className="text-[10px] text-purple-600 font-medium uppercase">Title</p>
                        <p className="text-sm text-gray-800">{selectedArtwork.ai_analysis.title}</p>
                      </div>
                    )}
                    {selectedArtwork.ai_analysis.description && (
                      <div>
                        <p className="text-[10px] text-purple-600 font-medium uppercase">Description</p>
                        <p className="text-xs text-gray-700 leading-relaxed">{selectedArtwork.ai_analysis.description}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-3">
                      {selectedArtwork.ai_analysis.category && (
                        <div>
                          <p className="text-[10px] text-purple-600 font-medium uppercase">Category</p>
                          <p className="text-xs text-gray-800 capitalize">{selectedArtwork.ai_analysis.category}</p>
                        </div>
                      )}
                      {selectedArtwork.ai_analysis.type && (
                        <div>
                          <p className="text-[10px] text-purple-600 font-medium uppercase">Type</p>
                          <p className="text-xs text-gray-800 capitalize">{selectedArtwork.ai_analysis.type}</p>
                        </div>
                      )}
                      {selectedArtwork.ai_analysis.quality_score && (
                        <div>
                          <p className="text-[10px] text-purple-600 font-medium uppercase">Quality</p>
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium capitalize ${
                            selectedArtwork.ai_analysis.quality_score === 'high' ? 'bg-green-100 text-green-700' :
                            selectedArtwork.ai_analysis.quality_score === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {selectedArtwork.ai_analysis.quality_score}
                          </span>
                        </div>
                      )}
                    </div>
                    {selectedArtwork.ai_analysis.colors && selectedArtwork.ai_analysis.colors.length > 0 && (
                      <div>
                        <p className="text-[10px] text-purple-600 font-medium uppercase">Colors Detected</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedArtwork.ai_analysis.colors.map((color, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-white border border-purple-200 rounded text-[10px] text-gray-700">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedArtwork.ai_analysis.content_detected && selectedArtwork.ai_analysis.content_detected.length > 0 && (
                      <div>
                        <p className="text-[10px] text-purple-600 font-medium uppercase">Content Detected</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedArtwork.ai_analysis.content_detected.map((item, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-[10px]">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedArtwork.ai_analysis.keywords && selectedArtwork.ai_analysis.keywords.length > 0 && (
                      <div>
                        <p className="text-[10px] text-purple-600 font-medium uppercase">Keywords</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedArtwork.ai_analysis.keywords.map((kw, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">
                              #{kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedArtwork.ai_analysis.recommendations && selectedArtwork.ai_analysis.recommendations.length > 0 && (
                      <div className="bg-white rounded p-2 border border-purple-200">
                        <p className="text-[10px] text-purple-600 font-medium uppercase mb-1">Recommendations</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          {selectedArtwork.ai_analysis.recommendations.map((rec, idx) => (
                            <li key={idx} className="flex gap-1">• {rec}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedArtwork.ai_analysis.analyzed_at && (
                      <p className="text-[10px] text-purple-400 text-right">
                        Analyzed: {new Date(selectedArtwork.ai_analysis.analyzed_at).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs md:text-sm text-gray-500 mb-2">Current Status</p>
                <span className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full ${getStatusColor(selectedArtwork.status)}`}>
                  {selectedArtwork.status.replace('_', ' ')}
                </span>
              </div>

              {/* Coding Assignment Section */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Tag className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
                  Artwork Coding
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Customer Code</label>
                    <input
                      type="text"
                      value={artworkCustomerCode || selectedArtwork.customer_code || ''}
                      onChange={(e) => setArtworkCustomerCode(e.target.value.toUpperCase())}
                      placeholder="ACM01"
                      maxLength={10}
                      className="w-full px-2 md:px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 font-mono uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Product Code</label>
                    <input
                      type="text"
                      value={artworkProductCode || selectedArtwork.product_code || ''}
                      onChange={(e) => setArtworkProductCode(e.target.value.toUpperCase())}
                      placeholder="PKG01"
                      maxLength={10}
                      className="w-full px-2 md:px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 font-mono uppercase"
                    />
                  </div>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 mt-2">
                  Version: V{String(selectedArtwork.version_number || 1).padStart(3, '0')}
                </p>
              </div>

              {/* Link to Order/Quote Section */}
              <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Link2 className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  Link to Order/Quote
                </h3>
                <div className="space-y-3">
                  <select
                    value={artworkLinkType}
                    onChange={(e) => {
                      setArtworkLinkType(e.target.value as 'order' | 'quote' | 'none');
                      setArtworkLinkedId('');
                    }}
                    className="w-full px-2 md:px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="none">No Link</option>
                    <option value="order">Link to Order</option>
                    <option value="quote">Link to Quote</option>
                  </select>
                  
                  {artworkLinkType !== 'none' && (
                    <select
                      value={artworkLinkedId}
                      onChange={(e) => setArtworkLinkedId(e.target.value)}
                      className="w-full px-2 md:px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select {artworkLinkType === 'order' ? 'Order' : 'Quote'}...</option>
                      {artworkLinkType === 'order' 
                        ? orders.map(order => (
                            <option key={order.id} value={order.id}>
                              {order.order_number} - ${order.total_amount?.toLocaleString() || 0}
                            </option>
                          ))
                        : quotes.map(quote => (
                            <option key={quote.id} value={quote.id}>
                              {quote.quote_number} - ${quote.total_amount?.toLocaleString() || 0}
                            </option>
                          ))
                      }
                    </select>
                  )}
                </div>
              </div>

              {selectedArtwork.customer_comment && (
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-700 mb-2">Customer Comment</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs md:text-sm text-blue-800">{selectedArtwork.customer_comment}</p>
                  </div>
                </div>
              )}

              {/* Thread System - Message Exchange */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
                  Conversation Thread
                  <span className="text-xs font-normal text-gray-500">({artworkComments.length} messages)</span>
                </h3>
                
                {/* Thread Timeline */}
                <div className="space-y-3 max-h-64 overflow-y-auto mb-4 pr-1">
                  {loadingComments ? (
                    <div className="text-center py-4 text-gray-500 text-sm">
                      <RefreshCw className="h-4 w-4 animate-spin mx-auto mb-1" />
                      Loading thread...
                    </div>
                  ) : artworkComments.length === 0 ? (
                    <div className="text-center py-6 text-gray-400">
                      <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p className="text-xs md:text-sm">No messages yet. Start the conversation!</p>
                    </div>
                  ) : (
                    artworkComments.map(comment => (
                      <div
                        key={comment.id}
                        className={`p-3 rounded-lg text-xs md:text-sm ${
                          comment.is_admin
                            ? 'bg-primary-50 border-l-4 border-primary-500 ml-4'
                            : 'bg-white border-l-4 border-green-500 mr-4 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                              comment.is_admin ? 'bg-primary-100 text-primary-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {comment.is_admin ? '🔵 Admin' : '🟢 Customer'}
                            </span>
                            {comment.message_type === 'file' && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">
                                📎 File
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-400">
                            {new Date(comment.created_at).toLocaleString()}
                          </span>
                        </div>
                        
                        {/* File attachment */}
                        {comment.file_url && (
                          <a
                            href={comment.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2 mb-2 bg-white rounded border border-gray-200 hover:bg-gray-50 transition"
                          >
                            <FileText className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-blue-600 truncate">{comment.file_name}</p>
                              {comment.file_size && (
                                <p className="text-[10px] text-gray-500">{formatFileSize(comment.file_size)}</p>
                              )}
                            </div>
                            <span className="text-[10px] text-blue-500">Download ↓</span>
                          </a>
                        )}
                        
                        {/* Message text */}
                        {comment.message && !comment.message.startsWith('Uploaded:') && (
                          <p className="text-gray-800 whitespace-pre-wrap">{comment.message}</p>
                        )}
                      </div>
                    ))
                  )}
                </div>
                
                {/* File upload preview */}
                {threadFile && (
                  <div className="flex items-center gap-2 p-2 mb-3 bg-blue-50 rounded-lg border border-blue-200">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="flex-1 text-xs text-blue-800 truncate">{threadFile.name}</span>
                    <button onClick={() => setThreadFile(null)} className="text-blue-600 hover:text-blue-800">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                
                {/* New Message Input with File Upload */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !uploadingThread && addComment()}
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      disabled={uploadingThread}
                    />
                    <label className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition flex items-center">
                      <Upload className="h-4 w-4" />
                      <input
                        type="file"
                        className="hidden"
                        accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.zip,.psd"
                        onChange={(e) => e.target.files?.[0] && setThreadFile(e.target.files[0])}
                        disabled={uploadingThread}
                      />
                    </label>
                    <button
                      onClick={addComment}
                      disabled={(!newComment.trim() && !threadFile) || uploadingThread}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center gap-2"
                    >
                      {uploadingThread ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400">Supports: AI, EPS, PDF, PNG, JPG, TIFF, ZIP, PSD</p>
                </div>
              </div>

              {/* Show approval info if approved */}
              {selectedArtwork.approval_type && (
                <div className={`rounded-lg p-3 md:p-4 ${selectedArtwork.approval_type === 'approve_as_is' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h4 className="font-semibold mb-2 text-sm">
                    {selectedArtwork.approval_type === 'approve_as_is' ? '✅ Customer Approved' : '❌ Customer Requested Changes'}
                  </h4>
                  {selectedArtwork.approver_signature && (
                    <p className="text-xs md:text-sm">Signed by: {selectedArtwork.approver_signature}</p>
                  )}
                  {selectedArtwork.approved_date && (
                    <p className="text-xs md:text-sm">Date: {selectedArtwork.approved_date}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Internal Remark (Not visible to customer)</label>
                <textarea
                  value={artworkFeedback}
                  onChange={(e) => setArtworkFeedback(e.target.value)}
                  placeholder="Internal notes for team..."
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 resize-none"
                />
                {/* Internal File Upload */}
                <div className="mt-2 flex items-center gap-2">
                  <label className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                    <Upload className="h-3.5 w-3.5" />
                    {internalFile ? internalFile.name : 'Attach File'}
                    <input
                      type="file"
                      onChange={(e) => setInternalFile(e.target.files?.[0] || null)}
                      className="hidden"
                      accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.zip,.psd,.doc,.docx,.xls,.xlsx"
                    />
                  </label>
                  {internalFile && (
                    <button
                      onClick={() => setInternalFile(null)}
                      className="text-xs text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
                {/* Show existing internal file if any */}
                {selectedArtwork.admin_feedback?.includes('[Internal File:') && (
                  <div className="mt-2 p-2 bg-amber-50 rounded-lg">
                    <p className="text-xs text-amber-700 font-medium">📎 Attached Internal File:</p>
                    {(() => {
                      const match = selectedArtwork.admin_feedback.match(/\[Internal File: (.+?)\]\((.+?)\)/)
                      if (match) {
                        return (
                          <a href={match[2]} target="_blank" rel="noopener noreferrer" className="text-xs text-amber-600 underline hover:text-amber-800">
                            {match[1]}
                          </a>
                        )
                      }
                      return null
                    })()}
                  </div>
                )}
              </div>

              {/* Save Coding Button */}
              <button
                disabled={uploadingInternal}
                onClick={async () => {
                  setUploadingInternal(true)
                  try {
                    let feedbackText = artworkFeedback || ''
                    
                    // Upload internal file if selected
                    if (internalFile) {
                      const ext = internalFile.name.split('.').pop() || 'bin'
                      const storagePath = `internal/${selectedArtwork.id}/${Date.now()}.${ext}`
                      
                      const { data: uploadData, error: storageError } = await supabase.storage
                        .from('artworks')
                        .upload(storagePath, internalFile, {
                          cacheControl: '3600',
                          upsert: false,
                          contentType: internalFile.type || 'application/octet-stream'
                        })
                      
                      if (storageError) throw new Error(storageError.message)
                      
                      const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(uploadData?.path || storagePath)
                      const fileUrl = urlData.publicUrl
                      
                      // Append file info to feedback
                      feedbackText = feedbackText.replace(/\[Internal File: .+?\]\(.+?\)\s*/g, '') // Remove old file
                      feedbackText = `${feedbackText}\n[Internal File: ${internalFile.name}](${fileUrl})`.trim()
                    }
                    
                    const updateData: any = {
                      updated_at: new Date().toISOString(),
                      admin_feedback: feedbackText || null
                    };
                    if (artworkCustomerCode) updateData.customer_code = artworkCustomerCode;
                    if (artworkProductCode) updateData.product_code = artworkProductCode;
                  
                  // Update assigned customer - always update if a customer is selected
                  if (artworkAssignedUserId) {
                    // Check if this is a CRM Inquiry ID and if there's a matching Website Customer by email
                    const inquiry = inquiries.find(i => i.id === artworkAssignedUserId)
                    if (inquiry && inquiry.email) {
                      // Always save customer_email for fallback matching in customer center
                      updateData.customer_email = inquiry.email;
                      
                      // Find matching Website Customer by email
                      const matchingCustomer = customers.find(c => c.email?.toLowerCase() === inquiry.email?.toLowerCase())
                      if (matchingCustomer) {
                        // Use Website Customer ID for proper customer center access
                        updateData.user_id = matchingCustomer.id;
                        console.log('CRM Contact matched to Website Customer:', inquiry.email, '-> user_id:', matchingCustomer.id);
                      } else {
                        // No matching customer, use inquiry ID but email will enable fallback matching
                        updateData.user_id = artworkAssignedUserId;
                        console.log('CRM Contact has no matching Website account, saved email for fallback:', inquiry.email);
                      }
                    } else {
                      // Already a Website Customer ID - also save their email
                      const customer = customers.find(c => c.id === artworkAssignedUserId)
                      if (customer?.email) {
                        updateData.customer_email = customer.email;
                      }
                      updateData.user_id = artworkAssignedUserId;
                      console.log('Updating artwork user_id to:', artworkAssignedUserId);
                    }
                  }
                  
                  // Handle link type
                  updateData.link_type = artworkLinkType || 'none';
                  if (artworkLinkType === 'order' && artworkLinkedId) {
                    updateData.linked_order_id = artworkLinkedId;
                    updateData.linked_quote_id = null;
                    const linkedOrder = orders.find(o => o.id === artworkLinkedId);
                    if (linkedOrder) updateData.order_number = linkedOrder.order_number;
                  } else if (artworkLinkType === 'quote' && artworkLinkedId) {
                    updateData.linked_quote_id = artworkLinkedId;
                    updateData.linked_order_id = null;
                    const linkedQuote = quotes.find(q => q.id === artworkLinkedId);
                    if (linkedQuote) updateData.quote_number = linkedQuote.quote_number;
                  } else {
                    updateData.linked_order_id = null;
                    updateData.linked_quote_id = null;
                  }
                  
                  const { error } = await supabase.from('artwork_files').update(updateData).eq('id', selectedArtwork.id);
                  if (error) {
                    console.error('Save error:', error);
                    alert('Error saving: ' + error.message);
                    return;
                  }
                  setInternalFile(null)
                  await fetchData();
                  alert('Saved!');
                  } catch (err: any) {
                    console.error('Save error:', err)
                    alert('Error: ' + err.message)
                  } finally {
                    setUploadingInternal(false)
                  }
                }}
                className="w-full px-4 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Tag className="h-4 w-4" />
                Save Coding
              </button>

              {/* Action Buttons - 2x2 grid */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={async () => {
                    const updateData: any = { 
                      status: 'proof_ready',
                      admin_feedback: artworkFeedback || null,
                      updated_at: new Date().toISOString()
                    };
                    if (artworkCustomerCode) updateData.customer_code = artworkCustomerCode;
                    if (artworkProductCode) updateData.product_code = artworkProductCode;
                    
                    await supabase.from('artwork_files').update(updateData).eq('id', selectedArtwork.id);
                    fetchData();
                    setSelectedArtwork(null);
                    setArtworkFeedback('');
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-indigo-600 text-white text-xs md:text-sm rounded-lg hover:bg-indigo-700 transition"
                >
                  <FileCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Set </span>Proof Ready
                </button>
                <button
                  onClick={() => updateArtworkStatus(selectedArtwork.id, 'revision_needed', artworkFeedback)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-orange-600 text-white text-xs md:text-sm rounded-lg hover:bg-orange-700 transition"
                >
                  <AlertCircle className="h-4 w-4" />
                  Revision
                </button>
                <button
                  onClick={() => updateArtworkStatus(selectedArtwork.id, 'in_production', artworkFeedback)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-green-600 text-white text-xs md:text-sm rounded-lg hover:bg-green-700 transition"
                >
                  <CheckCircle className="h-4 w-4" />
                  Production
                </button>
                <button
                  onClick={() => updateArtworkStatus(selectedArtwork.id, 'prepress', artworkFeedback)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-purple-600 text-white text-xs md:text-sm rounded-lg hover:bg-purple-700 transition"
                >
                  <ImageIcon className="h-4 w-4" />
                  Prepress
                </button>
              </div>

              {/* Bottom actions */}
              <div className="flex gap-2 pt-2 border-t">
                <a
                  href={selectedArtwork.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50"
                >
                  Download
                </a>
                <button
                  onClick={() => deleteArtwork(selectedArtwork.id)}
                  className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Upload Artwork Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Upload Artwork for Contact</h2>
              <button onClick={() => { setShowUploadModal(false); setUploadError(''); setUploadCustomerId(''); setContactSearch(''); setUploadContactType('customer'); }} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* Search Box */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search Contacts</label>
                <div className="relative">
                  <input
                    type="text"
                    value={contactSearch}
                    onChange={(e) => setContactSearch(e.target.value)}
                    placeholder="Search by name, email, or company..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Contact Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Contact</label>
                <select
                  value={`${uploadContactType}:${uploadCustomerId}`}
                  onChange={(e) => {
                    const [type, id] = e.target.value.split(':')
                    setUploadContactType(type as 'customer' | 'inquiry')
                    setUploadCustomerId(id || '')
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="customer:">-- Select a contact --</option>
                  
                  {/* Website Customers */}
                  {filteredCustomers.length > 0 && (
                    <optgroup label={`Website Customers (${filteredCustomers.length})`}>
                      {filteredCustomers.map(customer => (
                        <option key={`customer-${customer.id}`} value={`customer:${customer.id}`}>
                          {customer.full_name || customer.email} {customer.company ? `(${customer.company})` : ''}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  
                  {/* CRM Inquiries */}
                  {filteredInquiries.length > 0 && (
                    <optgroup label={`Imported Contacts (${filteredInquiries.length})`}>
                      {filteredInquiries.map(inquiry => (
                        <option key={`inquiry-${inquiry.id}`} value={`inquiry:${inquiry.id}`}>
                          {inquiry.name || inquiry.email} {inquiry.company ? `(${inquiry.company})` : ''} - {inquiry.source}
                        </option>
                      ))}
                    </optgroup>
                  )}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {customers.length} website customers + {inquiries.length} imported contacts
                </p>
              </div>

              {/* Selected Contact Info */}
              {uploadCustomerId && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      {uploadContactType === 'customer' ? (
                        <>
                          <p className="text-sm font-medium text-gray-900">
                            {customers.find(c => c.id === uploadCustomerId)?.full_name || 'Unknown'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {customers.find(c => c.id === uploadCustomerId)?.email}
                          </p>
                          <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">Website Customer</span>
                        </>
                      ) : (
                        <>
                          <p className="text-sm font-medium text-gray-900">
                            {inquiries.find(i => i.id === uploadCustomerId)?.name || 'Unknown'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {inquiries.find(i => i.id === uploadCustomerId)?.email}
                          </p>
                          <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Imported Contact</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Artwork File</label>
                <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition ${
                  uploadCustomerId ? 'border-gray-300 hover:border-primary-500 hover:bg-gray-50' : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                }`}>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className={`h-8 w-8 mb-2 ${uploadCustomerId ? 'text-gray-500' : 'text-gray-300'}`} />
                    <p className={`text-sm ${uploadCustomerId ? 'text-gray-500' : 'text-gray-400'}`}>
                      {uploading ? 'Uploading...' : 'Click to upload'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">AI, EPS, PDF, PNG, JPG, PSD, ZIP (Max 10MB)</p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.psd,.zip"
                    onChange={handleAdminUpload}
                    className="hidden"
                    disabled={!uploadCustomerId || uploading}
                  />
                </label>
              </div>

              {/* Error Message */}
              {uploadError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {uploadError}
                </div>
              )}

              {/* Note */}
              <p className="text-xs text-gray-500">
                {uploadContactType === 'customer' 
                  ? "The uploaded file will appear in the customer's Customer Center under 'Artwork Files'."
                  : "The uploaded file will be stored for this contact. They can view it once they register on the website."
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminManagementPage
