import React, { useState, useEffect, useRef } from 'react'
import { 
  Plus, Globe, Eye, Edit, Trash2, Users, Settings, Save, 
  RefreshCw, Check, X, Upload, ExternalLink, Search, 
  MoreVertical, Copy, Lock, Unlock, UserPlus, Mail,
  Type, Image as ImageIcon, Loader2, ChevronRight, ArrowLeft
} from 'lucide-react'
import { supabase, MiniSite, MiniSiteAccess, MiniSiteContent, Profile } from '../../lib/supabase'

// Default content template
const DEFAULT_CONTENT: MiniSiteContent = {
  brand: {
    name: 'My Brand',
    tagline: 'Your Tagline Here',
    taglineWords: ['Your', 'Tagline', 'Here'],
    description: 'Describe your brand and what makes it special.',
    ctaText: 'Shop Now',
    ctaLink: '#shop'
  },
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
    overlayOpacity: 0.4
  },
  marquee: {
    text: 'NEW * FRESH ARRIVALS * NEW',
    speed: 30
  },
  products: [
    {
      id: '1',
      name: 'Product 1',
      price: 29.00,
      type: 'Category',
      origin: 'Origin',
      process: 'Process',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80'
    }
  ],
  collections: [
    {
      id: 'collection1',
      name: 'Collection 1',
      logo: 'COLLECTION',
      description: 'Description of this collection.',
      bgColor: 'from-amber-900 to-amber-950',
      images: ['https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80']
    }
  ],
  mission: {
    title: 'Our Mission',
    content: 'Share your mission and values here.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80',
    coordinates: '0° N — 0° E'
  },
  subscription: {
    title: 'Never Run Out',
    steps: ['Step 1', 'Step 2', 'Step 3'],
    discount: 'Save up to 15% on every order'
  }
}

