import React, { useState, useEffect, useTransition, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SlidingNumber } from '../components/animate-ui/primitives/texts/sliding-number'
import { 
  Package, FileText, Palette, Settings, LogOut, Home, Download, Search, Bell, 
  LayoutDashboard, ShoppingCart, FileCheck, Image, ChevronRight, TrendingUp, 
  TrendingDown, Users, DollarSign, MoreHorizontal, Plus, RefreshCw, Eye, X, 
  MapPin, Phone, Mail as MailIcon, Truck, ExternalLink, Upload, CheckCircle, 
  Clock, AlertCircle, FileImage, MessageSquare, Send, Heart, Trash2, Globe, 
  Camera, Info, Circle, PenLine, Link2, Sparkles, Star, RotateCcw, Archive, Zap,
  LayoutGrid, List
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { supabase, Order, Quote, Document, ArtworkFile, SavedCartItem, ArtworkComment, CustomerActivityLog } from '../lib/supabase'
import { analyzeArtworkWithXAI } from '../lib/artworkAnalysis'
import { useTranslation } from 'react-i18next'
import { useStore } from '../store/StoreContext'
import DashboardFilesNav from '../components/ui/files-nav'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from '../components/animate-ui/components/radix/tabs'
import { DataManagementBar } from '../components/ui/DataManagementBar'
import { Eye as ViewIcon, Download as DownloadIcon, Upload as UploadIcon } from 'lucide-react'
import { NotificationList, type Notification } from '../components/animate-ui/components/community/notification-list'
import { PinList, type PinListItem } from '../components/animate-ui/components/community/pin-list'
import { ArtworkStatusAvatar, type StatusItem, type ArtworkStatus } from '../components/animate-ui/components/community/user-presence-avatar'
import { QuickAccessSheet, type QuickAccessItem, type ArtworkQuickStatus } from '../components/ui/QuickAccessSheet'
import { ImagePreviewPopover } from '../components/animate-ui/components/radix/popover'

type TabType = 'dashboard' | 'orders' | 'quotes' | 'documents' | 'artwork' | 'saved' | 'settings' | 'bin'

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  production: 'bg-purple-100 text-purple-800',
  shipped: 'bg-indigo-100 text-indigo-800',
  delivered: 'bg-green-100 text-green-800',
  accepted: 'bg-green-100 text-green-800',
  expired: 'bg-red-100 text-red-800',
}

