import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase, Project, Profile, Quote, ArtworkFile, Order, Document, ProjectComment } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import {
    ArrowLeft, User, FileText, FileCheck, Image as ImageIcon,
    Package, Box, Truck, Files, MessageSquare, Plus,
    Search, Filter, Download, ExternalLink, Clock,
    AlertCircle, CheckCircle, Send, MoreVertical,
    X, Upload, Trash2, Edit, ChevronRight, Zap, Globe, Mail
} from 'lucide-react'
import { SlidingNumber } from '../components/animate-ui/primitives/texts/sliding-number'
import ProjectFileUploader from '../components/admin/ProjectFileUploader'
import ProjectAddOrderModal from '../components/admin/ProjectAddOrderModal'
import ProjectAddShippingModal from '../components/admin/ProjectAddShippingModal'

type ProjectTab = 'customer' | 'overview' | 'rfq' | 'artwork' | 'stock' | 'custom' | 'shipping' | 'doc'

const ProjectDetailPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>()
    const navigate = useNavigate()
    const { user } = useAuth()
    const [activeTab, setActiveTab] = useState<ProjectTab>('overview')
    const [loading, setLoading] = useState(true)
    const [project, setProject] = useState<Project | null>(null)
    const [customer, setCustomer] = useState<Profile | null>(null)
    const [quotes, setQuotes] = useState<Quote[]>([])
    const [artworks, setArtworks] = useState<ArtworkFile[]>([])
    const [orders, setOrders] = useState<Order[]>([])
    const [documents, setDocuments] = useState<Document[]>([])
    const [comments, setComments] = useState<ProjectComment[]>([])
    const [newComment, setNewComment] = useState('')
    const [sendingComment, setSendingComment] = useState(false)
    const [showUploadModal, setShowUploadModal] = useState(false)
    const [showAddOrderModal, setShowAddOrderModal] = useState(false)
    const [showAddShippingModal, setShowAddShippingModal] = useState(false)
    const [selectedOrderForShipping, setSelectedOrderForShipping] = useState<Order | null>(null)

    // Sidebar Menu Items
    const menuItems = [
        { id: 'customer', label: 'Customer', icon: User },
        { id: 'overview', label: 'Project', icon: FileText },
        { id: 'rfq', label: 'RFQ', icon: FileCheck },
        { id: 'artwork', label: 'Artwork', icon: ImageIcon },
        { id: 'stock', label: 'Stock', icon: Package },
        { id: 'custom', label: 'Custom', icon: Box },
        { id: 'shipping', label: 'Shipping', icon: Truck },
        { id: 'doc', label: 'Doc', icon: Files },
    ]

    useEffect(() => {
        if (projectId) {
            fetchProjectData()
        }
    }, [projectId])

    const fetchProjectData = async () => {
        setLoading(true)
        try {
            // 1. Fetch Project
            const { data: projectData, error: projectError } = await supabase
                .from('projects')
                .select('*')
                .eq('id', projectId)
                .single()

            if (projectError) throw projectError
            setProject(projectData)

            // 2. Fetch Customer
            if (projectData.user_id) {
                const { data: customerData } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', projectData.user_id)
                    .single()
                setCustomer(customerData)
            } else if (projectData.customer_email) {
                // Fallback search profile by email
                const { data: customerData } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('email', projectData.customer_email)
                    .single()
                setCustomer(customerData)
            }

            // 3. Fetch related records
            const [quotesRes, artworksRes, ordersRes, docsRes, commentsRes] = await Promise.all([
                supabase.from('quotes').select('*').eq('project_id', projectId).order('created_at', { ascending: false }),
                supabase.from('artwork_files').select('*').eq('project_id', projectId).order('created_at', { ascending: false }),
                supabase.from('orders').select('*').eq('project_id', projectId).order('created_at', { ascending: false }),
                supabase.from('documents').select('*').eq('project_id', projectId).order('created_at', { ascending: false }),
                supabase.from('project_comments').select('*').eq('project_id', projectId).order('created_at', { ascending: true })
            ])

            setQuotes(quotesRes.data || [])
            setArtworks(artworksRes.data || [])
            setOrders(ordersRes.data || [])
            setDocuments(docsRes.data || [])
            setComments(commentsRes.data || [])

        } catch (error) {
            console.error('Error fetching project detail:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleAddComment = async () => {
        if (!newComment.trim() || !projectId || sendingComment) return
        setSendingComment(true)
        try {
            const { error } = await supabase.from('project_comments').insert({
                project_id: projectId,
                user_id: user?.id,
                user_email: user?.email,
                user_name: user?.user_metadata?.full_name || 'Admin',
                is_admin: true,
                message: newComment,
                message_type: 'text'
            })

            if (error) throw error
            setNewComment('')
            fetchProjectData() // Refresh comments
        } catch (error) {
            console.error('Error adding comment:', error)
        } finally {
            setSendingComment(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-primary-100 border-t-primary-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 font-medium">Loading Project Details...</p>
                </div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h1>
                <p className="text-gray-500 mb-6 text-center max-w-md">We couldn't find the project you're looking for. It might have been deleted or the link is incorrect.</p>
                <button onClick={() => navigate('/ctrl-x9k7m')} className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition font-semibold">
                    Return to All Projects
                </button>
            </div>
        )
    }

    return (
        <div className="flex h-screen bg-white">
            {/* Project Context Sidebar */}
            <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col pt-6">
                <div className="px-6 mb-8">
                    <button
                        onClick={() => navigate('/ctrl-x9k7m')}
                        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Projects
                    </button>
                </div>

                <div className="px-6 mb-6">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-[10px] font-bold text-primary-500 uppercase tracking-wider mb-1">Active Project</p>
                        <h2 className="text-lg font-bold text-gray-900 truncate">{project.project_code}</h2>
                        <div className="flex items-center gap-2 mt-2">
                            <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${project.status === 'production' ? 'bg-indigo-100 text-indigo-700' :
                                project.status === 'shipping' ? 'bg-blue-100 text-blue-700' :
                                    project.status === 'complete' ? 'bg-green-100 text-green-700' :
                                        'bg-yellow-100 text-yellow-700'
                                }`}>
                                {project.status.toUpperCase()}
                            </span>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 space-y-1 px-3">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id as ProjectTab)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${activeTab === item.id
                                ? 'bg-primary-500 text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <item.icon className={`h-5 w-5 ${activeTab === item.id ? 'text-white' : 'text-gray-400'}`} />
                            {item.label}
                            {/* Optional badges for counts */}
                            {item.id === 'rfq' && quotes.length > 0 && (
                                <span className={`ml-auto px-1.5 py-0.5 text-[10px] rounded-full ${activeTab === item.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                    {quotes.length}
                                </span>
                            )}
                            {item.id === 'artwork' && artworks.length > 0 && (
                                <span className={`ml-auto px-1.5 py-0.5 text-[10px] rounded-full ${activeTab === item.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                    {artworks.length}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center border-2 border-white shadow-sm">
                            <span className="text-primary-600 font-bold">
                                {customer?.full_name?.charAt(0) || project.customer_email?.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-900 truncate">{customer?.full_name || 'Anonymous'}</p>
                            <p className="text-[10px] text-gray-500 truncate">{project.customer_email}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Work Area */}
            <main className="flex-1 flex flex-col overflow-hidden border-r border-gray-100">
                {/* Sub-header / Breadcrumbs */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                        <Link to="/ctrl-x9k7m" className="text-gray-400 hover:text-gray-600 transition">Admin</Link>
                        <ChevronRight className="h-4 w-4 text-gray-300" />
                        <Link to="/ctrl-x9k7m?tab=projects" className="text-gray-400 hover:text-gray-600 transition">Projects</Link>
                        <ChevronRight className="h-4 w-4 text-gray-300" />
                        <span className="font-bold text-gray-900">{project.project_code}</span>
                        <span className="mx-2 text-gray-300">/</span>
                        <span className="text-primary-500 font-bold capitalize">{activeTab}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition text-sm font-semibold">
                            <Download className="h-4 w-4" />
                            Project Summary
                        </button>
                    </div>
                </header>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto p-8 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-5xl mx-auto">
                        {activeTab === 'customer' && <CustomerTab customer={customer} project={project} />}
                        {activeTab === 'overview' && <OverviewTab project={project} quotes={quotes} artworks={artworks} orders={orders} comments={comments} />}
                        {activeTab === 'rfq' && <RFQTab project={project} quotes={quotes} onAdd={() => setShowUploadModal(true)} />}
                        {activeTab === 'artwork' && <ArtworkTab project={project} artworks={artworks} onUpload={() => setShowUploadModal(true)} />}
                        {activeTab === 'stock' && <OrderListTab project={project} orders={orders.filter(o => o.order_type === 'stock')} type="Stock" onAdd={() => setShowAddOrderModal(true)} />}
                        {activeTab === 'custom' && <OrderListTab project={project} orders={orders.filter(o => o.order_type === 'custom')} type="Custom" onAdd={() => setShowAddOrderModal(true)} />}
                        {activeTab === 'shipping' && <ShippingTab project={project} orders={orders} onAddTracking={(order) => { setSelectedOrderForShipping(order); setShowAddShippingModal(true); }} />}
                        {activeTab === 'doc' && <DocTab project={project} documents={documents} onUpload={() => setShowUploadModal(true)} />}
                    </div>
                </div>
            </main>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="px-10 pt-10 pb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900">Upload Project File</h2>
                                <p className="text-sm text-gray-400 font-bold mt-1">Files will be linked to project: {project.project_code}</p>
                            </div>
                            <button onClick={() => setShowUploadModal(false)} className="p-3 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-2xl transition">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="px-10 pb-10">
                            <ProjectFileUploader
                                projectId={projectId!}
                                onUploadComplete={() => {
                                    fetchProjectData()
                                    setTimeout(() => setShowUploadModal(false), 1500)
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Add Order Modal */}
            {showAddOrderModal && (
                <ProjectAddOrderModal
                    projectId={projectId!}
                    customerEmail={project.customer_email || ''}
                    customerName={customer?.full_name || 'Anonymous'}
                    orderType={activeTab === 'stock' ? 'stock' : 'custom'}
                    onClose={() => setShowAddOrderModal(false)}
                    onSuccess={() => {
                        fetchProjectData()
                        setShowAddOrderModal(false)
                    }}
                />
            )}

            {/* Add Shipping Modal */}
            {showAddShippingModal && selectedOrderForShipping && (
                <ProjectAddShippingModal
                    projectId={projectId!}
                    orderId={selectedOrderForShipping.id}
                    orderNumber={selectedOrderForShipping.order_number}
                    onClose={() => { setShowAddShippingModal(false); setSelectedOrderForShipping(null); }}
                    onSuccess={() => {
                        fetchProjectData()
                        setShowAddShippingModal(false)
                        setSelectedOrderForShipping(null)
                    }}
                />
            )}

            {/* Internal Activity Sidebar */}
            <aside className="w-80 bg-gray-50 flex flex-col">
                <div className="h-20 px-6 border-b border-gray-100 flex items-center justify-between bg-white">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary-500" />
                        Internal Activity
                    </h3>
                    <span className="px-2 py-0.5 bg-primary-100 text-primary-600 text-[10px] font-black rounded-full">
                        {comments.length}
                    </span>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {comments.length === 0 ? (
                        <div className="text-center py-10">
                            <Clock className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                            <p className="text-xs text-gray-400 font-medium">No activity log yet</p>
                        </div>
                    ) : (
                        comments.map((comment) => (
                            <div key={comment.id} className={`${comment.message_type === 'status'
                                ? 'bg-gray-100/50 border-gray-100 py-2 px-3 flex items-center gap-3'
                                : 'bg-white p-3 shadow-sm border-gray-100'
                                } rounded-2xl border transition-all duration-300`}>
                                {comment.message_type === 'status' ? (
                                    <>
                                        <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">{comment.message}</p>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-[10px] font-bold text-primary-600">
                                                {comment.user_name?.charAt(0) || 'A'}
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-900">{comment.user_name || 'Admin'}</span>
                                            <span className="text-[10px] text-gray-400 ml-auto">{new Date(comment.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">{comment.message}</p>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>

                <div className="p-4 bg-white border-t border-gray-100">
                    <div className="relative">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add internal note..."
                            className="w-full bg-gray-50 border-none rounded-2xl p-3 pl-4 pr-12 text-xs focus:ring-2 focus:ring-primary-500/20 transition resize-none min-h-[80px]"
                        />
                        <button
                            onClick={handleAddComment}
                            disabled={sendingComment || !newComment.trim()}
                            className="absolute bottom-3 right-3 p-2 bg-primary-500 text-white rounded-xl shadow-lg shadow-primary-100 hover:bg-primary-600 transition disabled:opacity-50 disabled:shadow-none"
                        >
                            {sendingComment ? <Clock className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2 px-1">
                        <button className="p-1.5 text-gray-400 hover:text-primary-500 transition">
                            <Plus className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-primary-500 transition">
                            <ImageIcon className="h-4 w-4" />
                        </button>
                        <span className="text-[10px] text-gray-300 ml-auto">Internal Only</span>
                    </div>
                </div>
            </aside>
        </div>
    )
}

// Sub-components for Tabs (Mocked for now, will implement logic in next steps)

const CustomerTab: React.FC<{ customer: Profile | null, project: Project }> = ({ customer, project }) => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm border-t-4 border-t-primary-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="grid grid-cols-2 gap-y-8">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Company</p>
                            <p className="text-lg font-bold text-gray-900">{customer?.company || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Full Name</p>
                            <p className="text-lg font-bold text-gray-900">{customer?.full_name || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email</p>
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-bold text-gray-900">{project.customer_email}</p>
                                <button className="p-1.5 bg-gray-50 rounded-lg text-gray-400 hover:text-primary-500 transition">
                                    <Mail className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Phone</p>
                            <p className="text-lg font-bold text-gray-900">{customer?.phone || 'N/A'}</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                        <button className="px-6 py-2.5 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition font-bold text-sm shadow-lg shadow-primary-100">
                            Edit Details
                        </button>
                        <button className="px-6 py-2.5 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition font-bold text-sm">
                            View CRM Profile
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white shadow-xl">
                    <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">Customer Stats</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-3xl font-bold font-mono">3</p>
                            <p className="text-xs text-white/60 uppercase mt-1">Total Projects</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold font-mono">$1,240</p>
                            <p className="text-xs text-white/60 uppercase mt-1">Lifetime Value</p>
                        </div>
                        <div className="pt-4">
                            <div className="flex justify-between items-center text-xs mb-2">
                                <span className="text-white/60 font-bold uppercase">Sustainability Badge</span>
                                <span className="text-green-400 font-bold">SILVER</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[60%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const OverviewTab: React.FC<{ project: Project, quotes: Quote[], artworks: ArtworkFile[], orders: Order[], comments: ProjectComment[] }> = ({ project, quotes, artworks, orders, comments }) => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center mb-3">
                    <FileCheck className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Quotes</p>
                <div className="flex items-baseline gap-1">
                    <SlidingNumber number={quotes.length} className="text-2xl font-black text-gray-900" />
                </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-3">
                    <ImageIcon className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Artworks</p>
                <SlidingNumber number={artworks.length} className="text-2xl font-black text-gray-900" />
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
                    <Package className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Orders</p>
                <SlidingNumber number={orders.length} className="text-2xl font-black text-gray-900" />
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-3">
                    <Truck className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">In Transit</p>
                <SlidingNumber number={orders.filter(o => o.status === 'shipped').length} className="text-2xl font-black text-gray-900" />
            </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">Project Timeline</h3>
                <button className="text-primary-500 font-bold text-sm hover:underline">Add Milestone</button>
            </div>
            <div className="relative pl-8 border-l-2 border-dashed border-gray-100 space-y-12">
                {/* Initial Milestone */}
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-50 shadow-lg shadow-green-100"></div>
                    <div>
                        <p className="text-sm font-black text-gray-900">Project Initialized</p>
                        <p className="text-xs text-gray-500 font-bold mt-1 uppercase">{new Date(project.created_at).toLocaleDateString()} • {new Date(project.created_at).toLocaleTimeString()}</p>
                        <div className="mt-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-sm text-gray-600 max-w-lg">
                            Project created for {project.project_type} workflow.
                        </div>
                    </div>
                </div>

                {/* Activity Feed in Timeline */}
                {comments.filter(c => c.message_type === 'status').map((log, idx) => (
                    <div key={log.id} className="relative">
                        <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-primary-500 ring-4 ring-primary-50 shadow-lg shadow-primary-100"></div>
                        <div>
                            <p className="text-sm font-black text-gray-900">{log.message}</p>
                            <p className="text-xs text-gray-500 font-bold mt-1 uppercase">{new Date(log.created_at).toLocaleDateString()} • {new Date(log.created_at).toLocaleTimeString()}</p>
                        </div>
                    </div>
                ))}

                {/* Next Step Placeholder */}
                {project.status !== 'complete' && (
                    <div className="relative opacity-50">
                        <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-gray-300 ring-4 ring-gray-100"></div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 italic">Next Step: {project.status === 'rfq' ? 'Quote Review' : project.status === 'artwork' ? 'Artwork Approval' : 'Production'}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
)

const RFQTab: React.FC<{ project: Project, quotes: Quote[], onAdd: () => void }> = ({ project, quotes, onAdd }) => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Quotes & RFQs</h3>
                <button
                    onClick={onAdd}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition font-bold shadow-lg shadow-primary-100"
                >
                    <Plus className="h-4 w-4" />
                    Create New RFQ
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {quotes.map(quote => (
                    <div key={quote.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition group">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-50 transition">
                                    <FileCheck className="h-6 w-6 text-gray-400 group-hover:text-primary-500 transition" />
                                </div>
                                <div>
                                    <p className="font-black text-gray-900 text-lg">{quote.quote_number}</p>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{new Date(quote.created_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase text-right mb-1">Status</p>
                                    <span className={`px-3 py-1 text-xs font-black rounded-full ${quote.status === 'accepted' ? 'bg-green-100 text-green-700' :
                                        quote.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                            'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {quote.status.toUpperCase()}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Total</p>
                                    <p className="text-xl font-black text-gray-900">${quote.total_amount?.toLocaleString() || '0.00'}</p>
                                </div>
                                <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-900 transition">
                                    <MoreVertical className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {quotes.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <FileCheck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 font-bold">No RFQs linked to this project</p>
                        <p className="text-xs text-gray-400 mt-1">Start by creating a new request or linking an existing one.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

const ArtworkTab: React.FC<{ project: Project, artworks: ArtworkFile[], onUpload: () => void }> = ({ project, artworks, onUpload }) => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Design & Artwork</h3>
            <button
                onClick={onUpload}
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-2xl hover:bg-primary-50 transition font-bold"
            >
                <Upload className="h-4 w-4" />
                Upload New File
            </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artworks.map(artwork => (
                <div key={artwork.id} className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                        {artwork.file_type.includes('image') ? (
                            <img src={artwork.file_url} alt={artwork.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Files className="h-12 w-12 text-gray-300" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <button className="p-3 bg-white rounded-2xl text-gray-900 shadow-xl hover:scale-110 transition">
                                <ExternalLink className="h-5 w-5" />
                            </button>
                            <button className="p-3 bg-primary-500 text-white rounded-2xl shadow-xl hover:scale-110 transition">
                                <CheckCircle className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="absolute top-3 left-3">
                            <span className={`px-2 py-0.5 text-[8px] font-black rounded-full border border-white shadow-sm ${artwork.status === 'approved' ? 'bg-green-500 text-white' :
                                artwork.status === 'pending_review' ? 'bg-yellow-400 text-gray-900' :
                                    'bg-blue-500 text-white'
                                }`}>
                                {artwork.status.slice(0, 10).toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-black text-gray-900 truncate">{artwork.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">v{artwork.version_number || 1} • {new Date(artwork.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
            {artworks.length === 0 && (
                <div className="col-span-full py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-center">
                    <ImageIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-bold">No Artwork Files Yet</p>
                </div>
            )}
        </div>
    </div>
)

const OrderListTab: React.FC<{ project: Project, orders: Order[], type: string, onAdd: () => void }> = ({ project, orders, type, onAdd }) => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">{type} Orders</h3>
            <button
                onClick={onAdd}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition font-bold shadow-lg shadow-primary-100"
            >
                <Plus className="h-4 w-4" />
                New {type} Order
            </button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Order #</th>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Created</th>
                        <th className="px-6 py-4 text-right"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {orders.map(order => (
                        <tr key={order.id} className="hover:bg-gray-50/50 transition">
                            <td className="px-6 py-4">
                                <span className="font-mono font-bold text-primary-500">{order.order_number}</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 text-[10px] font-black rounded-full ${order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                    order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                                        'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {order.status.toUpperCase()}
                                </span>
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-900">
                                ${order.total_amount?.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                                {new Date(order.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 hover:bg-gray-100 rounded-xl transition text-gray-400">
                                    <MoreVertical className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {orders.length === 0 && (
                <div className="py-20 bg-gray-50/50 text-center">
                    <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-bold">No {type} orders records found</p>
                </div>
            )}
        </div>
    </div>
)

const ShippingTab: React.FC<{ project: Project, orders: Order[], onAddTracking: (order: Order) => void }> = ({ project, orders, onAddTracking }) => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Shipments & Logistics</h3>
            <div className="flex gap-2">
                {orders.filter(o => !o.tracking_number).length > 0 && (
                    <button
                        onClick={() => onAddTracking(orders.filter(o => !o.tracking_number)[0])}
                        className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-100"
                    >
                        Generate Shipment
                    </button>
                )}
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
            {orders.length > 0 && orders.filter(o => !o.tracking_number).length > 0 && orders.filter(o => o.tracking_number).length === 0 && (
                <div className="bg-white rounded-3xl border-2 border-dashed border-gray-100 p-20 text-center">
                    <Truck className="h-16 w-16 text-gray-200 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ready for Shipment</h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto mb-8">
                        There are {orders.filter(o => !o.tracking_number).length} orders waiting for logistical information.
                    </p>
                    <button
                        onClick={() => onAddTracking(orders.filter(o => !o.tracking_number)[0])}
                        className="px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-black transition font-bold shadow-xl"
                    >
                        Add Tracking Number
                    </button>
                </div>
            )}

            {orders.filter(o => o.tracking_number).map(order => (
                <div key={order.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                    <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                                <Truck className="h-7 w-7 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Tracking Number</p>
                                <div className="flex items-center gap-2">
                                    <h4 className="text-xl font-black text-gray-900">{order.tracking_number}</h4>
                                    <button className="p-1.5 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-500 transition">
                                        <ExternalLink className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Logistics Partner</p>
                            <p className="text-lg font-bold text-gray-900">{order.carrier || 'FedEx International'}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Status</p>
                            <p className="text-sm font-black text-blue-600">IN TRANSIT</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Departure</p>
                            <p className="text-sm font-black text-gray-900">CN - Guangzhou</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Target</p>
                            <p className="text-sm font-black text-gray-900">US - Los Angeles</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">ETA</p>
                            <p className="text-sm font-black text-green-600">Jan 24, 2024</p>
                        </div>
                    </div>

                    <div className="relative pt-4 overflow-hidden">
                        <div className="absolute top-9 left-0 w-full h-1 bg-gray-100 rounded-full"></div>
                        <div className="absolute top-9 left-0 w-[65%] h-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <div className="flex justify-between relative mt-8">
                            <div className="flex flex-col items-center">
                                <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-50 mb-2"></div>
                                <span className="text-[10px] font-bold text-gray-900">Picked Up</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-50 mb-2"></div>
                                <span className="text-[10px] font-bold text-gray-900">Export Cleared</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-50 mb-2 relative z-1 animate-pulse"></div>
                                <span className="text-[10px] font-bold text-blue-600">In Transit</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-4 w-4 rounded-full bg-gray-200 mb-2"></div>
                                <span className="text-[10px] font-bold text-gray-400">Delivered</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {orders.filter(o => o.tracking_number).length === 0 && (
                <div className="py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-center">
                    <Truck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-bold">No Shipments Active</p>
                    <p className="text-xs text-gray-400 mt-1">Once you add tracking to an order, it will appear here.</p>
                </div>
            )}
        </div>
    </div>
)

const DocTab: React.FC<{ project: Project, documents: Document[], onUpload: () => void }> = ({ project, documents, onUpload }) => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Project Documents</h3>
            <div className="flex gap-2">
                <button className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-2xl hover:bg-gray-50 transition font-bold">
                    Batch Download
                </button>
                <button
                    onClick={onUpload}
                    className="px-6 py-3 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition font-bold shadow-lg shadow-primary-100"
                >
                    Upload Document
                </button>
            </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Filename</th>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Type</th>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Size</th>
                        <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Modified</th>
                        <th className="px-6 py-4 text-right"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {documents.map(doc => (
                        <tr key={doc.id} className="hover:bg-gray-50 transition group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center">
                                        <Files className="h-5 w-5 text-red-500" />
                                    </div>
                                    <span className="font-bold text-gray-900 group-hover:text-primary-500 transition">{doc.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-gray-100 text-[10px] font-bold rounded text-gray-600 uppercase tracking-wider">{doc.type}</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 font-bold">
                                1.2 MB
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                                {new Date(doc.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition text-gray-400 hover:text-primary-500">
                                    <Download className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {documents.length === 0 && (
                <div className="py-20 bg-gray-50/50 text-center">
                    <Files className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-bold">No documents uploaded</p>
                </div>
            )}
        </div>
    </div>
)

export default ProjectDetailPage
