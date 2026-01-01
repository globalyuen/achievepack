import { useState, useEffect, useMemo } from 'react'
import { supabase, CRMInquiry, CRMActivity } from '../../lib/supabase'
import { 
  Search, Filter, Mail, Phone, Calendar, Clock, 
  User, Package, MessageSquare, Tag, ChevronDown, ChevronUp,
  Send, Plus, Edit, Trash2, ExternalLink, Upload, Download,
  AlertCircle, CheckCircle, XCircle, Star, RefreshCw
} from 'lucide-react'

interface CRMPanelProps {
  onRefresh?: () => void
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  quoted: 'bg-purple-100 text-purple-800',
  follow_up: 'bg-orange-100 text-orange-800',
  won: 'bg-green-100 text-green-800',
  lost: 'bg-red-100 text-red-800',
  spam: 'bg-gray-100 text-gray-500'
}

const PRIORITY_COLORS: Record<string, string> = {
  low: 'text-gray-400',
  medium: 'text-yellow-500',
  high: 'text-red-500'
}

const STATUS_OPTIONS = ['new', 'contacted', 'quoted', 'follow_up', 'won', 'lost', 'spam']
const PRIORITY_OPTIONS = ['low', 'medium', 'high']

export default function CRMPanel({ onRefresh }: CRMPanelProps) {
  const [inquiries, setInquiries] = useState<CRMInquiry[]>([])
  const [activities, setActivities] = useState<CRMActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedInquiry, setSelectedInquiry] = useState<CRMInquiry | null>(null)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showImportModal, setShowImportModal] = useState(false)
  const [emailForm, setEmailForm] = useState({ subject: '', body: '' })
  const [newNote, setNewNote] = useState('')
  const [sortField, setSortField] = useState<'created_at' | 'updated_at' | 'name'>('created_at')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    fetchInquiries()
  }, [])

  useEffect(() => {
    if (selectedInquiry) {
      fetchActivities(selectedInquiry.id)
    }
  }, [selectedInquiry])

  const fetchInquiries = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('crm_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error && data) {
      setInquiries(data)
    }
    setLoading(false)
  }

  const fetchActivities = async (inquiryId: string) => {
    const { data } = await supabase
      .from('crm_activities')
      .select('*')
      .eq('inquiry_id', inquiryId)
      .order('created_at', { ascending: false })
    
    if (data) {
      setActivities(data)
    }
  }

  const updateInquiryStatus = async (id: string, status: string) => {
    await supabase
      .from('crm_inquiries')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
    
    // Log activity
    await supabase.from('crm_activities').insert({
      inquiry_id: id,
      type: 'status_change',
      content: `Status changed to ${status}`,
      created_by: 'admin'
    })
    
    fetchInquiries()
    if (selectedInquiry?.id === id) {
      fetchActivities(id)
    }
  }

  const updateInquiryPriority = async (id: string, priority: string) => {
    await supabase
      .from('crm_inquiries')
      .update({ priority, updated_at: new Date().toISOString() })
      .eq('id', id)
    fetchInquiries()
  }

  const addNote = async () => {
    if (!selectedInquiry || !newNote.trim()) return
    
    await supabase.from('crm_activities').insert({
      inquiry_id: selectedInquiry.id,
      type: 'note',
      content: newNote,
      created_by: 'admin'
    })
    
    await supabase
      .from('crm_inquiries')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', selectedInquiry.id)
    
    setNewNote('')
    fetchActivities(selectedInquiry.id)
    fetchInquiries()
  }

  const sendEmail = async () => {
    if (!selectedInquiry || !emailForm.subject || !emailForm.body) return
    
    // Log the email activity
    await supabase.from('crm_activities').insert({
      inquiry_id: selectedInquiry.id,
      type: 'email',
      subject: emailForm.subject,
      content: emailForm.body,
      created_by: 'admin'
    })
    
    await supabase
      .from('crm_inquiries')
      .update({ 
        last_contacted: new Date().toISOString(),
        status: selectedInquiry.status === 'new' ? 'contacted' : selectedInquiry.status,
        updated_at: new Date().toISOString()
      })
      .eq('id', selectedInquiry.id)
    
    // Open email client
    const mailtoLink = `mailto:${selectedInquiry.email}?subject=${encodeURIComponent(emailForm.subject)}&body=${encodeURIComponent(emailForm.body)}`
    window.open(mailtoLink, '_blank')
    
    setShowEmailModal(false)
    setEmailForm({ subject: '', body: '' })
    fetchInquiries()
    fetchActivities(selectedInquiry.id)
  }

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return
    
    await supabase.from('crm_inquiries').delete().eq('id', id)
    fetchInquiries()
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(null)
    }
  }

  const filteredInquiries = useMemo(() => {
    let result = inquiries

    // Status filter
    if (statusFilter !== 'all') {
      result = result.filter(i => i.status === statusFilter)
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(i => 
        i.name?.toLowerCase().includes(query) ||
        i.email?.toLowerCase().includes(query) ||
        i.company?.toLowerCase().includes(query) ||
        i.message?.toLowerCase().includes(query) ||
        i.packaging_type?.toLowerCase().includes(query)
      )
    }

    // Sort
    result = [...result].sort((a, b) => {
      const aVal = a[sortField] || ''
      const bVal = b[sortField] || ''
      return sortOrder === 'asc' 
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    })

    return result
  }, [inquiries, statusFilter, searchQuery, sortField, sortOrder])

  const stats = useMemo(() => ({
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'new').length,
    contacted: inquiries.filter(i => i.status === 'contacted').length,
    quoted: inquiries.filter(i => i.status === 'quoted').length,
    won: inquiries.filter(i => i.status === 'won').length,
    followUp: inquiries.filter(i => i.status === 'follow_up').length
  }), [inquiries])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-sm text-gray-500">Total Inquiries</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
          <div className="text-sm text-blue-600">New</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200">
          <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
          <div className="text-sm text-yellow-600">Contacted</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-200">
          <div className="text-2xl font-bold text-purple-600">{stats.quoted}</div>
          <div className="text-sm text-purple-600">Quoted</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg shadow-sm border border-orange-200">
          <div className="text-2xl font-bold text-orange-600">{stats.followUp}</div>
          <div className="text-sm text-orange-600">Follow Up</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
          <div className="text-2xl font-bold text-green-600">{stats.won}</div>
          <div className="text-sm text-green-600">Won</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search inquiries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Status</option>
            {STATUS_OPTIONS.map(s => (
              <option key={s} value={s}>{s.replace('_', ' ').toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchInquiries}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button
            onClick={() => setShowImportModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <Upload className="h-4 w-4" />
            Import CSV
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Inquiry List */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                      Loading inquiries...
                    </td>
                  </tr>
                ) : filteredInquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                      No inquiries found. Import your CSV to get started.
                    </td>
                  </tr>
                ) : (
                  filteredInquiries.slice(0, 50).map((inquiry) => (
                    <tr 
                      key={inquiry.id}
                      className={`hover:bg-gray-50 cursor-pointer ${selectedInquiry?.id === inquiry.id ? 'bg-primary-50' : ''}`}
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <td className="px-4 py-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const next = PRIORITY_OPTIONS[(PRIORITY_OPTIONS.indexOf(inquiry.priority) + 1) % 3]
                            updateInquiryPriority(inquiry.id, next)
                          }}
                        >
                          <Star className={`h-5 w-5 ${PRIORITY_COLORS[inquiry.priority]} ${inquiry.priority === 'high' ? 'fill-current' : ''}`} />
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900">{inquiry.name}</div>
                        <div className="text-sm text-gray-500">{inquiry.email}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-gray-600">{inquiry.packaging_type || '-'}</span>
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={inquiry.status}
                          onChange={(e) => {
                            e.stopPropagation()
                            updateInquiryStatus(inquiry.id, e.target.value)
                          }}
                          onClick={(e) => e.stopPropagation()}
                          className={`text-xs font-medium px-2 py-1 rounded-full border-0 ${STATUS_COLORS[inquiry.status]}`}
                        >
                          {STATUS_OPTIONS.map(s => (
                            <option key={s} value={s}>{s.replace('_', ' ').toUpperCase()}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {inquiry.created_at ? new Date(inquiry.created_at).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${inquiry.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 text-gray-400 hover:text-primary-600"
                            title="Send Email"
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                          {inquiry.phone && (
                            <a
                              href={`tel:${inquiry.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="p-1 text-gray-400 hover:text-green-600"
                              title="Call"
                            >
                              <Phone className="h-4 w-4" />
                            </a>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteInquiry(inquiry.id)
                            }}
                            className="p-1 text-gray-400 hover:text-red-600"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {filteredInquiries.length > 50 && (
            <div className="px-4 py-3 bg-gray-50 text-sm text-gray-500 text-center">
              Showing 50 of {filteredInquiries.length} inquiries. Use search to filter.
            </div>
          )}
        </div>

        {/* Inquiry Detail Panel */}
        <div className="bg-white rounded-lg shadow-sm">
          {selectedInquiry ? (
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedInquiry.name}</h3>
                  <p className="text-sm text-gray-500">{selectedInquiry.email}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[selectedInquiry.status]}`}>
                  {selectedInquiry.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                {selectedInquiry.phone && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${selectedInquiry.phone}`} className="hover:text-primary-600">
                      {selectedInquiry.phone}
                    </a>
                  </div>
                )}
                {selectedInquiry.company && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <User className="h-4 w-4" />
                    {selectedInquiry.company}
                  </div>
                )}
                {selectedInquiry.packaging_type && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Package className="h-4 w-4" />
                    {selectedInquiry.packaging_type}
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  {selectedInquiry.created_at ? formatDate(selectedInquiry.created_at) : '-'}
                </div>
              </div>

              {/* Message */}
              {selectedInquiry.message && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Message</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedInquiry.message}</p>
                </div>
              )}

              {/* Photo */}
              {selectedInquiry.photo_url && (
                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Attachment</h4>
                  <a 
                    href={selectedInquiry.photo_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary-600 hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Attachment
                  </a>
                </div>
              )}

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEmailForm({
                      subject: `Re: ${selectedInquiry.subject || 'Your Packaging Inquiry'} - Achieve Pack`,
                      body: `Hi ${selectedInquiry.name},

Thank you for your interest in our eco-friendly packaging solutions.

[Your message here]

Best regards,
Achieve Pack Team`
                    })
                    setShowEmailModal(true)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  <Send className="h-4 w-4" />
                  Send Email
                </button>
                {selectedInquiry.phone && (
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                )}
              </div>

              {/* Notes */}
              <div className="border-t pt-4">
                <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Add Note</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add a note..."
                    className="flex-1 px-3 py-2 border rounded-lg text-sm"
                    onKeyDown={(e) => e.key === 'Enter' && addNote()}
                  />
                  <button
                    onClick={addNote}
                    className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Activity Log */}
              <div className="border-t pt-4">
                <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Activity</h4>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {activities.length === 0 ? (
                    <p className="text-sm text-gray-400">No activity yet</p>
                  ) : (
                    activities.map((activity) => (
                      <div key={activity.id} className="flex gap-3 text-sm">
                        <div className={`mt-1 p-1 rounded-full ${
                          activity.type === 'email' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'call' ? 'bg-green-100 text-green-600' :
                          activity.type === 'status_change' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {activity.type === 'email' ? <Mail className="h-3 w-3" /> :
                           activity.type === 'call' ? <Phone className="h-3 w-3" /> :
                           activity.type === 'status_change' ? <Tag className="h-3 w-3" /> :
                           <MessageSquare className="h-3 w-3" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700">{activity.content}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {activity.created_at ? formatDate(activity.created_at) : ''}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-400">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select an inquiry to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold">Send Email to {selectedInquiry.name}</h3>
              <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input
                  type="text"
                  value={selectedInquiry.email}
                  disabled
                  className="w-full px-3 py-2 border rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={emailForm.body}
                  onChange={(e) => setEmailForm({ ...emailForm, body: e.target.value })}
                  rows={8}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="p-4 border-t flex justify-end gap-2">
              <button
                onClick={() => setShowEmailModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={sendEmail}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold">Import Contacts</h3>
              <button onClick={() => setShowImportModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h4 className="font-medium mb-2">Import from CSV</h4>
                <p className="text-sm text-gray-600 mb-3">
                  To import your CSV data, run the import script in your Supabase dashboard or use the API.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="text-xs font-mono text-gray-600">
                    1. Go to Supabase Dashboard → SQL Editor<br/>
                    2. Create the crm_inquiries table<br/>
                    3. Use the CSV import feature or API
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  CSV file location: <code className="bg-gray-100 px-2 py-1 rounded">CRM/old/form-1-entries.csv</code>
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Import PayPal/Stripe/Calendly Contacts</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Use the import scripts in the backend to sync contacts from PayPal, Stripe, and Calendly.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-mono text-gray-600">
                    1. Go to Supabase Dashboard → SQL Editor<br/>
                    2. Run the import script for each source:<br/>
                    - PayPal: <code className="bg-gray-200 px-1 rounded">import_paypal.sql</code><br/>
                    - Stripe: <code className="bg-gray-200 px-1 rounded">import_stripe.sql</code><br/>
                    - Calendly: <code className="bg-gray-200 px-1 rounded">import_calendly.sql</code><br/>
                    - Website: <code className="bg-gray-200 px-1 rounded">import_website.sql</code>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