// Image Picker Modal
const ImagePickerModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  onSelect: (url: string) => void
  currentImage?: string
}> = ({ isOpen, onClose, onSelect, currentImage }) => {
  const [customUrl, setCustomUrl] = useState(currentImage || '')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const unsplashImages = [
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=800&q=80',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80'
  ]

  useEffect(() => {
    setCustomUrl(currentImage || '')
    setUploadError('')
  }, [currentImage, isOpen])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image must be less than 5MB')
      return
    }

    setIsUploading(true)
    setUploadError('')

    try {
      const ext = file.name.split('.').pop() || 'jpg'
      const fileName = `mini-sites/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`

      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from('artworks')
        .upload(fileName, file, { cacheControl: '3600', upsert: false, contentType: file.type })

      if (uploadErr) throw new Error(uploadErr.message)

      const { data: urlData } = supabase.storage
        .from('artworks')
        .getPublicUrl(uploadData?.path || fileName)

      onSelect(urlData.publicUrl)
      onClose()
    } catch (error: any) {
      setUploadError(error.message || 'Failed to upload')
    } finally {
      setIsUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Select Image</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[calc(85vh-60px)]">
          {/* Upload */}
          <div className="mb-4 p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary-400 transition-colors">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" id="cms-image-upload" />
            <label htmlFor="cms-image-upload" className="flex flex-col items-center justify-center cursor-pointer py-3">
              {isUploading ? (
                <><Loader2 className="w-8 h-8 text-primary-500 animate-spin mb-2" /><span className="text-sm text-gray-600">Uploading...</span></>
              ) : (
                <><Upload className="w-8 h-8 text-gray-400 mb-2" /><span className="text-sm font-medium text-gray-700">Click to upload</span><span className="text-xs text-gray-500 mt-1">JPG, PNG, WebP (max 5MB)</span></>
              )}
            </label>
            {uploadError && <p className="text-sm text-red-600 text-center mt-2">{uploadError}</p>}
          </div>

          {/* URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Or paste URL</label>
            <div className="flex gap-2">
              <input type="url" value={customUrl} onChange={(e) => setCustomUrl(e.target.value)} placeholder="https://..." className="flex-1 px-3 py-2 border rounded-lg text-sm" />
              <button onClick={() => { if (customUrl) { onSelect(customUrl); onClose() } }} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">Use</button>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gallery</label>
            <div className="grid grid-cols-4 gap-2">
              {unsplashImages.map((url, i) => (
                <button key={i} onClick={() => { onSelect(url); onClose() }} className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${currentImage === url ? 'border-primary-500' : 'border-transparent'}`}>
                  <img src={url} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Access Management Modal
const AccessModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  site: MiniSite | null
  customers: Profile[]
  onUpdate: () => void
}> = ({ isOpen, onClose, site, customers, onUpdate }) => {
  const [accessList, setAccessList] = useState<MiniSiteAccess[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState('')
  const [selectedRole, setSelectedRole] = useState<'viewer' | 'editor'>('viewer')
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (isOpen && site) {
      fetchAccess()
    }
  }, [isOpen, site])

  const fetchAccess = async () => {
    if (!site) return
    setLoading(true)
    try {
      const { data } = await supabase
        .from('mini_site_access')
        .select('*')
        .eq('site_id', site.id)
        .order('created_at', { ascending: false })
      
      // Get user emails
      if (data && data.length > 0) {
        const userIds = data.map(a => a.user_id)
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, email, full_name')
          .in('id', userIds)
        
        const enrichedData = data.map(access => {
          const profile = profiles?.find(p => p.id === access.user_id)
          return { ...access, user_email: profile?.email, user_name: profile?.full_name }
        })
        setAccessList(enrichedData)
      } else {
        setAccessList([])
      }
    } catch (error) {
      console.error('Failed to fetch access:', error)
    }
    setLoading(false)
  }

  const grantAccess = async () => {
    if (!selectedUser || !site) return
    try {
      await supabase.from('mini_site_access').insert({
        site_id: site.id,
        user_id: selectedUser,
        role: selectedRole,
        can_edit: selectedRole === 'editor',
        status: 'active'
      })
      setSelectedUser('')
      fetchAccess()
      onUpdate()
    } catch (error) {
      console.error('Failed to grant access:', error)
    }
  }

  const revokeAccess = async (accessId: string) => {
    try {
      await supabase.from('mini_site_access').delete().eq('id', accessId)
      fetchAccess()
      onUpdate()
    } catch (error) {
      console.error('Failed to revoke access:', error)
    }
  }

  const filteredCustomers = customers.filter(c => 
    !accessList.some(a => a.user_id === c.id) &&
    (c.email.toLowerCase().includes(search.toLowerCase()) || 
     c.full_name?.toLowerCase().includes(search.toLowerCase()))
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Manage Access</h3>
            <p className="text-sm text-gray-500">{site?.name}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[calc(85vh-120px)]">
          {/* Add User */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="text-sm font-medium mb-3">Add User Access</h4>
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
                />
              </div>
              {search && filteredCustomers.length > 0 && (
                <div className="max-h-32 overflow-y-auto border rounded-lg divide-y">
                  {filteredCustomers.slice(0, 5).map(c => (
                    <button
                      key={c.id}
                      onClick={() => { setSelectedUser(c.id); setSearch(c.email) }}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${selectedUser === c.id ? 'bg-primary-50' : ''}`}
                    >
                      <div className="font-medium">{c.full_name || c.email}</div>
                      {c.full_name && <div className="text-xs text-gray-500">{c.email}</div>}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as 'viewer' | 'editor')}
                  className="px-3 py-2 border rounded-lg text-sm"
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                </select>
                <button
                  onClick={grantAccess}
                  disabled={!selectedUser}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Grant Access
                </button>
              </div>
            </div>
          </div>

          {/* Access List */}
          <div>
            <h4 className="text-sm font-medium mb-3">Current Access ({accessList.length})</h4>
            {loading ? (
              <div className="text-center py-8"><RefreshCw className="w-6 h-6 animate-spin mx-auto text-gray-400" /></div>
            ) : accessList.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-4">No users have access yet</p>
            ) : (
              <div className="space-y-2">
                {accessList.map(access => (
                  <div key={access.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{access.user_name || access.user_email}</div>
                      {access.user_name && <div className="text-xs text-gray-500">{access.user_email}</div>}
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${access.role === 'editor' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                          {access.role}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${access.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {access.status}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => revokeAccess(access.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      title="Revoke Access"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main CMS Component
const MiniSiteCMS: React.FC = () => {
  const [sites, setSites] = useState<MiniSite[]>([])
  const [customers, setCustomers] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSite, setSelectedSite] = useState<MiniSite | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [editContent, setEditContent] = useState<MiniSiteContent>(DEFAULT_CONTENT)
  const [editMeta, setEditMeta] = useState<{ name: string; slug: string; description: string; is_public: boolean; status: 'draft' | 'published' | 'archived' }>({ name: '', slug: '', description: '', is_public: false, status: 'draft' })
  const [activeSection, setActiveSection] = useState<'brand' | 'hero' | 'products' | 'collections' | 'mission' | 'subscription'>('brand')
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [imagePickerOpen, setImagePickerOpen] = useState(false)
  const [imagePickerTarget, setImagePickerTarget] = useState<string>('')
  const [accessModalOpen, setAccessModalOpen] = useState(false)
  const [accessModalSite, setAccessModalSite] = useState<MiniSite | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch sites
      const { data: sitesData } = await supabase
        .from('mini_sites')
        .select('*')
        .is('deleted_at', null)
        .order('created_at', { ascending: false })
      
      setSites(sitesData || [])

      // Fetch customers for access management
      const { data: profilesData } = await supabase
        .from('profiles')
        .select('*')
        .order('email')
      
      setCustomers(profilesData || [])
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
    setLoading(false)
  }

  const createSite = async () => {
    const slug = `site-${Date.now()}`
    setIsCreating(true)
    setErrorMessage(null)
    try {
      const { data, error } = await supabase
        .from('mini_sites')
        .insert({
          name: 'New Website',
          slug,
          description: '',
          template: 'coffee-shop',
          status: 'draft',
          is_public: false,
          content: DEFAULT_CONTENT
        })
        .select()
        .single()

      if (error) {
        // Check if table doesn't exist
        if (error.code === '42P01' || error.message?.includes('does not exist')) {
          setErrorMessage('Database table not found. Please run the migration SQL in Supabase SQL Editor first.')
        } else if (error.code === '42501' || error.message?.includes('permission')) {
          setErrorMessage('Permission denied. Please check RLS policies.')
        } else {
          setErrorMessage(`Failed to create site: ${error.message}`)
        }
        throw error
      }
      if (data) {
        setSites(prev => [data, ...prev])
        openEditor(data)
      }
    } catch (error: any) {
      console.error('Failed to create site:', error)
    } finally {
      setIsCreating(false)
    }
  }

  const openEditor = (site: MiniSite) => {
    setSelectedSite(site)
    setEditContent(site.content || DEFAULT_CONTENT)
    setEditMeta({
      name: site.name,
      slug: site.slug,
      description: site.description || '',
      is_public: site.is_public,
      status: site.status
    })
    setEditMode(true)
    setActiveSection('brand')
  }

  const closeEditor = () => {
    setSelectedSite(null)
    setEditMode(false)
  }

  const saveSite = async () => {
    if (!selectedSite) return
    setIsSaving(true)
    try {
      const { error } = await supabase
        .from('mini_sites')
        .update({
          name: editMeta.name,
          slug: editMeta.slug,
          description: editMeta.description,
          is_public: editMeta.is_public,
          status: editMeta.status,
          content: editContent,
          published_at: editMeta.status === 'published' ? new Date().toISOString() : selectedSite.published_at
        })
        .eq('id', selectedSite.id)

      if (error) throw error

      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 3000)
      
      // Update local state
      setSites(prev => prev.map(s => 
        s.id === selectedSite.id 
          ? { ...s, name: editMeta.name, slug: editMeta.slug, description: editMeta.description, is_public: editMeta.is_public, status: editMeta.status, content: editContent }
          : s
      ))
      setSelectedSite(prev => prev ? { ...prev, name: editMeta.name, slug: editMeta.slug, content: editContent } : null)
    } catch (error) {
      console.error('Failed to save:', error)
      setSaveStatus('error')
    }
    setIsSaving(false)
  }

  const deleteSite = async (site: MiniSite) => {
    if (!window.confirm(`Delete "${site.name}"? This cannot be undone.`)) return
    try {
      await supabase.from('mini_sites').update({ deleted_at: new Date().toISOString() }).eq('id', site.id)
      setSites(prev => prev.filter(s => s.id !== site.id))
      if (selectedSite?.id === site.id) closeEditor()
    } catch (error) {
      console.error('Failed to delete:', error)
    }
  }

  const duplicateSite = async (site: MiniSite) => {
    try {
      const { data, error } = await supabase
        .from('mini_sites')
        .insert({
          name: `${site.name} (Copy)`,
          slug: `${site.slug}-copy-${Date.now()}`,
          description: site.description,
          template: site.template,
          status: 'draft',
          is_public: false,
          content: site.content
        })
        .select()
        .single()

      if (error) throw error
      if (data) setSites(prev => [data, ...prev])
    } catch (error) {
      console.error('Failed to duplicate:', error)
    }
  }

  const updateContent = (path: string, value: any) => {
    const paths = path.split('.')
    setEditContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev))
      let current: any = newContent
      for (let i = 0; i < paths.length - 1; i++) {
        current = current[paths[i]]
      }
      current[paths[paths.length - 1]] = value
      return newContent
    })
  }

  const openImagePicker = (path: string) => {
    setImagePickerTarget(path)
    setImagePickerOpen(true)
  }

  const handleImageSelect = (url: string) => {
    if (imagePickerTarget) {
      updateContent(imagePickerTarget, url)
    }
  }

  const getCurrentImage = () => {
    if (!imagePickerTarget) return ''
    const paths = imagePickerTarget.split('.')
    let current: any = editContent
    for (const path of paths) {
      current = current?.[path]
    }
    return current || ''
  }

  const openAccessModal = (site: MiniSite) => {
    setAccessModalSite(site)
    setAccessModalOpen(true)
  }

  const sections = [
    { id: 'brand', label: 'Brand', icon: Type },
    { id: 'hero', label: 'Hero', icon: ImageIcon },
    { id: 'products', label: 'Products', icon: Globe },
    { id: 'collections', label: 'Collections', icon: ImageIcon },
    { id: 'mission', label: 'Mission', icon: Type },
    { id: 'subscription', label: 'Subscription', icon: Type }
  ]

  // Sites List View
  if (!editMode) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mini Sites CMS</h1>
            <p className="text-sm text-gray-500 mt-1">Create and manage demo websites for customers</p>
          </div>
          <button
            onClick={createSite}
            disabled={isCreating}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm disabled:opacity-50"
          >
            {isCreating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            {isCreating ? 'Creating...' : 'Create New Site'}
          </button>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
            <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Error</p>
              <p className="text-sm">{errorMessage}</p>
              {errorMessage.includes('migration') && (
                <a 
                  href="https://supabase.com/dashboard/project/ofobzjpexljkrqsgdgua/sql/new" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-red-800 underline mt-1 inline-block"
                >
                  Open Supabase SQL Editor
                </a>
              )}
            </div>
            <button onClick={() => setErrorMessage(null)} className="ml-auto text-red-500 hover:text-red-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Sites Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        ) : sites.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border">
            <Globe className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sites yet</h3>
            <p className="text-gray-500 mb-4">Create your first mini website</p>
            <button 
              onClick={createSite} 
              disabled={isCreating}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 inline-flex items-center gap-2"
            >
              {isCreating ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {isCreating ? 'Creating...' : 'Create Site'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sites.map(site => (
              <div key={site.id} className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition">
                {/* Preview Image */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={site.content?.hero?.backgroundImage || 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80'}
                    alt={site.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      site.status === 'published' ? 'bg-green-500 text-white' :
                      site.status === 'draft' ? 'bg-yellow-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {site.status}
                    </span>
                    {site.is_public ? (
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500 text-white flex items-center gap-1">
                        <Unlock className="w-3 h-3" /> Public
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-600 text-white flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Private
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{site.name}</h3>
                  <p className="text-sm text-gray-500 truncate">{site.description || 'No description'}</p>
                  <p className="text-xs text-gray-400 mt-1">/{site.slug}</p>
                </div>

                {/* Actions */}
                <div className="px-4 pb-4 flex gap-2">
                  <button
                    onClick={() => openEditor(site)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <a
                    href={`/free-service/${site.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => openAccessModal(site)}
                    className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                    title="Manage Access"
                  >
                    <Users className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => duplicateSite(site)}
                    className="flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                    title="Duplicate"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteSite(site)}
                    className="flex items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-sm"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <AccessModal
          isOpen={accessModalOpen}
          onClose={() => setAccessModalOpen(false)}
          site={accessModalSite}
          customers={customers}
          onUpdate={fetchData}
        />
      </div>
    )
  }

  // Editor View
  return (
    <div className="space-y-6">
      {/* Editor Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button onClick={closeEditor} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{editMeta.name}</h1>
            <p className="text-sm text-gray-500">/{editMeta.slug}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`/free-service/${selectedSite?.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            <Eye className="w-4 h-4" />
            Preview
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => openAccessModal(selectedSite!)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            <Users className="w-4 h-4" />
            Access
          </button>
          <button
            onClick={saveSite}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm disabled:opacity-50"
          >
            {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : saveStatus === 'success' ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {isSaving ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : 'Save'}
          </button>
        </div>
      </div>

      {/* Editor Main */}
      <div className="grid grid-cols-12 gap-6">
        {/* Settings Sidebar */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          {/* Site Settings */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-medium mb-3 flex items-center gap-2"><Settings className="w-4 h-4" /> Settings</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Site Name</label>
                <input type="text" value={editMeta.name} onChange={(e) => setEditMeta(prev => ({ ...prev, name: e.target.value }))} className="w-full px-3 py-2 border rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">URL Slug</label>
                <input type="text" value={editMeta.slug} onChange={(e) => setEditMeta(prev => ({ ...prev, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') }))} className="w-full px-3 py-2 border rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Status</label>
                <select value={editMeta.status} onChange={(e) => setEditMeta(prev => ({ ...prev, status: e.target.value as any }))} className="w-full px-3 py-2 border rounded-lg text-sm">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={editMeta.is_public} onChange={(e) => setEditMeta(prev => ({ ...prev, is_public: e.target.checked }))} className="rounded" />
                <span className="text-sm">Public (no login required)</span>
              </label>
            </div>
          </div>

          {/* Section Nav */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-medium mb-3">Content Sections</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id as any)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm transition ${
                    activeSection === section.id ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
                  <ChevronRight className={`w-4 h-4 ml-auto transition ${activeSection === section.id ? 'rotate-90' : ''}`} />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Editor */}
        <div className="col-span-12 md:col-span-9">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            {/* Brand Section */}
            {activeSection === 'brand' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-3">Brand Settings</h2>
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
                    <input type="text" value={editContent.brand.name} onChange={(e) => updateContent('brand.name', e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tagline Words (one per line)</label>
                    <textarea value={editContent.brand.taglineWords.join('\n')} onChange={(e) => updateContent('brand.taglineWords', e.target.value.split('\n').filter(w => w.trim()))} rows={3} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea value={editContent.brand.description} onChange={(e) => updateContent('brand.description', e.target.value)} rows={2} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CTA Button</label>
                      <input type="text" value={editContent.brand.ctaText} onChange={(e) => updateContent('brand.ctaText', e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CTA Link</label>
                      <input type="text" value={editContent.brand.ctaLink} onChange={(e) => updateContent('brand.ctaLink', e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hero Section */}
            {activeSection === 'hero' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-3">Hero Section</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
                  <div className="flex gap-4 items-start">
                    <div className="w-48 h-32 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500" onClick={() => openImagePicker('hero.backgroundImage')}>
                      <img src={editContent.hero.backgroundImage} alt="Hero" className="w-full h-full object-cover" />
                    </div>
                    <button onClick={() => openImagePicker('hero.backgroundImage')} className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm">
                      <Upload className="w-4 h-4" /> Change
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Overlay: {Math.round(editContent.hero.overlayOpacity * 100)}%</label>
                  <input type="range" min="0" max="1" step="0.1" value={editContent.hero.overlayOpacity} onChange={(e) => updateContent('hero.overlayOpacity', parseFloat(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Marquee Text</label>
                  <input type="text" value={editContent.marquee.text} onChange={(e) => updateContent('marquee.text', e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                </div>
              </div>
            )}

            {/* Products Section */}
            {activeSection === 'products' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-3">Products</h2>
                {editContent.products.map((product, index) => (
                  <div key={product.id} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500 flex-shrink-0" onClick={() => openImagePicker(`products.${index}.image`)}>
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-2">
                        <input type="text" value={product.name} onChange={(e) => updateContent(`products.${index}.name`, e.target.value)} placeholder="Name" className="px-3 py-2 border rounded-lg text-sm" />
                        <input type="number" value={product.price} onChange={(e) => updateContent(`products.${index}.price`, parseFloat(e.target.value) || 0)} placeholder="Price" className="px-3 py-2 border rounded-lg text-sm" />
                        <input type="text" value={product.type} onChange={(e) => updateContent(`products.${index}.type`, e.target.value)} placeholder="Type" className="px-3 py-2 border rounded-lg text-sm" />
                        <input type="text" value={product.origin} onChange={(e) => updateContent(`products.${index}.origin`, e.target.value)} placeholder="Origin" className="px-3 py-2 border rounded-lg text-sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Collections Section */}
            {activeSection === 'collections' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-3">Collections</h2>
                {editContent.collections.map((collection, index) => (
                  <div key={collection.id} className="p-4 border rounded-lg space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" value={collection.name} onChange={(e) => updateContent(`collections.${index}.name`, e.target.value)} placeholder="Name" className="px-3 py-2 border rounded-lg text-sm" />
                      <input type="text" value={collection.logo} onChange={(e) => updateContent(`collections.${index}.logo`, e.target.value)} placeholder="Logo Text" className="px-3 py-2 border rounded-lg text-sm" />
                    </div>
                    <textarea value={collection.description} onChange={(e) => updateContent(`collections.${index}.description`, e.target.value)} placeholder="Description" rows={2} className="w-full px-3 py-2 border rounded-lg text-sm" />
                    <div className="flex gap-2">
                      {collection.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="w-16 h-16 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500" onClick={() => openImagePicker(`collections.${index}.images.${imgIndex}`)}>
                          <img src={img} alt={`${collection.name} ${imgIndex + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mission Section */}
            {activeSection === 'mission' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-3">Mission Section</h2>
                <input type="text" value={editContent.mission.title} onChange={(e) => updateContent('mission.title', e.target.value)} placeholder="Title" className="w-full px-4 py-2 border rounded-lg" />
                <textarea value={editContent.mission.content} onChange={(e) => updateContent('mission.content', e.target.value)} placeholder="Content" rows={3} className="w-full px-4 py-2 border rounded-lg" />
                <div className="flex gap-4 items-start">
                  <div className="w-48 h-32 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500" onClick={() => openImagePicker('mission.image')}>
                    <img src={editContent.mission.image} alt="Mission" className="w-full h-full object-cover" />
                  </div>
                  <button onClick={() => openImagePicker('mission.image')} className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm">
                    <Upload className="w-4 h-4" /> Change
                  </button>
                </div>
                <input type="text" value={editContent.mission.coordinates} onChange={(e) => updateContent('mission.coordinates', e.target.value)} placeholder="Coordinates" className="w-full px-4 py-2 border rounded-lg" />
              </div>
            )}

            {/* Subscription Section */}
            {activeSection === 'subscription' && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-3">Subscription</h2>
                <input type="text" value={editContent.subscription.title} onChange={(e) => updateContent('subscription.title', e.target.value)} placeholder="Title" className="w-full px-4 py-2 border rounded-lg" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Steps (one per line)</label>
                  <textarea value={editContent.subscription.steps.join('\n')} onChange={(e) => updateContent('subscription.steps', e.target.value.split('\n').filter(s => s.trim()))} rows={3} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <input type="text" value={editContent.subscription.discount} onChange={(e) => updateContent('subscription.discount', e.target.value)} placeholder="Discount text" className="w-full px-4 py-2 border rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>

      <ImagePickerModal
        isOpen={imagePickerOpen}
        onClose={() => setImagePickerOpen(false)}
        onSelect={handleImageSelect}
        currentImage={getCurrentImage()}
      />

      <AccessModal
        isOpen={accessModalOpen}
        onClose={() => setAccessModalOpen(false)}
        site={selectedSite}
        customers={customers}
        onUpdate={fetchData}
      />
    </div>
  )
}

export default MiniSiteCMS