const DashboardPage: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user, signOut, loading: authLoading } = useAuth()
  const { addToCart, setIsCartOpen } = useStore()
  const [isPending, startTransition] = useTransition()
  const [orders, setOrders] = useState<Order[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [documents, setDocuments] = useState<Document[]>([])
  const [artworks, setArtworks] = useState<ArtworkFile[]>([])
    const [deletedArtworks, setDeletedArtworks] = useState<ArtworkFile[]>([])
  const [savedItems, setSavedItems] = useState<SavedCartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [orderViewMode, setOrderViewMode] = useState<'list' | 'card'>('card')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  
  // Artwork upload states
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState('')
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkFile | null>(null)
  const [revisionComment, setRevisionComment] = useState('')
  const [showRevisionModal, setShowRevisionModal] = useState(false)
  
  // Artwork comments states (Thread System)
  const [artworkComments, setArtworkComments] = useState<ArtworkComment[]>([])
  const [newComment, setNewComment] = useState('')
  const [loadingComments, setLoadingComments] = useState(false)
  const [showCommentsArtworkId, setShowCommentsArtworkId] = useState<string | null>(null)
  const [threadFile, setThreadFile] = useState<File | null>(null)
  const [uploadingThread, setUploadingThread] = useState(false)
  
  // Proof Review Modal states
  const [showProofReviewModal, setShowProofReviewModal] = useState(false)
  const [proofChecklist, setProofChecklist] = useState({
    bag_size: false,
    product_weight: false,
    colors: false,
    text_spelling: false,
    logo_graphics: false,
    upc_barcode: false,
    roll_direction: false,
    closure_type: false,
    add_ons: false,
    quantity: false
  })
  const [approvalType, setApprovalType] = useState<'approve_as_is' | 'not_approved' | ''>('')
  const [approverSignature, setApproverSignature] = useState('')
  const [approverCompany, setApproverCompany] = useState('')
  const [approvalNotes, setApprovalNotes] = useState('')
  
  // Saved item edit states
  const [editingItem, setEditingItem] = useState<SavedCartItem | null>(null)
  const [editForm, setEditForm] = useState({
    quantity: 0,
    shape: '',
    size: '',
    barrier: '',
    finish: ''
  })
  
  // RFQ submission states
  const [showRfqForm, setShowRfqForm] = useState(false)
  const [rfqForm, setRfqForm] = useState({
    message: '',
    websiteLink: '',
  })
  const [rfqPhotos, setRfqPhotos] = useState<File[]>([])
  const [rfqSubmitting, setRfqSubmitting] = useState(false)
  const [rfqError, setRfqError] = useState('')
  
  // Pagination states
  const [artworkPage, setArtworkPage] = useState(1)
  const [ordersPage, setOrdersPage] = useState(1)
  const ITEMS_PER_PAGE = 9

  // Pagination calculations
  const artworkTotalPages = Math.max(1, Math.ceil(artworks.length / ITEMS_PER_PAGE))
  const paginatedArtworks = artworks.slice(
    (artworkPage - 1) * ITEMS_PER_PAGE,
    artworkPage * ITEMS_PER_PAGE
  )
  
  // Notification dropdown state
  const [showNotifications, setShowNotifications] = useState(false)
  
  // Generate notifications from recent activity (customer perspective)
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
    
    // Artworks with proof ready for review
    artworks
      .filter(a => a.status === 'proof_ready')
      .slice(0, 3)
      .forEach(a => {
        notifs.push({
          id: `proof-${a.id}`,
          title: 'Proof Ready for Review',
          subtitle: a.name,
          time: timeAgo(a.updated_at || a.created_at),
          type: 'proof',
          isAdmin: true,
          onClick: () => {
            setActiveTab('artwork')
            setSelectedArtwork(a)
          }
        })
      })
    
    // Artworks with admin feedback (revision needed)
    artworks
      .filter(a => a.status === 'revision_needed')
      .slice(0, 2)
      .forEach(a => {
        notifs.push({
          id: `feedback-${a.id}`,
          title: 'Revision Needed',
          subtitle: a.name,
          time: timeAgo(a.updated_at || a.created_at),
          type: 'comment',
          isAdmin: true,
          onClick: () => {
            setActiveTab('artwork')
            setSelectedArtwork(a)
          }
        })
      })
    
    // Approved artworks
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
    
    // Recent quote responses
    quotes
      .filter(q => q.admin_reply && q.replied_at)
      .slice(0, 2)
      .forEach(q => {
        notifs.push({
          id: `quote-${q.id}`,
          title: 'Quote Response',
          subtitle: q.admin_reply?.slice(0, 40) || 'Response received',
          time: timeAgo(q.replied_at || q.created_at),
          type: 'default',
          isAdmin: true,
          onClick: () => setActiveTab('quotes')
        })
      })
    
    return notifs.slice(0, 6)
  }, [artworks, quotes])
  
  // Pinned items state (stored in localStorage)
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('customer_pinned_items')
    return saved ? new Set(JSON.parse(saved)) : new Set()
  })
  
  // Save pinned items to localStorage
  useEffect(() => {
    localStorage.setItem('customer_pinned_items', JSON.stringify([...pinnedIds]))
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
  
  // Generate pin list items for customer (proof ready, orders, quotes)
  const pinListItems: PinListItem[] = useMemo(() => {
    const items: PinListItem[] = []
    
    // Artworks needing action (proof ready)
    artworks.filter(a => a.status === 'proof_ready').slice(0, 4).forEach(a => {
      items.push({
        id: a.id,
        name: a.name,
        info: 'Review proof',
        type: 'artwork',
        badge: 'Action',
        badgeColor: 'bg-amber-100 text-amber-700',
        pinned: pinnedIds.has(a.id),
        onClick: () => {
          setActiveTab('artwork')
          setSelectedArtwork(a)
        }
      })
    })
    
    // Active orders
    orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').slice(0, 3).forEach(o => {
      items.push({
        id: o.id,
        name: `Order #${o.order_number}`,
        info: o.status.charAt(0).toUpperCase() + o.status.slice(1),
        type: 'order',
        badge: o.status,
        badgeColor: statusColors[o.status] || 'bg-gray-100 text-gray-600',
        pinned: pinnedIds.has(o.id),
        onClick: () => {
          setActiveTab('orders')
          setSelectedOrder(o)
        }
      })
    })
    
    // Pending quotes
    quotes.filter(q => q.status === 'pending').slice(0, 3).forEach(q => {
      items.push({
        id: q.id,
        name: q.is_rfq ? `RFQ Request` : `Quote #${q.quote_number}`,
        info: q.notes?.slice(0, 30) || 'Awaiting response',
        type: 'quote',
        badge: 'Pending',
        badgeColor: 'bg-yellow-100 text-yellow-700',
        pinned: pinnedIds.has(q.id),
        onClick: () => setActiveTab('quotes')
      })
    })
    
    // Sort: pinned first
    return items.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
  }, [orders, quotes, artworks, pinnedIds])
  
  // Artwork status items for status overview
  const artworkStatusItems: StatusItem[] = useMemo(() => {
    return artworks.map(a => ({
      id: a.id,
      name: a.name,
      fallback: a.name.slice(0, 2).toUpperCase(),
      tooltip: a.status.replace(/_/g, ' '),
      status: a.status as ArtworkStatus,
      onClick: () => {
        setActiveTab('artwork')
        setSelectedArtwork(a)
      }
    }));
  }, [artworks]);
    
  // Quick Access items for customer sheet
  const quickAccessItems: QuickAccessItem[] = useMemo(() => {
    const items: QuickAccessItem[] = [];
      
    // Artworks needing review (proof ready)
    artworks.filter(a => a.status === 'proof_ready').slice(0, 5).forEach(a => {
      items.push({
        id: a.id,
        name: a.name,
        info: 'Review proof',
        type: 'artwork',
        status: 'received' as ArtworkQuickStatus,
        onClick: () => {
          setActiveTab('artwork');
          setSelectedArtwork(a);
        }
      });
    });
      
    // Artworks with revision needed
    artworks.filter(a => a.status === 'revision_needed').slice(0, 3).forEach(a => {
      items.push({
        id: a.id,
        name: a.name,
        info: 'Revision needed',
        type: 'artwork',
        status: 'received' as ArtworkQuickStatus,
        onClick: () => {
          setActiveTab('artwork');
          setSelectedArtwork(a);
        }
      });
    });
      
    return items;
  }, [artworks])

  // Reset page when artworks change
  useEffect(() => {
    setArtworkPage(1)
  }, [artworks.length])

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/signin')
    }
  }, [user, authLoading, navigate])

  // Helper function to log customer activity
  const logActivity = useCallback(async (
    actionType: CustomerActivityLog['action_type'],
    actionDetails?: Record<string, any>
  ) => {
    if (!user?.email) return
    try {
      await supabase.from('customer_activity_log').insert({
        user_id: user.id,
        user_email: user.email,
        action_type: actionType,
        action_details: actionDetails || {},
        page_path: window.location.pathname,
        user_agent: navigator.userAgent
      })
    } catch (e) {
      console.error('Failed to log activity:', e)
    }
  }, [user])

  // Create profile if it doesn't exist and notify admin of new registration
  useEffect(() => {
    const ensureProfileExists = async () => {
      if (!user) return
      
      // Check if profile exists
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', user.id)
        .single()
      
      if (!existingProfile) {
        // Create profile for new user
        const { error: insertError } = await supabase.from('profiles').insert({
          id: user.id,
          email: user.email,
          full_name: user.user_metadata?.full_name || user.user_metadata?.name || '',
          company: user.user_metadata?.company || '',
          phone: '',
        })
        
        if (!insertError) {
          console.log('Profile created for new user:', user.email)
          // Log registration activity
          logActivity('register', { source: 'email_password' })
          // Notify admin of new registration
          try {
            await fetch('/api/notify-registration', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: user.email,
                fullName: user.user_metadata?.full_name || user.user_metadata?.name || '',
                company: user.user_metadata?.company || '',
                userId: user.id,
                registeredAt: new Date().toISOString()
              })
            })
          } catch (e) {
            console.error('Failed to send registration notification:', e)
          }
        }
      } else {
        // Existing user login - log activity
        logActivity('login')
      }
    }
    
    if (user) {
      ensureProfileExists()
      fetchData()
    }
  }, [user, logActivity])

  const fetchData = async () => {
    setLoading(true)
    
    // Build query conditions - handle cases where user_id might not match but email does
    const userId = user?.id
    const userEmail = user?.email
    
    // Fetch from database - orders by user_id OR customer_email for better matching
    // Use separate queries for better reliability when user_id or email might be undefined
    const queries = []
    
    // Orders: Fetch by both user_id and customer_email
    if (userId && userEmail) {
      queries.push(supabase.from('orders').select('*').or(`user_id.eq.${userId},customer_email.ilike.${userEmail}`).order('created_at', { ascending: false }))
    } else if (userEmail) {
      queries.push(supabase.from('orders').select('*').ilike('customer_email', userEmail).order('created_at', { ascending: false }))
    } else if (userId) {
      queries.push(supabase.from('orders').select('*').eq('user_id', userId).order('created_at', { ascending: false }))
    } else {
      queries.push(Promise.resolve({ data: [], error: null }))
    }
    
    // Quotes
    if (userId && userEmail) {
      queries.push(supabase.from('quotes').select('*').or(`user_id.eq.${userId},customer_email.ilike.${userEmail}`).is('deleted_at', null).order('created_at', { ascending: false }))
    } else if (userEmail) {
      queries.push(supabase.from('quotes').select('*').ilike('customer_email', userEmail).is('deleted_at', null).order('created_at', { ascending: false }))
    } else if (userId) {
      queries.push(supabase.from('quotes').select('*').eq('user_id', userId).is('deleted_at', null).order('created_at', { ascending: false }))
    } else {
      queries.push(Promise.resolve({ data: [], error: null }))
    }
    
    // RFQ submissions
    if (userId && userEmail) {
      queries.push(supabase.from('rfq_submissions').select('*').or(`user_id.eq.${userId},customer_email.ilike.${userEmail}`).is('deleted_at', null).order('created_at', { ascending: false }))
    } else if (userEmail) {
      queries.push(supabase.from('rfq_submissions').select('*').ilike('customer_email', userEmail).is('deleted_at', null).order('created_at', { ascending: false }))
    } else if (userId) {
      queries.push(supabase.from('rfq_submissions').select('*').eq('user_id', userId).is('deleted_at', null).order('created_at', { ascending: false }))
    } else {
      queries.push(Promise.resolve({ data: [], error: null }))
    }
    
    // Documents
    if (userId) {
      queries.push(supabase.from('documents').select('*').or(`user_id.eq.${userId},is_public.eq.true`).order('created_at', { ascending: false }))
    } else {
      queries.push(supabase.from('documents').select('*').eq('is_public', true).order('created_at', { ascending: false }))
    }
    
    // Artworks by user_id
    if (userId) {
      queries.push(supabase.from('artwork_files').select('*').eq('user_id', userId).is('deleted_at', null).order('created_at', { ascending: false }))
    } else {
      queries.push(Promise.resolve({ data: [], error: null }))
    }
    
    // Saved items
    if (userId) {
      queries.push(supabase.from('saved_cart_items').select('*').eq('user_id', userId).order('created_at', { ascending: false }))
    } else {
      queries.push(Promise.resolve({ data: [], error: null }))
    }
    
    // Deleted artworks by user_id
    if (userId) {
      queries.push(supabase.from('artwork_files').select('*').eq('user_id', userId).not('deleted_at', 'is', null).order('deleted_at', { ascending: false }))
    } else {
      queries.push(Promise.resolve({ data: [], error: null }))
    }
    
    // Artworks by customer_email
    if (userEmail) {
      queries.push(supabase.from('artwork_files').select('*').ilike('customer_email', userEmail).is('deleted_at', null).order('created_at', { ascending: false }))
      queries.push(supabase.from('artwork_files').select('*').ilike('customer_email', userEmail).not('deleted_at', 'is', null).order('deleted_at', { ascending: false }))
    } else {
      queries.push(Promise.resolve({ data: [], error: null }))
      queries.push(Promise.resolve({ data: [], error: null }))
    }

    const [ordersRes, quotesRes, rfqRes, docsRes, artworksRes, savedRes, deletedArtworksRes, artworksByEmailRes, deletedArtworksByEmailRes] = await Promise.all(queries)
    setOrders(ordersRes.data || [])
    
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
    
    // Combine and sort by created_at
    const allQuotes = [...regularQuotes, ...rfqSubmissions].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    
    setQuotes(allQuotes)
    setDocuments(docsRes.data || [])
    
    // Merge artworks by user_id and customer_email, deduplicate by id
    const artworksByUserId = artworksRes.data || []
    const artworksByEmail = artworksByEmailRes.data || []
    const allArtworksMap = new Map<string, ArtworkFile>()
    artworksByUserId.forEach(a => allArtworksMap.set(a.id, a))
    artworksByEmail.forEach(a => allArtworksMap.set(a.id, a))
    const mergedArtworks = Array.from(allArtworksMap.values()).sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    setArtworks(mergedArtworks)
    
    // Same for deleted artworks
    const deletedByUserId = deletedArtworksRes.data || []
    const deletedByEmail = deletedArtworksByEmailRes.data || []
    const deletedMap = new Map<string, ArtworkFile>()
    deletedByUserId.forEach(a => deletedMap.set(a.id, a))
    deletedByEmail.forEach(a => deletedMap.set(a.id, a))
    const mergedDeleted = Array.from(deletedMap.values()).sort(
      (a, b) => new Date(b.deleted_at || b.created_at).getTime() - new Date(a.deleted_at || a.created_at).getTime()
    )
    setDeletedArtworks(mergedDeleted)
    setSavedItems(savedRes.data || [])
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const getUserName = () => {
    return user?.email?.split('@')[0] || 'User'
  }

  // Artwork upload handler - uploads directly to Supabase Storage, then saves record directly to Supabase
  const handleArtworkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    
    setUploading(true)
    setUploadError('')
    setUploadSuccess('')
    
    try {
      const uploadedFiles: string[] = []
      for (const file of Array.from(files) as File[]) {
        // Validate file size (10MB limit for direct storage upload)
        const maxSize = 10 * 1024 * 1024
        if (file.size > maxSize) {
          const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1)
          setUploadError(
            `File "${file.name}" is too large (${fileSizeMB} MB).\n\n` +
            `Maximum file size is 10 MB.\n\n` +
            `For larger files, please use:\n` +
            `• WeTransfer: https://wetransfer.com\n` +
            `• Dropbox: https://www.dropbox.com\n\n` +
            `Then share the download link with us at ryan@achievepack.com`
          )
          continue
        }
        
        // Validate file type
        const isValid = file.name.match(/\.(ai|eps|pdf|png|jpg|jpeg|tiff|tif|zip|psd)$/i)
        if (!isValid) {
          setUploadError(`Invalid file type: ${file.name}. Please upload AI, EPS, PDF, PNG, JPG, TIFF, PSD, or ZIP files.`)
          continue
        }
        
        // Upload directly to Supabase Storage (use SDK, don't manually parse JSON)
        const ext = file.name.split('.').pop() || 'bin'
        const fileName = `${user?.id}/${Date.now()}.${ext}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('artworks')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false,
            contentType: file.type || 'application/octet-stream'
          })
        
        if (uploadError) {
          console.error('Storage upload error:', uploadError)
          throw new Error(uploadError.message || 'Failed to upload file')
        }
        
        // Get public URL
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(uploadData?.path || fileName)
        const fileUrl = urlData.publicUrl
        
        // Save record directly to Supabase (RLS policy allows owner to insert with user_id = auth.uid())
        const { data: insertedData, error: insertError } = await supabase
          .from('artwork_files')
          .insert({
            user_id: user?.id,
            customer_email: user?.email, // Always save email for reliable matching
            name: file.name,
            file_url: fileUrl,
            file_type: file.type || 'unknown',
            file_size: file.size,
            status: 'pending_review'
          })
          .select()
        
        if (insertError) {
          console.error('Database insert error:', insertError)
          setUploadError(`File uploaded but record save failed: ${insertError.message}`)
        } else if (insertedData && insertedData[0]) {
          // Auto-analyze artwork with xAI (fire and forget - don't block UI)
          analyzeArtworkWithXAI(fileUrl, insertedData[0].id).catch(err => {
            console.log('Background xAI analysis:', err)
          })
          
          // Send email notification to artwork@achievepack.com
          fetch('/api/send-artwork-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              customerName: user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'Customer',
              customerEmail: user?.email,
              fileName: file.name,
              fileUrl: fileUrl,
              fileType: file.type,
              fileSize: file.size
            })
          }).then(() => console.log('Artwork email notification sent')).catch(err => console.error('Failed to send artwork email:', err))
        }
        
        uploadedFiles.push(file.name)
      }
      
      // Show success message with file names
      if (uploadedFiles.length > 0) {
        const fileList = uploadedFiles.join(', ')
        setUploadSuccess(`✓ ${uploadedFiles.length} file${uploadedFiles.length > 1 ? 's' : ''} uploaded: ${fileList}. Check the list below.`)
        setTimeout(() => setUploadSuccess(''), 8000)
        // Log activity
        logActivity('upload_artwork', { files: uploadedFiles, count: uploadedFiles.length })
      }
      
      // Refresh artwork list
      fetchData()
    } catch (error: any) {
      console.error('Upload error:', error)
      setUploadError(error.message || 'Failed to upload artwork')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  // Artwork upload handler for specific order - uploads directly to Supabase Storage
  const handleOrderArtworkUpload = async (e: React.ChangeEvent<HTMLInputElement>, orderId: string, orderNumber: string) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    
    setUploading(true)
    setUploadError('')
    setUploadSuccess('')
    
    try {
      const uploadedFiles: string[] = []
      for (const file of Array.from(files) as File[]) {
        // Validate file size (10MB limit for direct storage upload)
        const maxSize = 10 * 1024 * 1024
        if (file.size > maxSize) {
          const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1)
          setUploadError(
            `File "${file.name}" is too large (${fileSizeMB} MB). Max 10MB.\n\n` +
            `For larger files, please use WeTransfer or Dropbox and share the link with us.`
          )
          continue
        }
        
        // Validate file type
        const isValid = file.name.match(/\.(ai|eps|pdf|png|jpg|jpeg|tiff|tif|zip|psd)$/i)
        if (!isValid) {
          setUploadError(`Invalid file type: ${file.name}. Please upload AI, EPS, PDF, PNG, JPG, TIFF, PSD, or ZIP files.`)
          continue
        }
        
        // Upload directly to Supabase Storage (use SDK, don't manually parse JSON)
        const ext = file.name.split('.').pop() || 'bin'
        const fileName = `${user?.id}/${orderNumber}/${Date.now()}.${ext}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('artworks')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false,
            contentType: file.type || 'application/octet-stream'
          })
        
        if (uploadError) {
          console.error('Storage upload error:', uploadError)
          throw new Error(uploadError.message || 'Failed to upload file')
        }
        
        // Get public URL
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(uploadData?.path || fileName)
        const fileUrl = urlData.publicUrl
        
        // Save record directly to Supabase (RLS policy allows owner to insert with user_id = auth.uid())
        const { error: insertError } = await supabase
          .from('artwork_files')
          .insert({
            user_id: user?.id,
            customer_email: user?.email, // Always save email for reliable matching
            order_id: orderId,
            order_number: orderNumber,
            name: file.name,
            file_url: fileUrl,
            file_type: file.type || 'unknown',
            file_size: file.size,
            status: 'pending_review'
          })
        
        if (insertError) {
          console.error('Database insert error:', insertError)
          setUploadError(`File uploaded but record save failed: ${insertError.message}`)
        }
        
        uploadedFiles.push(file.name)
      }
      
      // Show success message with file names
      if (uploadedFiles.length > 0) {
        const fileList = uploadedFiles.join(', ')
        setUploadSuccess(`✓ ${uploadedFiles.length} file${uploadedFiles.length > 1 ? 's' : ''} uploaded for Order #${orderNumber}: ${fileList}. Check the list below.`)
        setTimeout(() => setUploadSuccess(''), 8000)
      }
      
      // Refresh artwork list
      fetchData()
    } catch (error: any) {
      console.error('Upload error:', error)
      setUploadError(error.message || 'Failed to upload artwork')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  // Submit revision comment
  const handleSubmitRevision = async () => {
    if (!selectedArtwork || !revisionComment.trim()) return
    
    try {
      await supabase.from('artwork_files')
        .update({ 
          customer_comment: revisionComment,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedArtwork.id)
      
      setShowRevisionModal(false)
      setRevisionComment('')
      setSelectedArtwork(null)
      fetchData()
    } catch (error) {
      console.error('Error submitting revision:', error)
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
  
  // Delete artwork (customer can delete their own uploads) - Soft delete
  const deleteArtwork = async (artworkId: string, artworkName: string) => {
    if (!confirm(`Move "${artworkName}" to Bin? You can restore it later.`)) return
    
    // Use setTimeout to avoid blocking UI during INP measurement
    setTimeout(async () => {
      try {
        // Soft delete - update deleted_at instead of actual delete
        const { error } = await supabase.from('artwork_files').update({ deleted_at: new Date().toISOString() }).eq('id', artworkId)
        
        if (error) {
          throw new Error(error.message)
        }
        
        // Optimistic UI update - remove from list immediately
        setArtworks(prev => prev.filter(a => a.id !== artworkId))
        
        // Background refresh for consistency
        startTransition(() => {
          fetchData()
        })
      } catch (error: any) {
        console.error('Error deleting artwork:', error)
        alert('Failed to delete artwork: ' + error.message)
        // Refresh to restore state on error
        fetchData()
      }
    }, 0)
  }
  
  // Restore artwork from bin
  const restoreArtwork = async (artworkId: string) => {
    try {
      const { error } = await supabase.from('artwork_files').update({ deleted_at: null }).eq('id', artworkId)
      if (error) throw new Error(error.message)
      fetchData()
    } catch (error: any) {
      console.error('Error restoring artwork:', error)
      alert('Failed to restore artwork: ' + error.message)
    }
  }
  
  // Permanently delete artwork from bin
  const permanentlyDeleteArtwork = async (artworkId: string, artworkName: string) => {
    if (!confirm(`Permanently delete "${artworkName}"? This cannot be undone!`)) return
    
    try {
      const { error } = await supabase.from('artwork_files').delete().eq('id', artworkId)
      if (error) throw new Error(error.message)
      fetchData()
    } catch (error: any) {
      console.error('Error permanently deleting artwork:', error)
      alert('Failed to permanently delete artwork: ' + error.message)
    }
  }
  
  // Add new comment from customer (supports text and file uploads for thread system)
  const addArtworkComment = async (artworkId: string) => {
    if (!newComment.trim() && !threadFile) return
    
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
        const storagePath = `threads/${artworkId}/${Date.now()}.${ext}`
        
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
      
      const { error } = await supabase.from('artwork_comments').insert({
        artwork_id: artworkId,
        user_id: user?.id,
        user_email: user?.email,
        user_name: user?.email?.split('@')[0] || 'Customer',
        is_admin: false,
        message: newComment.trim() || (threadFile ? `Uploaded: ${threadFile.name}` : ''),
        file_url: fileUrl || null,
        file_name: fileName || null,
        file_size: fileSize || null,
        file_type: fileType || null,
        message_type: messageType
      })
      
      if (!error) {
        // Send email notification to admin
        const artwork = artworks.find(a => a.id === artworkId)
        if (artwork) {
          try {
            console.log('Sending notification from customer:', {
              artworkId,
              artworkName: artwork.name,
              customerEmail: user?.email
            })
            const resp = await fetch('/api/send-artwork-notification', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                type: messageType === 'file' ? 'new_file' : 'new_message',
                artworkId,
                artworkName: artwork.name,
                artworkCode: artwork.artwork_code,
                customerEmail: user?.email,
                customerName: user?.email?.split('@')[0],
                message: newComment.trim() || undefined,
                isAdmin: false,
                fileUrl: fileUrl || undefined,
                fileName: fileName || undefined
              })
            })
            const result = await resp.json()
            console.log('Notification result:', result)
          } catch (e) {
            console.error('Failed to send notification:', e)
          }
        }
        
        setNewComment('')
        setThreadFile(null)
        fetchArtworkComments(artworkId)
      }
    } catch (error: any) {
      console.error('Error adding comment:', error)
      alert('Error: ' + error.message)
    } finally {
      setUploadingThread(false)
    }
  }
  
  // Handle RFQ photo upload
  const handleRfqPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    
    const validFiles: File[] = []
    let errorMsg = ''
    
    for (const file of Array.from(files) as File[]) {
      // Check file size (10MB limit per file)
      const maxSize = 10 * 1024 * 1024 // 10MB
      if (file.size > maxSize) {
        errorMsg = `File "${file.name}" exceeds 10MB limit`
        continue
      }
      
      // Check file type (images only)
      if (!file.type.startsWith('image/')) {
        errorMsg = `File "${file.name}" is not an image`
        continue
      }
      
      validFiles.push(file)
    }
    
    if (errorMsg) {
      setRfqError(errorMsg)
    }
    
    setRfqPhotos(prev => [...prev, ...validFiles])
  }
  
  // Remove RFQ photo
  const removeRfqPhoto = (index: number) => {
    setRfqPhotos(prev => prev.filter((_, i) => i !== index))
  }
  
  // Submit RFQ
  const handleSubmitRfq = async () => {
    if (!rfqForm.message.trim()) {
      setRfqError('Please enter a message')
      return
    }
    
    setRfqSubmitting(true)
    setRfqError('')
    
    try {
      // Upload photos to storage if any
      const photoUrls: string[] = []
      
      if (rfqPhotos.length > 0) {
        try {
          for (const photo of rfqPhotos) {
            const fileName = `${user?.id}/${Date.now()}_${photo.name}`
            const { data, error } = await supabase.storage
              .from('rfq-photos')
              .upload(fileName, photo)
            
            if (error) {
              console.error('Photo upload error:', error)
              // Continue without photos if upload fails
              break
            }
            
            const { data: urlData } = supabase.storage.from('rfq-photos').getPublicUrl(fileName)
            photoUrls.push(urlData.publicUrl)
          }
        } catch (photoError) {
          console.error('Photo upload failed:', photoError)
          // Continue without photos
        }
      }
      
      // Create RFQ record - try different approaches
      let quoteNumber = `RFQ-${Date.now()}`
      try {
        // First try: Insert into rfq_submissions table
        const { error: dbError } = await supabase.from('rfq_submissions').insert({
          user_id: user?.id,
          message: rfqForm.message,
          website_link: rfqForm.websiteLink || null,
          photo_urls: photoUrls.length > 0 ? photoUrls : null,
          status: 'pending',
          created_at: new Date().toISOString(),
        })
        
        if (dbError) throw dbError
      } catch (dbError: any) {
        console.error('Database insert failed:', dbError)
        
        // Fallback: Try to insert into quotes table as a workaround
        try {
          await supabase.from('quotes').insert({
            user_id: user?.id,
            quote_number: quoteNumber,
            status: 'pending',
            total_amount: 0,
            valid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            created_at: new Date().toISOString(),
            notes: `RFQ: ${rfqForm.message}${rfqForm.websiteLink ? '\nWebsite: ' + rfqForm.websiteLink : ''}${photoUrls.length > 0 ? '\nPhotos: ' + photoUrls.join(', ') : ''}`
          })
        } catch (fallbackError) {
          // If both fail, send email notification as last resort
          console.error('All save methods failed, user will be notified:', fallbackError)
          throw new Error('Unable to save RFQ. Please contact us at rfq@achievepack.com with your requirements.')
        }
      }
      
      // Send email notification to rfq@achievepack.com
      try {
        await fetch('/api/send-rfq-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerName: user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'Customer',
            customerEmail: user?.email,
            message: rfqForm.message,
            websiteLink: rfqForm.websiteLink || null,
            photoUrls: photoUrls,
            quoteNumber: quoteNumber
          })
        })
        console.log('RFQ email notification sent')
      } catch (emailError) {
        console.error('Failed to send RFQ email:', emailError)
        // Don't fail the submission if email fails
      }
      
      // Reset form
      setRfqForm({ message: '', websiteLink: '' })
      setRfqPhotos([])
      setShowRfqForm(false)
      
      // Log activity
      logActivity('submit_rfq', { hasPhotos: photoUrls.length > 0, hasWebsiteLink: !!rfqForm.websiteLink })
      
      // Show success message with ticket-style notification
      alert(
        '✅ Request Submitted Successfully!\n\n' +
        'Your custom packaging request has been received.\n\n' +
        'What happens next:\n' +
        '• Our team will review your requirements\n' +
        '• You\'ll receive a detailed quote within 24 hours\n' +
        '• Check your email for updates\n\n' +
        'Request ID: RFQ-' + Date.now().toString().slice(-8)
      )
      
      // Refresh data to show new quote/RFQ
      fetchData()
    } catch (error: any) {
      console.error('RFQ submission error:', error)
      setRfqError(error.message || 'Failed to submit RFQ. Please try again or contact us at ryan@achievepack.com')
    } finally {
      setRfqSubmitting(false)
    }
  }

  // Get status display info
  const getArtworkStatus = (status: string) => {
    switch (status) {
      case 'pending_review':
        return { label: 'Pending Review', color: 'bg-yellow-100 text-yellow-800', icon: Clock }
      case 'in_review':
        return { label: 'In Review', color: 'bg-blue-100 text-blue-800', icon: Eye }
      case 'prepress':
        return { label: 'Prepress', color: 'bg-purple-100 text-purple-800', icon: Palette }
      case 'proof_ready':
        return { label: 'Proof Ready', color: 'bg-indigo-100 text-indigo-800', icon: FileCheck }
      case 'approved':
        return { label: 'Approved', color: 'bg-green-100 text-green-800', icon: CheckCircle }
      case 'revision_needed':
        return { label: 'Revision Needed', color: 'bg-red-100 text-red-800', icon: AlertCircle }
      default:
        return { label: status, color: 'bg-gray-100 text-gray-800', icon: Clock }
    }
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const totalSpent = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0)
  const activeOrders = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length
  const pendingQuotes = quotes.filter(q => q.status === 'pending').length

  // Optimized handlers using startTransition to avoid blocking UI (INP improvement)
  const handleSelectOrder = useCallback((order: Order) => {
    startTransition(() => {
      setSelectedOrder(order)
    })
  }, [])

  // Generate AI summary of customer center status
  const aiSummary = useMemo(() => {
    const parts: string[] = []
    
    // Orders summary
    if (orders.length > 0) {
      const activeCount = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length
      const shippedCount = orders.filter(o => o.status === 'shipped').length
      if (shippedCount > 0) {
        parts.push(`${shippedCount} order${shippedCount > 1 ? 's' : ''} on the way`)
      } else if (activeCount > 0) {
        parts.push(`${activeCount} active order${activeCount > 1 ? 's' : ''}`)
      } else {
        parts.push(`${orders.length} completed order${orders.length > 1 ? 's' : ''}`)
      }
    }
    
    // Artwork summary
    if (artworks.length > 0) {
      const proofReady = artworks.filter(a => a.status === 'proof_ready').length
      const pendingReview = artworks.filter(a => a.status === 'pending_review').length
      if (proofReady > 0) {
        parts.push(`${proofReady} proof${proofReady > 1 ? 's' : ''} ready for approval`)
      } else if (pendingReview > 0) {
        parts.push(`${pendingReview} artwork${pendingReview > 1 ? 's' : ''} in review`)
      } else {
        parts.push(`${artworks.length} artwork file${artworks.length > 1 ? 's' : ''}`)
      }
    }
    
    // Quotes summary
    if (quotes.length > 0) {
      const pending = quotes.filter(q => q.status === 'pending').length
      if (pending > 0) {
        parts.push(`${pending} pending quote${pending > 1 ? 's' : ''}`)
      }
    }
    
    // Saved items
    if (savedItems.length > 0) {
      parts.push(`${savedItems.length} saved item${savedItems.length > 1 ? 's' : ''}`)
    }
    
    if (parts.length === 0) {
      return "Ready to place your first order!"
    }
    
    // Join with commas and 'and'
    if (parts.length === 1) return `You have ${parts[0]}.`
    if (parts.length === 2) return `You have ${parts[0]} and ${parts[1]}.`
    return `You have ${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}.`
  }, [orders, artworks, quotes, savedItems])

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-primary-500 mx-auto mb-4" />
          <p className="text-gray-600">{t('customerCenter.dashboard.loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 fixed h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <img src="/ap-logo.svg" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-gray-900">Customer</span>
          </Link>
        </div>

        {/* New Order Button */}
        <div className="px-4 mt-6">
          <Link
            to="/store"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition"
          >
            <Plus className="h-5 w-5" />
            {t('customerCenter.dashboard.actions.newOrder')}
          </Link>
        </div>

        {/* Search */}
        <div className="px-4 mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <hr className="mx-4 my-4 border-gray-100" />

        {/* Files Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          <DashboardFilesNav 
            activeTab={activeTab}
            onTabChange={(tab) => setActiveTab(tab as TabType)}
            counts={{
              activeOrders: activeOrders,
              pendingQuotes: pendingQuotes,
              artworks: artworks.length,
              proofReady: artworks.filter(a => a.status === 'proof_ready').length,
              inReview: artworks.filter(a => a.status === 'pending_review' || a.status === 'in_review').length,
              savedItems: savedItems.length,
              deletedArtworks: deletedArtworks.length,
              documents: documents.length,
            }}
          />
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-100">
          {/* Notification Bell in Sidebar */}
          <div className="relative mb-2">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Bell className="h-5 w-5 text-gray-500" />
              <span>Notifications</span>
              {notifications.length > 0 && (
                <span className="absolute top-1.5 left-6 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {notifications.length}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute bottom-full left-0 mb-2 z-50">
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
            className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            <LogOut className="h-5 w-5 mr-3 text-gray-500" />
            {t('customerCenter.dashboard.signOut')}
          </button>
          <div className="flex items-center px-4 py-3 mt-2">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 font-semibold">
                {user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 truncate">{getUserName()}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 pb-20 lg:pb-0">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
            {/* Mobile: Logo + Welcome */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link to="/" className="flex items-center gap-2">
                <img src="/ap-logo.svg" alt="Logo" className="h-7 sm:h-8 w-auto" />
              </Link>
              <div className="hidden xs:block">
                <p className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[120px] sm:max-w-[180px]">
                  Hi, {getUserName()}!
                </p>
              </div>
            </div>
            {/* Desktop Welcome */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Welcome back, {getUserName()}!
                </h1>
                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  {aiSummary}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Quick Access Sheet - Right Side */}
              <QuickAccessSheet
                items={quickAccessItems}
                pinListItems={pinListItems}
                onStatusChange={() => {}}
                onPinChange={handlePinChange}
                trigger={
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition relative">
                    <Zap className="h-5 w-5" />
                    {quickAccessItems.length > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                        {quickAccessItems.length}
                      </span>
                    )}
                  </button>
                }
                title="Quick Access"
                description="Your pinned items and recent activity"
              />
              {/* Notification Bell with Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
                >
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
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
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold">
                  {user?.email?.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Tabs Navigation - Mobile Optimized */}
        <div className="bg-white border-b border-gray-100 px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 overflow-x-auto scrollbar-hide">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabType)} className="w-full">
            <TabsList className="inline-flex gap-0.5 sm:gap-1 p-0.5 sm:p-1 bg-gray-100 rounded-lg min-w-max">
              <TabsTrigger value="dashboard" className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all whitespace-nowrap">
                Home
              </TabsTrigger>
              <TabsTrigger value="orders" className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all relative whitespace-nowrap">
                Orders
                {activeOrders > 0 && (
                  <span className="ml-1 sm:ml-1.5 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold bg-primary-100 text-primary-700 rounded-full">
                    {activeOrders}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="artwork" className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all relative whitespace-nowrap">
                Artwork
                {artworks.filter(a => a.status === 'proof_ready').length > 0 && (
                  <span className="ml-1 sm:ml-1.5 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold bg-amber-100 text-amber-700 rounded-full">
                    {artworks.filter(a => a.status === 'proof_ready').length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="quotes" className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all relative whitespace-nowrap">
                Quotes
                {pendingQuotes > 0 && (
                  <span className="ml-1 sm:ml-1.5 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold bg-yellow-100 text-yellow-700 rounded-full">
                    {pendingQuotes}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="saved" className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all whitespace-nowrap">
                Saved
              </TabsTrigger>
              <TabsTrigger value="documents" className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm transition-all whitespace-nowrap">
                Docs
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Page Content */}
        <main className="p-3 sm:p-4 md:p-6">
          {/* Tracking Banner - Show prominently when orders have tracking */}
          {orders.filter(o => o.tracking_number && o.status !== 'delivered').length > 0 && (
            <div className="mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 sm:p-5 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Your Orders Are On The Way!</h3>
                    <p className="text-blue-100 text-xs sm:text-sm">Track your shipments below</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {orders.filter(o => o.tracking_number && o.status !== 'delivered').map(order => (
                    <div key={order.id} className="bg-white/10 backdrop-blur rounded-lg p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <Package className="h-4 w-4 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">{order.order_number}</p>
                            <p className="text-blue-100 text-xs truncate">
                              {order.carrier || 'Carrier'}: {order.tracking_number}
                            </p>
                          </div>
                        </div>
                        {order.tracking_url ? (
                          <a 
                            href={order.tracking_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-shrink-0 px-3 py-1.5 bg-white text-blue-600 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Track
                          </a>
                        ) : (
                          <span className="flex-shrink-0 px-3 py-1.5 bg-white/20 rounded-lg text-xs sm:text-sm">
                            {order.status === 'shipped' ? 'In Transit' : order.status}
                          </span>
                        )}
                      </div>
                      {/* Shipping Notes from Admin */}
                      {order.shipping_notes && (
                        <div className="mt-2 bg-white/10 rounded-lg p-2">
                          <p className="text-xs text-blue-100 flex items-start gap-1">
                            <MessageSquare className="h-3 w-3 mt-0.5 flex-shrink-0" />
                            <span>{order.shipping_notes}</span>
                          </p>
                        </div>
                      )}
                      {/* Shipping Images from Admin */}
                      {order.shipping_images && order.shipping_images.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs text-blue-100 mb-1.5 flex items-center gap-1">
                            <Camera className="h-3 w-3" /> Shipment Photos
                          </p>
                          <div className="flex gap-2 overflow-x-auto pb-1">
                            {order.shipping_images.map((img, idx) => (
                              <a 
                                key={idx} 
                                href={img} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-shrink-0 block"
                              >
                                <img 
                                  src={img} 
                                  alt={`Shipment ${idx + 1}`} 
                                  className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-lg border-2 border-white/30 hover:border-white transition-colors"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Stats Cards - 2 cols on mobile */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 border border-gray-100">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wide">Active Orders</p>
                  <div className="flex items-end justify-between mt-1 sm:mt-2">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{activeOrders}</p>
                    <span className="text-xs sm:text-sm text-green-600 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 border border-gray-100">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wide">Total Spent</p>
                  <div className="flex items-end justify-between mt-1 sm:mt-2">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">${totalSpent >= 1000 ? (totalSpent/1000).toFixed(1) + 'k' : totalSpent.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 border border-gray-100">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wide">Total Orders</p>
                  <div className="flex items-end justify-between mt-1 sm:mt-2">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"><SlidingNumber number={orders.length} /></p>
                    <span className="text-[10px] sm:text-xs md:text-sm text-green-600 hidden sm:inline">+{orders.filter(o => {
                      const d = new Date(o.created_at)
                      const now = new Date()
                      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
                    }).length} this month</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 border border-gray-100">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wide">Documents</p>
                  <div className="flex items-end justify-between mt-1 sm:mt-2">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"><SlidingNumber number={documents.length} /></p>
                  </div>
                </div>
              </div>

              {/* Artwork Overview */}
              {artworks.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="p-3 sm:p-4 md:p-5 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center gap-2">
                      <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                      Artwork
                    </h2>
                    <button onClick={() => setActiveTab('artwork')} className="text-xs sm:text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1">
                      View All <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4">
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
                      <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-center">
                        <p className="text-base sm:text-xl md:text-2xl font-bold text-purple-700"><SlidingNumber number={artworks.length} /></p>
                        <p className="text-[9px] sm:text-[10px] md:text-xs text-purple-600">Total</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center">
                        <p className="text-base sm:text-xl md:text-2xl font-bold text-blue-700"><SlidingNumber number={artworks.filter(a => a.status === 'pending_review' || a.status === 'in_review').length} /></p>
                        <p className="text-[9px] sm:text-[10px] md:text-xs text-blue-600">Review</p>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-2 sm:p-3 text-center">
                        <p className="text-base sm:text-xl md:text-2xl font-bold text-indigo-700"><SlidingNumber number={artworks.filter(a => a.status === 'proof_ready').length} /></p>
                        <p className="text-[9px] sm:text-[10px] md:text-xs text-indigo-600">Proof</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2 sm:p-3 text-center">
                        <p className="text-base sm:text-xl md:text-2xl font-bold text-green-700"><SlidingNumber number={artworks.filter(a => a.status === 'approved' || a.status === 'in_production').length} /></p>
                        <p className="text-[9px] sm:text-[10px] md:text-xs text-green-600">Done</p>
                      </div>
                    </div>
                    {/* Recent Artwork Files */}
                    <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                      {artworks.slice(0, 3).map(artwork => {
                        const statusInfo = getArtworkStatus(artwork.status)
                        const StatusIcon = statusInfo.icon
                        const isImage = artwork.file_type?.startsWith('image/') || /\.(png|jpg|jpeg|gif|webp)$/i.test(artwork.file_url || '')
                        return (
                          <div key={artwork.id} className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                              {isImage ? (
                                <img src={artwork.file_url} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-purple-50">
                                  <FileImage className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{artwork.name}</p>
                              <p className="text-[10px] sm:text-xs text-gray-500">{new Date(artwork.created_at).toLocaleDateString()}</p>
                            </div>
                            <span className={`inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-medium rounded-full ${statusInfo.color}`}>
                              <StatusIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100">
                  <div className="p-3 sm:p-4 md:p-5 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900">Recent Orders</h2>
                    <button onClick={() => setActiveTab('orders')} className="text-xs sm:text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1">
                      See All <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {orders.length === 0 ? (
                      <div className="p-6 sm:p-8 text-center text-gray-400">
                        {t('customerCenter.dashboard.empty.noOrders')}
                        <Link to="/store" className="block mt-2 text-primary-600 hover:underline text-sm">
                          {t('customerCenter.dashboard.empty.shopNow')}
                        </Link>
                      </div>
                    ) : orders.slice(0, 5).map(order => (
                      <div key={order.id} className="p-3 sm:p-4 hover:bg-gray-50 transition cursor-pointer" onClick={() => handleSelectOrder(order)}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Package className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{order.order_number}</p>
                              <p className="text-[10px] sm:text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
                              {/* Show tracking info if available */}
                              {order.tracking_number && (
                                <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                                  <Truck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-600" />
                                  <span className="text-[9px] sm:text-xs text-blue-600 font-medium truncate">
                                    {order.carrier || 'Track'}: {order.tracking_number}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-gray-900">${order.total_amount?.toLocaleString()}</p>
                              <span className={`inline-block px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-medium rounded-full ${statusColors[order.status]}`}>
                                {order.status}
                              </span>
                            </div>
                            <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hidden sm:block" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl border border-gray-100">
                  <div className="p-3 sm:p-4 md:p-5 border-b border-gray-100">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900">{t('customerCenter.dashboard.sections.quickActions')}</h2>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
                    <Link to="/store" className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 md:p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{t('customerCenter.dashboard.actions.newOrder')}</p>
                        <p className="text-[10px] sm:text-sm text-gray-500">Browse products</p>
                      </div>
                    </Link>
                    <Link to="/" className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 md:p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Home className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{t('customerCenter.backToHome')}</p>
                        <p className="text-[10px] sm:text-sm text-gray-500">Visit homepage</p>
                      </div>
                    </Link>
                    <button onClick={() => setActiveTab('documents')} className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 md:p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition w-full text-left">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">View Certificates</p>
                        <p className="text-[10px] sm:text-sm text-gray-500">Compliance docs</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab - Unified with Artwork Style */}
          {activeTab === 'orders' && (
            <div className="space-y-3 md:space-y-6">
              {/* Header - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">My Orders</h1>
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* View Toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setOrderViewMode('list')}
                      className={`p-1.5 rounded-md transition ${orderViewMode === 'list' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
                      title="List View"
                    >
                      <List className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setOrderViewMode('card')}
                      className={`p-1.5 rounded-md transition ${orderViewMode === 'card' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
                      title="Card View"
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                  </div>
                  <Link to="/store" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition text-sm">
                    <Plus className="h-4 w-4" /> <span className="hidden xs:inline">New</span> Order
                  </Link>
                  <button
                    onClick={() => {
                      setActiveTab('quotes')
                      setShowRfqForm(true)
                    }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition text-sm"
                  >
                    <FileText className="h-4 w-4" /> <span className="hidden xs:inline">New</span> Quote
                  </button>
                </div>
              </div>

              {/* Orders List */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {orders.length === 0 ? (
                  <div className="p-6 md:p-12 text-center">
                    <Package className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-gray-300" />
                    <p className="text-sm md:text-base text-gray-500">{t('customerCenter.dashboard.empty.noOrders')}</p>
                    <Link to="/store" className="inline-block mt-3 md:mt-4 text-primary-600 hover:underline text-sm">
                      {t('customerCenter.dashboard.empty.shopNow')}
                    </Link>
                  </div>
                ) : orderViewMode === 'list' ? (
                  /* List View */
                  <div className="divide-y divide-gray-100">
                    {orders.map(order => (
                      <div key={order.id} className="p-3 md:p-4 hover:bg-gray-50 transition cursor-pointer" onClick={() => handleSelectOrder(order)}>
                        <div className="flex items-center gap-3">
                          {/* Thumbnail - Show shipping image or icon */}
                          <div className={`w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden ${
                            order.shipping_images && order.shipping_images.length > 0 ? '' : 
                            order.status === 'delivered' ? 'bg-green-50 flex items-center justify-center' :
                            order.status === 'shipped' ? 'bg-blue-50 flex items-center justify-center' :
                            'bg-gray-100 flex items-center justify-center'
                          }`}>
                            {order.shipping_images && order.shipping_images.length > 0 ? (
                              <img src={order.shipping_images[0]} alt="Shipment" className="w-full h-full object-cover" />
                            ) : order.status === 'shipped' || order.status === 'delivered' ? (
                              <Truck className={`h-5 w-5 ${order.status === 'delivered' ? 'text-green-600' : 'text-blue-600'}`} />
                            ) : (
                              <Package className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-gray-900 text-sm">{order.order_number}</h3>
                              <span className={`px-1.5 py-0.5 text-[10px] font-medium rounded-full ${statusColors[order.status]}`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                              <span>${order.total_amount?.toLocaleString()}</span>
                              <span>•</span>
                              <span>{new Date(order.created_at).toLocaleDateString()}</span>
                              {order.tracking_number && (
                                <>
                                  <span>•</span>
                                  <span className="text-blue-600 flex items-center gap-0.5">
                                    <Truck className="h-3 w-3" /> {order.carrier || 'Tracking'}
                                  </span>
                                </>
                              )}
                            </div>
                            {order.shipping_notes && (
                              <p className="text-xs text-gray-600 mt-1 line-clamp-1 flex items-center gap-1">
                                <MessageSquare className="h-3 w-3 text-blue-500 flex-shrink-0" />
                                {order.shipping_notes}
                              </p>
                            )}
                          </div>
                          {order.shipping_images && order.shipping_images.length > 1 && (
                            <div className="flex-shrink-0 flex items-center gap-0.5">
                              <Camera className="h-3 w-3 text-gray-400" />
                              <span className="text-[10px] text-gray-500">{order.shipping_images.length}</span>
                            </div>
                          )}
                          <Eye className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Card View */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {orders.map(order => (
                      <div key={order.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer bg-white" onClick={() => handleSelectOrder(order)}>
                        {/* Card Header with Image or Icon */}
                        <div className={`h-28 relative ${
                          order.shipping_images && order.shipping_images.length > 0 ? '' :
                          order.status === 'delivered' ? 'bg-gradient-to-br from-green-50 to-green-100' :
                          order.status === 'shipped' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                          order.status === 'production' ? 'bg-gradient-to-br from-purple-50 to-purple-100' :
                          'bg-gradient-to-br from-gray-50 to-gray-100'
                        }`}>
                          {order.shipping_images && order.shipping_images.length > 0 ? (
                            <>
                              <img src={order.shipping_images[0]} alt="Shipment" className="w-full h-full object-cover" />
                              {order.shipping_images.length > 1 && (
                                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                                  <Camera className="h-2.5 w-2.5" /> +{order.shipping_images.length - 1}
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              {order.status === 'shipped' || order.status === 'delivered' ? (
                                <Truck className={`h-10 w-10 ${order.status === 'delivered' ? 'text-green-300' : 'text-blue-300'}`} />
                              ) : (
                                <Package className={`h-10 w-10 ${
                                  order.status === 'production' ? 'text-purple-300' : 'text-gray-300'
                                }`} />
                              )}
                            </div>
                          )}
                          {/* Status Badge */}
                          <div className="absolute top-2 right-2">
                            <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${statusColors[order.status]}`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        {/* Card Content */}
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm truncate">{order.order_number}</h3>
                            <span className="text-sm font-medium text-gray-900">${order.total_amount?.toLocaleString()}</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{new Date(order.created_at).toLocaleDateString()}</p>
                          
                          {/* Tracking Info */}
                          {order.tracking_number && (
                            <div className="bg-blue-50 rounded-lg px-2 py-1.5 mb-2 flex items-center gap-1.5">
                              <Truck className="h-3 w-3 text-blue-600 flex-shrink-0" />
                              <span className="text-[11px] text-blue-700 truncate">{order.carrier}: {order.tracking_number}</span>
                            </div>
                          )}
                          
                          {/* Admin Notes */}
                          {order.shipping_notes && (
                            <div className="bg-gray-50 rounded-lg px-2 py-1.5 flex items-start gap-1.5">
                              <MessageSquare className="h-3 w-3 text-gray-500 mt-0.5 flex-shrink-0" />
                              <p className="text-[11px] text-gray-600 line-clamp-2">{order.shipping_notes}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quotes Tab - Unified with Artwork Style */}
          {activeTab === 'quotes' && (
            <div className="space-y-3 md:space-y-6">
              {/* Header - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Quotes & Requests</h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">View quotes and submit requests</p>
                </div>
                <button
                  onClick={() => setShowRfqForm(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition text-sm"
                >
                  <Plus className="h-4 w-4" />
                  New Request
                </button>
              </div>
              
              {/* RFQ Submission Form - Improved Ticket Style */}
              {showRfqForm && (
                <div className="bg-white rounded-xl border-2 border-primary-200 shadow-lg p-6 space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">Submit Custom Request</h2>
                        <p className="text-sm text-gray-500">Tell us about your packaging needs</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setShowRfqForm(false)
                        setRfqForm({ message: '', websiteLink: '' })
                        setRfqPhotos([])
                        setRfqError('')
                      }}
                      className="text-gray-400 hover:text-gray-600 transition"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Error Message */}
                  {rfqError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{rfqError}</p>
                      <button onClick={() => setRfqError('')} className="ml-auto text-red-600 hover:text-red-800">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Left Column - Main Info */}
                    <div className="space-y-4">
                      {/* Message Text Box */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <span className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Describe Your Requirements *
                          </span>
                        </label>
                        <textarea
                          value={rfqForm.message}
                          onChange={(e) => setRfqForm({ ...rfqForm, message: e.target.value })}
                          placeholder="Please include:\n• Product type and quantity\n• Size and material preferences\n• Special features or requirements\n• Timeline expectations"
                          rows={8}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Be as detailed as possible to help us provide an accurate quote
                        </p>
                      </div>
                      
                      {/* Website Link */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <span className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Product Website (Optional)
                          </span>
                        </label>
                        <input
                          type="url"
                          value={rfqForm.websiteLink}
                          onChange={(e) => setRfqForm({ ...rfqForm, websiteLink: e.target.value })}
                          placeholder="https://example.com/product"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Help us understand your brand and product better
                        </p>
                      </div>
                    </div>
                    
                    {/* Right Column - Attachments */}
                    <div className="space-y-4">
                      {/* Photo Upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <span className="flex items-center gap-2">
                            <Camera className="h-4 w-4" />
                            Reference Images (Optional)
                          </span>
                        </label>
                        <label className="flex flex-col items-center justify-center gap-3 p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition cursor-pointer min-h-[200px]">
                          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                            <Upload className="h-6 w-6 text-primary-600" />
                          </div>
                          <div className="text-center">
                            <span className="text-sm font-medium text-gray-700">Click to upload images</span>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP (Max 10MB each)</p>
                          </div>
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleRfqPhotoChange}
                            className="hidden"
                          />
                        </label>
                        
                        {/* Photo Preview */}
                        {rfqPhotos.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs font-medium text-gray-700 mb-2">Uploaded ({rfqPhotos.length})</p>
                            <div className="grid grid-cols-2 gap-2">
                              {rfqPhotos.map((photo, index) => (
                                <div key={index} className="relative group">
                                  <img
                                    src={URL.createObjectURL(photo)}
                                    alt={`Photo ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                                  />
                                  <button
                                    onClick={() => removeRfqPhoto(index)}
                                    className="absolute -top-1.5 -right-1.5 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg"
                                  >
                                    <X className="h-3.5 w-3.5" />
                                  </button>
                                  <p className="text-xs text-gray-500 mt-1 truncate">{photo.name}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Info Box */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex gap-3">
                          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">What happens next?</p>
                            <ul className="space-y-1 text-xs">
                              <li>• Our team will review your request</li>
                              <li>• You'll receive a detailed quote within 24 hours</li>
                              <li>• We may contact you for clarifications</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={handleSubmitRfq}
                      disabled={rfqSubmitting || !rfqForm.message.trim()}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition shadow-sm hover:shadow-md"
                    >
                      {rfqSubmitting ? (
                        <>
                          <RefreshCw className="h-5 w-5 animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Submit Request
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setShowRfqForm(false)
                        setRfqForm({ message: '', websiteLink: '' })
                        setRfqPhotos([])
                        setRfqError('')
                      }}
                      disabled={rfqSubmitting}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              
              {/* Quotes List - Artwork Style */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {quotes.length === 0 ? (
                  <div className="p-6 md:p-12 text-center">
                    <FileCheck className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-gray-300" />
                    <p className="text-sm md:text-base text-gray-500">{t('customerCenter.dashboard.empty.noQuotes')}</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {quotes.map(quote => (
                      <div key={quote.id} className="p-3 md:p-5 hover:bg-gray-50 transition">
                        <div className="space-y-3">
                          {/* Top Row: Icon + Info + Status + Actions */}
                          <div className="flex items-center gap-3">
                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex-shrink-0 flex items-center justify-center ${
                              quote.is_rfq ? 'bg-blue-50' : 
                              quote.status === 'accepted' ? 'bg-green-50' : 
                              quote.status === 'expired' ? 'bg-red-50' : 
                              'bg-yellow-50'
                            }`}>
                              <FileCheck className={`h-6 w-6 md:h-7 md:w-7 ${
                                quote.is_rfq ? 'text-blue-600' : 
                                quote.status === 'accepted' ? 'text-green-600' : 
                                quote.status === 'expired' ? 'text-red-600' : 
                                'text-yellow-600'
                              }`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-gray-900 text-sm truncate">{quote.quote_number}</h3>
                                {quote.is_rfq && (
                                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium bg-blue-100 text-blue-700 rounded flex-shrink-0">RFQ</span>
                                )}
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-0.5">
                                {!quote.is_rfq && quote.total_amount && (
                                  <>
                                    <span>${quote.total_amount.toLocaleString()}</span>
                                    <span>•</span>
                                  </>
                                )}
                                <span>{quote.is_rfq ? 'Submitted' : 'Valid'}: {new Date(quote.is_rfq ? quote.created_at : quote.valid_until).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded-full flex-shrink-0 ${statusColors[quote.status] || 'bg-gray-100 text-gray-600'}`}>
                              <span className="hidden sm:inline">{quote.status}</span>
                              <span className="sm:hidden">{quote.status.slice(0, 4)}</span>
                            </span>
                            {/* Quick Action Buttons */}
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <button
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition"
                                title="View Details"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          
                          {/* RFQ Details - Expandable */}
                          {quote.is_rfq && quote.message && (
                            <div className="bg-gray-50 rounded-lg p-2.5">
                              <p className="text-[10px] font-medium text-gray-500 mb-0.5">Message</p>
                              <p className="text-xs text-gray-700 line-clamp-2">{quote.message}</p>
                            </div>
                          )}
                          
                          {/* Website Link */}
                          {quote.is_rfq && quote.website_link && (
                            <div className="flex items-center gap-2 text-xs">
                              <Globe className="h-3.5 w-3.5 text-gray-400" />
                              <a href={quote.website_link} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline truncate">
                                {quote.website_link}
                              </a>
                            </div>
                          )}
                          
                          {/* Attached Photos */}
                          {quote.photo_urls && quote.photo_urls.length > 0 && (
                            <div className="flex gap-2 overflow-x-auto pb-1">
                              {quote.photo_urls.slice(0, 4).map((url, idx) => (
                                <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                  <img src={url} alt={`Photo ${idx + 1}`} className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded border border-gray-200 hover:border-primary-400 transition" />
                                </a>
                              ))}
                              {quote.photo_urls.length > 4 && (
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
                                  +{quote.photo_urls.length - 4}
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Regular Quote Notes */}
                          {!quote.is_rfq && quote.notes && (
                            <div className="bg-yellow-50 rounded-lg p-2.5">
                              <p className="text-[10px] font-medium text-yellow-600 mb-0.5">Notes</p>
                              <p className="text-xs text-yellow-800 line-clamp-2">{quote.notes}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">{t('customerCenter.dashboard.sections.complianceDocs')}</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map(doc => (
                  <a
                    key={doc.id}
                    href={doc.file_url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-primary-200 transition group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <Download className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mt-4">{doc.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Artwork Tab */}
          {activeTab === 'artwork' && (
            <div className="space-y-3 md:space-y-6">
              {/* Header - Compact Top Bar */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Artwork Files</h1>
                <label className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition cursor-pointer text-sm">
                  <Upload className="h-4 w-4" />
                  Upload
                  <input
                    type="file"
                    multiple
                    accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.psd,.zip"
                    onChange={handleArtworkUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
                {/* Upload Guidelines - Inline Compact */}
                <details className="bg-gray-100 rounded-lg overflow-hidden">
                  <summary className="px-3 py-2 text-sm text-gray-700 cursor-pointer flex items-center gap-1">
                    <Info className="h-4 w-4" />
                    <span>Guidelines</span>
                  </summary>
                  <div className="px-3 pb-2 text-xs text-gray-600 max-w-xs">
                    <p><strong>Formats:</strong> AI, EPS, PDF, PNG, JPG, TIFF, PSD, ZIP</p>
                    <p><strong>Max:</strong> 250MB | <strong>Specs:</strong> 300 DPI, CMYK, 3mm bleed</p>
                  </div>
                </details>
              </div>

              {/* Upload Error */}
              {uploadError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2 max-w-lg">
                  <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-red-700 whitespace-pre-line break-words">{uploadError}</p>
                  </div>
                  <button onClick={() => setUploadError('')} className="text-red-600 hover:text-red-800 flex-shrink-0">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Upload Success */}
              {uploadSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex gap-2 max-w-lg">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-green-700 break-words">{uploadSuccess}</p>
                  </div>
                  <button onClick={() => setUploadSuccess('')} className="text-green-600 hover:text-green-800 flex-shrink-0">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Uploading Indicator */}
              {uploading && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-2 max-w-md">
                  <RefreshCw className="h-4 w-4 text-blue-600 animate-spin flex-shrink-0" />
                  <p className="text-xs text-blue-700">Uploading artwork files...</p>
                </div>
              )}

              {/* Artwork Status Overview */}
              {artworkStatusItems.length > 0 && (
                <div className="bg-white rounded-xl p-3 md:p-4 border border-gray-100 max-w-2xl">
                  <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">Your Artwork Status</h3>
                  <ArtworkStatusAvatar items={artworkStatusItems} maxVisible={8} size="sm" />
                </div>
              )}

              {/* Artwork Cards - Fixed 300px width */}
              <div className="rounded-xl overflow-hidden">
                {artworks.length === 0 ? (
                  <div className="p-6 md:p-12 text-center bg-white border border-gray-100 rounded-xl">
                    <FileImage className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-gray-300" />
                    <p className="text-sm md:text-base text-gray-500">No artwork files uploaded yet</p>
                    <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">Upload your design files to get started</p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {paginatedArtworks.map(artwork => {
                      const statusInfo = getArtworkStatus(artwork.status)
                      const StatusIcon = statusInfo.icon
                      const isImage = artwork.file_type?.startsWith('image/') || /\.(png|jpg|jpeg|gif|webp)$/i.test(artwork.file_url || '')
                      return (
                        <div key={artwork.id} className="w-[300px] flex-shrink-0 bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition">
                          {/* Card Layout - Clear Structure */}
                          <div className="p-4">
                            {/* Row 1: Image Preview + Info */}
                            <div className="flex items-start gap-3 mb-3">
                              {isImage ? (
                                <ImagePreviewPopover src={artwork.file_url || ''} alt={artwork.name}>
                                  <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden bg-gray-100 cursor-pointer hover:ring-2 hover:ring-purple-400 hover:ring-offset-1 transition-all">
                                    <img 
                                      src={artwork.file_url} 
                                      alt={artwork.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </ImagePreviewPopover>
                              ) : (
                                <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden bg-gray-100">
                                  <div className="w-full h-full flex flex-col items-center justify-center bg-purple-50">
                                    <FileImage className="h-6 w-6 text-purple-400" />
                                    <p className="text-[8px] text-purple-400 mt-0.5">File</p>
                                  </div>
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{artwork.name}</h3>
                                <div className="text-[11px] text-gray-500 mb-2">
                                  <span>{formatFileSize(artwork.file_size)}</span>
                                  <span className="mx-1">•</span>
                                  <span>{new Date(artwork.created_at).toLocaleDateString()}</span>
                                </div>
                                <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded-full ${statusInfo.color}`}>
                                  <StatusIcon className="h-3 w-3" />
                                  {statusInfo.label}
                                </span>
                              </div>
                            </div>
                            
                            {/* Row 2: Action Buttons */}
                            <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
                              <a 
                                href={artwork.file_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition"
                                title="Download"
                              >
                                <Download className="h-4 w-4" />
                              </a>
                              <button
                                onClick={() => {
                                  if (showCommentsArtworkId === artwork.id) {
                                    setShowCommentsArtworkId(null)
                                    setArtworkComments([])
                                  } else {
                                    setShowCommentsArtworkId(artwork.id)
                                    fetchArtworkComments(artwork.id)
                                  }
                                  setNewComment('')
                                }}
                                className={`w-9 h-9 flex items-center justify-center rounded-full transition ${showCommentsArtworkId === artwork.id ? 'bg-primary-200 text-primary-700' : 'bg-primary-100 text-primary-600 hover:bg-primary-200'}`}
                                title="Messages"
                              >
                                <MessageSquare className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => deleteArtwork(artwork.id, artwork.name)}
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition"
                                title="Delete"
                              >
                              <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            
                            {/* Internal admin remark - hidden from customer */}
                            
                            {/* Customer Comment */}
                            {artwork.customer_comment && (
                              <div className="bg-blue-50 rounded-lg p-2.5 mt-3">
                                <p className="text-[10px] font-medium text-blue-600 mb-0.5">Your Comment:</p>
                                <p className="text-xs text-blue-800">{artwork.customer_comment}</p>
                              </div>
                            )}
                            
                            {/* Thread System - Comment Exchange Section */}
                            {showCommentsArtworkId === artwork.id && (
                              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 mt-2">
                                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                                  <MessageSquare className="h-3.5 w-3.5" />
                                  Conversation Thread
                                  <span className="text-[10px] font-normal text-gray-400">({artworkComments.length})</span>
                                </h4>
                                
                                {/* Thread Timeline */}
                                <div className="space-y-2 max-h-52 overflow-y-auto mb-3 pr-1">
                                  {loadingComments ? (
                                    <div className="text-center py-3 text-gray-400 text-xs">
                                      <RefreshCw className="h-3.5 w-3.5 animate-spin mx-auto mb-1" />
                                      Loading...
                                    </div>
                                  ) : artworkComments.length === 0 ? (
                                    <div className="text-center py-4 text-gray-400">
                                      <MessageSquare className="h-6 w-6 mx-auto mb-1 opacity-50" />
                                      <p className="text-xs">No messages yet. Start the conversation!</p>
                                    </div>
                                  ) : (
                                    artworkComments.map(comment => (
                                      <div
                                        key={comment.id}
                                        className={`p-2.5 rounded-lg text-xs ${
                                          comment.is_admin
                                            ? 'bg-primary-50 border-l-3 border-primary-500 ml-3'
                                            : 'bg-white border-l-3 border-green-500 mr-3 shadow-sm'
                                        }`}
                                      >
                                        <div className="flex items-center justify-between mb-1.5">
                                          <div className="flex items-center gap-1.5">
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                                              comment.is_admin ? 'bg-primary-100 text-primary-700' : 'bg-green-100 text-green-700'
                                            }`}>
                                              {comment.is_admin ? '🔵 Admin' : '🟢 You'}
                                            </span>
                                            {comment.message_type === 'file' && (
                                              <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700">
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
                                            className="flex items-center gap-2 p-2 mb-1.5 bg-white rounded border border-gray-200 hover:bg-gray-50 transition"
                                          >
                                            <FileText className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                              <p className="text-[11px] font-medium text-blue-600 truncate">{comment.file_name}</p>
                                              {comment.file_size && (
                                                <p className="text-[10px] text-gray-400">{formatFileSize(comment.file_size)}</p>
                                              )}
                                            </div>
                                            <span className="text-[10px] text-blue-500">↓</span>
                                          </a>
                                        )}
                                        
                                        {/* Message text */}
                                        {comment.message && !comment.message.startsWith('Uploaded:') && (
                                          <p className="text-gray-700 whitespace-pre-wrap">{comment.message}</p>
                                        )}
                                      </div>
                                    ))
                                  )}
                                </div>
                                
                                {/* File upload preview */}
                                {threadFile && (
                                  <div className="flex items-center gap-2 p-2 mb-2 bg-blue-50 rounded border border-blue-200">
                                    <FileText className="h-3.5 w-3.5 text-blue-600" />
                                    <span className="flex-1 text-[11px] text-blue-800 truncate">{threadFile.name}</span>
                                    <button onClick={() => setThreadFile(null)} className="text-blue-600 hover:text-blue-800">
                                      <X className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                )}
                                
                                {/* New Message Input with File Upload */}
                                <div className="space-y-1.5">
                                  <div className="flex gap-1.5">
                                    <input
                                      type="text"
                                      value={newComment}
                                      onChange={(e) => setNewComment(e.target.value)}
                                      onKeyPress={(e) => e.key === 'Enter' && !uploadingThread && addArtworkComment(artwork.id)}
                                      placeholder="Type a message..."
                                      className="flex-1 px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                                      disabled={uploadingThread}
                                    />
                                    <label className="px-2 py-1.5 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 cursor-pointer transition flex items-center">
                                      <Upload className="h-3.5 w-3.5" />
                                      <input
                                        type="file"
                                        className="hidden"
                                        accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.zip,.psd"
                                        onChange={(e) => e.target.files?.[0] && setThreadFile(e.target.files[0])}
                                        disabled={uploadingThread}
                                      />
                                    </label>
                                    <button
                                      onClick={() => addArtworkComment(artwork.id)}
                                      disabled={(!newComment.trim() && !threadFile) || uploadingThread}
                                      className="px-2.5 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center"
                                    >
                                      {uploadingThread ? (
                                        <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                                      ) : (
                                        <Send className="h-3.5 w-3.5" />
                                      )}
                                    </button>
                                  </div>
                                  <p className="text-[9px] text-gray-400">Upload: AI, PDF, PNG, JPG, ZIP, PSD</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Workflow Status Legend - Compact on Mobile */}
              <div className="bg-white rounded-xl border border-gray-100 p-3 md:p-5">
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-4 text-xs md:text-base">Status Legend</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400 flex-shrink-0"></span>
                    <span className="text-[10px] md:text-sm text-gray-600">Pending</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span className="text-[10px] md:text-sm text-gray-600">Review</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400 flex-shrink-0"></span>
                    <span className="text-[10px] md:text-sm text-gray-600">Prepress</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-indigo-400 flex-shrink-0"></span>
                    <span className="text-[10px] md:text-sm text-gray-600">Proof</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400 flex-shrink-0"></span>
                    <span className="text-[10px] md:text-sm text-gray-600">Done</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400 flex-shrink-0"></span>
                    <span className="text-[10px] md:text-sm text-gray-600">Revise</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Saved Items Tab */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Saved Items</h1>
                <Link
                  to="/store"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition"
                >
                  <Plus className="h-4 w-4" /> Add More Items
                </Link>
              </div>

              {savedItems.length === 0 ? (
                <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">No saved items yet</p>
                  <p className="text-sm text-gray-400 mt-2">Items you save from your cart will appear here</p>
                  <Link
                    to="/store"
                    className="inline-flex items-center gap-2 mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <ShoppingCart className="h-4 w-4" /> Browse Products
                  </Link>
                </div>
              ) : (
                <>
                  {/* Saved Items List */}
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="divide-y divide-gray-100">
                      {savedItems.map(item => (
                        <div key={item.id} className="p-5 hover:bg-gray-50 transition">
                          <div className="flex gap-4">
                            {/* Product Image */}
                            {item.image && (
                              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = '/placeholder-product.png'
                                  }}
                                />
                              </div>
                            )}
                            
                            {/* Item Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-4">
                                <div>
                                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                  {item.variant && (
                                    <p className="text-sm text-gray-500 mt-1">
                                      {item.variant.shape} • {item.variant.size} • {item.variant.barrier}
                                    </p>
                                  )}
                                  <div className="flex items-center gap-4 mt-2 text-sm">
                                    <span className="text-gray-500">Qty: <span className="font-medium text-gray-900">{item.quantity.toLocaleString()}</span></span>
                                    <span className="text-gray-500">Unit: <span className="font-medium text-gray-900">${item.unit_price.toFixed(2)}</span></span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-primary-600">${item.total_price.toLocaleString()}</p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    Saved {new Date(item.created_at).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              
                              {/* Action Buttons */}
                              <div className="flex items-center gap-3 mt-4">
                                <button
                                  onClick={() => {
                                    setEditingItem(item)
                                    setEditForm({
                                      quantity: item.quantity,
                                      shape: item.variant?.shape || '',
                                      size: item.variant?.size || '',
                                      barrier: item.variant?.barrier || '',
                                      finish: item.variant?.finish || ''
                                    })
                                  }}
                                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                                >
                                  <Settings className="h-4 w-4" />
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    addToCart({
                                      productId: item.product_id,
                                      name: item.name,
                                      image: item.image,
                                      variant: item.variant,
                                      quantity: item.quantity,
                                      unitPrice: item.unit_price,
                                      totalPrice: item.total_price
                                    })
                                    setIsCartOpen(true)
                                  }}
                                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition"
                                >
                                  <ShoppingCart className="h-4 w-4" />
                                  Add to Cart
                                </button>
                                <button
                                  onClick={async () => {
                                    // Remove item from state and database
                                    setSavedItems(prev => prev.filter(i => i.id !== item.id))
                                    await supabase.from('saved_cart_items').delete().eq('id', item.id)
                                  }}
                                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary & Checkout */}
                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Saved Items</p>
                        <p className="text-lg font-bold text-gray-900">{savedItems.length} items</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Estimated Total</p>
                        <p className="text-2xl font-bold text-primary-600">
                          ${savedItems.reduce((sum, item) => sum + item.total_price, 0).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          // Add all items to cart
                          savedItems.forEach(item => {
                            addToCart({
                              productId: item.product_id,
                              name: item.name,
                              image: item.image,
                              variant: item.variant,
                              quantity: item.quantity,
                              unitPrice: item.unit_price,
                              totalPrice: item.total_price
                            })
                          })
                          setIsCartOpen(true)
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add All to Cart & Checkout
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm('Are you sure you want to remove all saved items?')) {
                            setSavedItems([])
                            await supabase.from('saved_cart_items').delete().eq('user_id', user?.id)
                          }
                        }}
                        className="px-4 py-3 border border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Email</label>
                    <p className="text-gray-900 font-medium">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Member Since</label>
                    <p className="text-gray-900 font-medium">
                      {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
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
                  <p className="text-sm text-gray-500 mt-1">Recover accidentally deleted items</p>
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
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <p className="text-sm text-gray-500">Items in Bin</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{deletedArtworks.length}</p>
              </div>

              {/* Deleted Artworks Section */}
              {deletedArtworks.length > 0 ? (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="px-6 py-4 border-b bg-gray-50">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Image className="h-5 w-5 text-purple-600" />
                      Deleted Artworks ({deletedArtworks.length})
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {deletedArtworks.map(artwork => (
                      <div key={artwork.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Image className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{artwork.name}</p>
                            <p className="text-xs text-gray-500">Deleted {new Date(artwork.deleted_at || '').toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <button
                            onClick={() => restoreArtwork(artwork.id)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition"
                          >
                            <RotateCcw className="h-4 w-4" />
                            Restore
                          </button>
                          <button
                            onClick={() => permanentlyDeleteArtwork(artwork.id, artwork.name)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete Forever
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
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

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedOrder(null)}>
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedOrder.order_number}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-600 transition">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status and Date */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Order Status</p>
                  <span className={`inline-block px-3 py-1.5 text-sm font-medium rounded-lg mt-1 ${statusColors[selectedOrder.status]}`}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Order Date</p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {new Date(selectedOrder.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Tracking Information */}
              {selectedOrder.tracking_number && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Truck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Tracking Information</h3>
                      <div className="space-y-2 text-sm">
                        {selectedOrder.carrier && (
                          <div>
                            <span className="text-gray-500">Carrier: </span>
                            <span className="font-medium text-gray-900">{selectedOrder.carrier}</span>
                          </div>
                        )}
                        <div>
                          <span className="text-gray-500">Tracking Number: </span>
                          <span className="font-medium text-gray-900">{selectedOrder.tracking_number}</span>
                        </div>
                        {selectedOrder.tracking_url && (
                          <a 
                            href={selectedOrder.tracking_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Track Package <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Items */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Order Items</h3>
                <div className="space-y-4">
                  {selectedOrder.items?.map((item: any, i: number) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        {item.image && (
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-white border border-gray-200 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                        
                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-900">{item.name}</h4>
                              
                              {/* Variant Details */}
                              {item.variant && (
                                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                                  {item.variant.size && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Size:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.size}</span>
                                    </div>
                                  )}
                                  {item.variant.shape && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Shape:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.shape}</span>
                                    </div>
                                  )}
                                  {item.variant.finish && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Finish:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.finish}</span>
                                    </div>
                                  )}
                                  {item.variant.barrier && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Barrier:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.barrier}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                              
                              {/* Additional Details (from older order format) */}
                              {(item.size || item.material || item.printing) && (
                                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                                  {item.size && !item.variant?.size && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Size:</span>
                                      <span className="text-gray-900 font-medium">{item.size}</span>
                                    </div>
                                  )}
                                  {item.material && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Material:</span>
                                      <span className="text-gray-900 font-medium">{item.material}</span>
                                    </div>
                                  )}
                                  {item.printing && (
                                    <div className="flex col-span-2">
                                      <span className="text-gray-500 w-16">Printing:</span>
                                      <span className="text-gray-900 font-medium">{item.printing}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                              
                              {/* Features */}
                              {item.features && item.features.length > 0 && (
                                <div className="mt-2">
                                  <span className="text-sm text-gray-500">Features: </span>
                                  <span className="text-sm text-gray-900">{item.features.join(', ')}</span>
                                </div>
                              )}
                              
                              {/* Notes */}
                              {item.notes && (
                                <div className="mt-2 text-sm text-gray-600 italic">
                                  {item.notes}
                                </div>
                              )}
                            </div>
                            
                            {/* Pricing */}
                            <div className="text-right flex-shrink-0">
                              <p className="text-lg font-bold text-gray-900">
                                ${(item.totalPrice || item.total)?.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          
                          {/* Quantity & Unit Price Row */}
                          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-sm">
                            <div className="flex gap-4">
                              <span>
                                <span className="text-gray-500">Qty: </span>
                                <span className="font-semibold text-gray-900">{item.quantity?.toLocaleString()}</span>
                              </span>
                              {(item.unitPrice || item.unit_price) && (
                                <span>
                                  <span className="text-gray-500">Unit Price: </span>
                                  <span className="font-medium text-gray-900">${(item.unitPrice || item.unit_price)?.toFixed(4)}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              {selectedOrder.shipping_address && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{selectedOrder.shipping_address.fullName || selectedOrder.customer_name}</p>
                        <p className="text-gray-600 mt-1">{selectedOrder.shipping_address.address}</p>
                        <p className="text-gray-600">
                          {selectedOrder.shipping_address.city}, {selectedOrder.shipping_address.state} {selectedOrder.shipping_address.zipCode}
                        </p>
                        <p className="text-gray-600">{selectedOrder.shipping_address.country}</p>
                      </div>
                    </div>
                    {selectedOrder.shipping_address.phone && (
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <p className="text-sm text-gray-600">{selectedOrder.shipping_address.phone}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Artwork Section for Order */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Artwork Files</h3>
                  </div>
                  <label className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition cursor-pointer">
                    <Upload className="h-4 w-4" />
                    Upload Artwork
                    <input
                      type="file"
                      multiple
                      accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.psd,.zip"
                      onChange={(e) => handleOrderArtworkUpload(e, selectedOrder.id, selectedOrder.order_number)}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                </div>

                {/* Linked Artworks */}
                {artworks.filter(a => a.order_id === selectedOrder.id || a.order_number === selectedOrder.order_number).length > 0 ? (
                  <div className="space-y-2">
                    {artworks.filter(a => a.order_id === selectedOrder.id || a.order_number === selectedOrder.order_number).map(artwork => (
                      <div key={artwork.id} className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          <FileImage className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{artwork.name}</p>
                            <p className="text-xs text-gray-500">
                              {artwork.status === 'pending_review' && '⏳ Pending Review'}
                              {artwork.status === 'approved' && '✅ Approved'}
                              {artwork.status === 'revision_needed' && '⚠️ Revision Needed'}
                            </p>
                          </div>
                        </div>
                        <a
                          href={artwork.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                        >
                          View
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 bg-gray-50 rounded-xl">
                    <FileImage className="h-10 w-10 mx-auto mb-3 text-gray-300" />
                    <p className="text-sm text-gray-500">No artwork uploaded for this order</p>
                    <p className="text-xs text-gray-400 mt-1">Upload your design files to proceed with production</p>
                  </div>
                )}

                {uploading && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-purple-600">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Uploading artwork...
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">Total Amount</p>
                  <p className="text-2xl font-bold text-primary-600">${selectedOrder.total_amount?.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Revision Comment Modal */}
      {showRevisionModal && selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowRevisionModal(false)}>
          <div className="bg-white rounded-xl max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Leave a Comment</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedArtwork.name}</p>
              </div>
              <button onClick={() => setShowRevisionModal(false)} className="text-gray-400 hover:text-gray-600 transition">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What changes do you need?
                </label>
                <textarea
                  value={revisionComment}
                  onChange={(e) => setRevisionComment(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  placeholder="Describe the changes you'd like to see..."
                />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                <p><strong>Tip:</strong> Be specific about colors, placement, text changes, or any other modifications needed.</p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleSubmitRevision}
                  disabled={!revisionComment.trim()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white font-medium rounded-lg transition"
                >
                  <Send className="h-4 w-4" />
                  Submit Comment
                </button>
                <button
                  onClick={() => setShowRevisionModal(false)}
                  className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Saved Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setEditingItem(null)}>
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Edit Saved Item</h2>
                <p className="text-sm text-gray-500 mt-1">{editingItem.name}</p>
              </div>
              <button onClick={() => setEditingItem(null)} className="text-gray-400 hover:text-gray-600 transition">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              {/* Product Image */}
              {editingItem.image && (
                <div className="flex justify-center">
                  <img 
                    src={editingItem.image} 
                    alt={editingItem.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
              )}
              
              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (units)</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        const currentQty = editForm.quantity
                        let newQty = currentQty
                        // Decrease quantity with smart steps
                        if (currentQty <= 1000) {
                          newQty = Math.max(100, currentQty - 100)
                        } else if (currentQty <= 5000) {
                          newQty = Math.max(100, currentQty - 500)
                        } else {
                          newQty = Math.max(100, currentQty - 1000)
                        }
                        setEditForm(prev => ({ ...prev, quantity: newQty }))
                      }}
                      className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-bold text-xl"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="100"
                      step="100"
                      value={editForm.quantity}
                      onChange={(e) => setEditForm(prev => ({ ...prev, quantity: Math.max(100, parseInt(e.target.value) || 100) }))}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-center font-semibold text-lg"
                    />
                    <button
                      onClick={() => {
                        const currentQty = editForm.quantity
                        let newQty = currentQty
                        // Increase quantity with smart steps
                        if (currentQty < 1000) {
                          newQty = currentQty + 100
                        } else if (currentQty < 5000) {
                          newQty = currentQty + 500
                        } else {
                          newQty = currentQty + 1000
                        }
                        setEditForm(prev => ({ ...prev, quantity: newQty }))
                      }}
                      className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Quick steps: 100 units (below 1K), 500 units (1K-5K), 1000 units (above 5K)
                  </p>
                </div>
              </div>
              
              {/* Shape */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shape</label>
                <select
                  value={editForm.shape}
                  onChange={(e) => setEditForm(prev => ({ ...prev, shape: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="stand-up">Stand Up Pouch</option>
                  <option value="flat-bottom">Flat Bottom Bag</option>
                  <option value="side-gusset">Side Gusset Bag</option>
                  <option value="three-side-seal">Three Side Seal</option>
                  <option value="spout">Spout Pouch</option>
                </select>
              </div>
              
              {/* Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <select
                  value={editForm.size}
                  onChange={(e) => setEditForm(prev => ({ ...prev, size: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="80x120mm">80 x 120mm (Small)</option>
                  <option value="100x150mm">100 x 150mm</option>
                  <option value="120x200mm">120 x 200mm</option>
                  <option value="150x250mm">150 x 250mm</option>
                  <option value="180x280mm">180 x 280mm (Large)</option>
                  <option value="100x300mm">100 x 300mm (Tall)</option>
                  <option value="130x180mm">130 x 180mm</option>
                </select>
              </div>
              
              {/* Barrier */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Barrier Material</label>
                <select
                  value={editForm.barrier}
                  onChange={(e) => setEditForm(prev => ({ ...prev, barrier: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="clear">Clear</option>
                  <option value="kraft">Kraft Paper</option>
                  <option value="foil">Foil / Metalised</option>
                  <option value="white">White Matte</option>
                </select>
              </div>
              
              {/* Finish */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Finish</label>
                <select
                  value={editForm.finish}
                  onChange={(e) => setEditForm(prev => ({ ...prev, finish: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="glossy">Glossy</option>
                  <option value="matte">Matte</option>
                  <option value="soft-touch">Soft Touch</option>
                </select>
              </div>
              
              {/* Estimated Price */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Estimated Unit Price:</span>
                  <span className="font-semibold text-gray-900">${editingItem.unit_price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Estimated Total:</span>
                  <span className="text-xl font-bold text-primary-600">
                    ${(editingItem.unit_price * editForm.quantity).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2">* Final price may vary based on options</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={async () => {
                    const updatedItem = {
                      ...editingItem,
                      quantity: editForm.quantity,
                      variant: {
                        shape: editForm.shape,
                        size: editForm.size,
                        barrier: editForm.barrier,
                        finish: editForm.finish
                      },
                      total_price: editingItem.unit_price * editForm.quantity,
                      updated_at: new Date().toISOString()
                    }
                    
                    // Update in database
                    await supabase.from('saved_cart_items').update({
                      quantity: editForm.quantity,
                      variant: updatedItem.variant,
                      total_price: updatedItem.total_price,
                      updated_at: updatedItem.updated_at
                    }).eq('id', editingItem.id)
                    fetchData()
                    
                    setEditingItem(null)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition"
                >
                  <CheckCircle className="h-5 w-5" />
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Proof Review Modal */}
      {showProofReviewModal && selectedArtwork && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto my-4">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Press Proof Review & Approval</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedArtwork.name}</p>
                {selectedArtwork.artwork_code && (
                  <span className="inline-block mt-1 font-mono text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                    {selectedArtwork.artwork_code}
                  </span>
                )}
              </div>
              <button 
                onClick={() => setShowProofReviewModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Company Header */}
              <div className="bg-gray-900 text-white rounded-xl p-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg">AP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">ACHIEVE PACK</h3>
                    <p className="text-gray-300 text-sm">Premium Flexible Packaging Solutions</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-4 w-4 text-gray-400" />
                    <a href="mailto:ryan@achievepack.com" className="hover:text-primary-300">ryan@achievepack.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <a href="https://www.achievepack.com" target="_blank" className="hover:text-primary-300">www.achievepack.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>+852 6970 4411</span>
                  </div>
                </div>
              </div>

              {/* Download Proof Button */}
              {selectedArtwork.proof_url && (
                <div className="flex justify-center">
                  <a 
                    href={selectedArtwork.proof_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg text-lg"
                  >
                    <Download className="h-6 w-6" />
                    Download Proof PDF to Review
                  </a>
                </div>
              )}

              {/* Important Notices */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Important Notices - Please Read
                </h3>
                <ul className="text-sm text-amber-800 space-y-2 list-disc list-inside">
                  <li>This proof is an exact duplicate of the original production for this job.</li>
                  <li>All copy, punctuation and spelling has been proofread by our team.</li>
                  <li><strong>We will NOT be responsible for any errors after your approval.</strong></li>
                  <li>Colors shown on screen may differ from the final printed result.</li>
                  <li>Please ensure all regulatory and legal requirements are met for your product.</li>
                </ul>
              </div>
              
              {/* Verification Checklist */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary-600" />
                  Verification Checklist
                </h3>
                <p className="text-sm text-gray-600 mb-4">Click each item to confirm you have verified it:</p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { key: 'bag_size', label: 'Bag Size / Dimensions', desc: 'Tolerance: ±2mm to ±4mm' },
                    { key: 'product_weight', label: 'Product Weight / Net Content', desc: 'grams, oz, ml' },
                    { key: 'colors', label: 'Colors (CMYK)', desc: 'Tolerance: ±8% to ±15%' },
                    { key: 'text_spelling', label: 'Text & Spelling', desc: 'All copy accurate' },
                    { key: 'logo_graphics', label: 'Logo & Graphics', desc: 'Position and quality' },
                    { key: 'upc_barcode', label: 'UPC / Barcode', desc: 'Number and scannability' },
                    { key: 'roll_direction', label: 'Roll / Unwind Direction', desc: 'For machine filling' },
                    { key: 'closure_type', label: 'Closure Type', desc: 'Zipper, valve, seal' },
                    { key: 'add_ons', label: 'Add-ons', desc: 'Tear notch, hang hole, etc' },
                    { key: 'quantity', label: 'Quantity Confirmed', desc: 'Check quantity tolerance' }
                  ].map(item => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setProofChecklist(prev => ({ 
                        ...prev, 
                        [item.key]: !prev[item.key as keyof typeof prev] 
                      }))}
                      className={`flex items-start gap-3 p-3 rounded-lg border-2 transition text-left ${
                        proofChecklist[item.key as keyof typeof proofChecklist]
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {proofChecklist[item.key as keyof typeof proofChecklist] ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-300" />
                        )}
                      </div>
                      <div>
                        <p className={`font-medium text-sm ${
                          proofChecklist[item.key as keyof typeof proofChecklist] 
                            ? 'text-green-800' 
                            : 'text-gray-700'
                        }`}>{item.label}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Items verified:</span>
                    <span className={`font-bold ${
                      Object.values(proofChecklist).filter(Boolean).length === 10 
                        ? 'text-green-600' 
                        : 'text-gray-600'
                    }`}>
                      {Object.values(proofChecklist).filter(Boolean).length} / 10
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{ width: `${(Object.values(proofChecklist).filter(Boolean).length / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Terms & Conditions - Collapsible */}
              <details className="bg-gray-50 border border-gray-200 rounded-xl">
                <summary className="p-5 cursor-pointer font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Terms & Conditions (Click to expand)
                </summary>
                <div className="px-5 pb-5 space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Production Lead Time</h4>
                    <p>10 working days (±1-2 days) from receipt of signed PO, deposit, certificates, authorization letter, and approved artwork.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Color Tolerances</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Kraft Paper: ±15%</li>
                      <li>White Paper: ±10%</li>
                      <li>Plastic/Laminated: ±8%</li>
                      <li>Specialty Materials: ±12%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quantity Tolerances</h4>
                    <p>100-1,000: ±50% | 1,001-5,000: ±30% | 5,001-10,000: ±20% | 10,001-100,000: ±10% | &gt;100,000: ±5%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cancellations</h4>
                    <p>Before production: 10% fee. No cancellations after production starts.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Intellectual Property</h4>
                    <p>Customer warrants artwork doesn't infringe IP rights and is liable for all infringement claims.</p>
                  </div>
                </div>
              </details>

              {/* Approval Decision */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4">Your Decision</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setApprovalType('approve_as_is')}
                    className={`p-5 rounded-xl border-2 transition text-center ${
                      approvalType === 'approve_as_is'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 bg-white hover:border-green-300'
                    }`}
                  >
                    <CheckCircle className={`h-12 w-12 mx-auto mb-3 ${
                      approvalType === 'approve_as_is' ? 'text-green-600' : 'text-gray-300'
                    }`} />
                    <p className="font-bold text-lg">APPROVE</p>
                    <p className="text-sm text-gray-500 mt-1">Ready for production</p>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setApprovalType('not_approved')}
                    className={`p-5 rounded-xl border-2 transition text-center ${
                      approvalType === 'not_approved'
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 bg-white hover:border-red-300'
                    }`}
                  >
                    <X className={`h-12 w-12 mx-auto mb-3 ${
                      approvalType === 'not_approved' ? 'text-red-600' : 'text-gray-300'
                    }`} />
                    <p className="font-bold text-lg">REQUEST CHANGES</p>
                    <p className="text-sm text-gray-500 mt-1">Need modifications</p>
                  </button>
                </div>
              </div>
              
              {/* Changes Notes (if not approved) */}
              {approvalType === 'not_approved' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <label className="block font-bold text-red-800 mb-2">
                    What changes are needed?
                  </label>
                  <textarea
                    value={approvalNotes}
                    onChange={(e) => setApprovalNotes(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Please describe in detail what needs to be changed..."
                  />
                </div>
              )}
              
              {/* Customer Acknowledgment & Signature */}
              <div className="border-2 border-gray-300 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <PenLine className="h-5 w-5" />
                  Customer Acknowledgment & Signature
                </h3>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700">
                  <p className="font-semibold mb-2">By signing below, I acknowledge and agree that:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>I have reviewed the proof and all items in the checklist above</li>
                    <li>I accept the terms and conditions outlined</li>
                    <li>I understand the color, size, and quantity tolerances</li>
                    <li>I accept responsibility for any errors not identified before approval</li>
                    <li>I authorize ACHIEVE PACK to proceed with production upon approval</li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={approverSignature}
                      onChange={(e) => setApproverSignature(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={approverCompany}
                      onChange={(e) => setApproverCompany(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="text"
                      value={new Date().toLocaleDateString()}
                      disabled
                      className="w-full px-4 py-3 border border-gray-200 bg-gray-100 rounded-lg text-gray-600"
                    />
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                onClick={async () => {
                  if (!approvalType) {
                    alert('Please select your decision')
                    return
                  }
                  if (!approverSignature.trim()) {
                    alert('Please enter your name to sign')
                    return
                  }
                  if (approvalType === 'not_approved' && !approvalNotes.trim()) {
                    alert('Please describe what changes are needed')
                    return
                  }
                  if (Object.values(proofChecklist).filter(Boolean).length < 10) {
                    alert('Please verify all checklist items before submitting')
                    return
                  }
                  
                  const newStatus = approvalType === 'approve_as_is' ? 'approved' : 'revision_needed'
                  
                  const { error } = await supabase
                    .from('artwork_files')
                    .update({
                      status: newStatus,
                      approval_type: approvalType,
                      checklist_verified: proofChecklist,
                      approver_signature: approverSignature,
                      approver_company: approverCompany || null,
                      approved_date: new Date().toISOString().split('T')[0],
                      approval_notes: approvalNotes || null,
                      customer_comment: approvalNotes || selectedArtwork.customer_comment,
                      revision_count: approvalType === 'not_approved' 
                        ? (selectedArtwork.revision_count || 0) + 1 
                        : selectedArtwork.revision_count,
                      updated_at: new Date().toISOString()
                    })
                    .eq('id', selectedArtwork.id)
                  
                  if (error) {
                    console.error('Error updating artwork:', error)
                    alert('Failed to submit. Please try again.')
                    return
                  }
                  
                  setShowProofReviewModal(false)
                  setSelectedArtwork(null)
                  fetchData()
                }}
                disabled={!approvalType || !approverSignature.trim() || 
                  (approvalType === 'not_approved' && !approvalNotes.trim()) ||
                  Object.values(proofChecklist).filter(Boolean).length < 10}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-bold text-lg rounded-xl transition ${
                  approvalType && approverSignature.trim() && 
                  Object.values(proofChecklist).filter(Boolean).length === 10 &&
                  (approvalType === 'approve_as_is' || approvalNotes.trim())
                    ? approvalType === 'approve_as_is'
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                      : 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {Object.values(proofChecklist).filter(Boolean).length < 10 ? (
                  `Please verify all ${10 - Object.values(proofChecklist).filter(Boolean).length} remaining items`
                ) : !approverSignature.trim() ? (
                  'Please enter your name to sign'
                ) : approvalType === 'approve_as_is' ? (
                  <>
                    <CheckCircle className="h-6 w-6" />
                    Confirm Approval - Send to Production
                  </>
                ) : approvalType === 'not_approved' ? (
                  <>
                    <Send className="h-6 w-6" />
                    Submit Change Request
                  </>
                ) : (
                  'Please select your decision above'
                )}
              </button>

              {/* Contact Footer */}
              <div className="text-center text-sm text-gray-500 pt-4 border-t">
                <p>For inquiries or clarifications, contact ACHIEVE PACK at{' '}
                  <a href="mailto:ryan@achievepack.com" className="text-primary-600 hover:underline">
                    ryan@achievepack.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around py-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition ${activeTab === 'dashboard' ? 'text-primary-600' : 'text-gray-500'}`}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition relative ${activeTab === 'orders' ? 'text-primary-600' : 'text-gray-500'}`}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-[10px] font-medium">Orders</span>
            {activeOrders > 0 && (
              <span className="absolute -top-0.5 right-1 w-4 h-4 bg-primary-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {activeOrders}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('artwork')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition ${activeTab === 'artwork' ? 'text-primary-600' : 'text-gray-500'}`}
          >
            <Image className="h-5 w-5" />
            <span className="text-[10px] font-medium">Artwork</span>
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition relative ${activeTab === 'quotes' ? 'text-primary-600' : 'text-gray-500'}`}
          >
            <FileCheck className="h-5 w-5" />
            <span className="text-[10px] font-medium">Quotes</span>
            {pendingQuotes > 0 && (
              <span className="absolute -top-0.5 right-1 w-4 h-4 bg-yellow-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {pendingQuotes}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition ${activeTab === 'settings' ? 'text-primary-600' : 'text-gray-500'}`}
          >
            <Settings className="h-5 w-5" />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default DashboardPage
