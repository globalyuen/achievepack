import React, { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { Check, X, Clock, User, Building, MessageSquare, Star, Image as ImageIcon, Video, ExternalLink, Loader2, Save, Trash2 } from 'lucide-react'

interface TestimonialSubmission {
  id: string
  created_at: string
  status: 'pending' | 'approved' | 'rejected'
  raw_data: {
    name: string
    email: string
    company?: string
    role?: string
    quote: string
    attachmentUrls: { name: string; url: string; type: string }[]
    submitted_at: string
    // Added for approval process
    shortQuote?: string
    bgColor?: string
    pouchImage?: string
    priority?: number
  }
}

export default function TestimonialManagement({ preselectId }: { preselectId?: string | null }) {
  const [submissions, setSubmissions] = useState<TestimonialSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<TestimonialSubmission | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchSubmissions = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('webhook_logs')
      .select('*')
      .eq('source', 'testimonial')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setSubmissions(data as any)
      
      // If there's a preselected ID, find it and select it
      if (preselectId) {
        const pre = data.find(s => s.id === preselectId)
        if (pre) setSelectedSubmission(pre as any)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const handleUpdateStatus = async (id: string, status: 'approved' | 'rejected' | 'pending') => {
    setIsSaving(true)
    const { error } = await supabase
      .from('webhook_logs')
      .update({ status })
      .eq('id', id)

    if (!error) {
      setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status } : s))
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status })
      }
    }
    setIsSaving(false)
  }

  const handleSaveEdits = async () => {
    if (!selectedSubmission) return
    setIsSaving(true)
    
    const { error } = await supabase
      .from('webhook_logs')
      .update({ 
        raw_data: selectedSubmission.raw_data,
        status: selectedSubmission.status 
      })
      .eq('id', selectedSubmission.id)

    if (!error) {
      setSubmissions(prev => prev.map(s => s.id === selectedSubmission.id ? selectedSubmission : s))
      alert('Testimonial saved successfully!')
    } else {
      alert('Error saving testimonial: ' + error.message)
    }
    setIsSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission? This cannot be undone.')) return
    
    setIsDeleting(true)
    const { error } = await supabase
      .from('webhook_logs')
      .delete()
      .eq('id', id)

    if (!error) {
      setSubmissions(prev => prev.filter(s => s.id !== id))
      setSelectedSubmission(null)
    }
    setIsDeleting(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-12rem)]">
      {/* Submissions List */}
      <div className="w-full lg:w-1/3 bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-neutral-200 bg-neutral-50 flex justify-between items-center">
          <h3 className="font-bold text-neutral-900 flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Submissions ({submissions.length})
          </h3>
          <button onClick={fetchSubmissions} className="p-2 hover:bg-neutral-200 rounded-lg transition">
            <Clock className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {submissions.length === 0 ? (
            <div className="p-8 text-center text-neutral-500">
              No testimonial submissions yet.
            </div>
          ) : (
            <div className="divide-y divide-neutral-100">
              {submissions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubmission(s)}
                  className={`w-full p-4 text-left hover:bg-neutral-50 transition flex items-start gap-4 ${selectedSubmission?.id === s.id ? 'bg-primary-50 border-l-4 border-primary-500' : ''}`}
                >
                  <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${
                    s.status === 'approved' ? 'bg-green-500' : 
                    s.status === 'rejected' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-neutral-900 truncate">{s.raw_data.name}</span>
                      <span className="text-[10px] text-neutral-500 whitespace-nowrap">
                        {new Date(s.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 truncate">{s.raw_data.quote}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase font-bold ${
                        s.status === 'approved' ? 'bg-green-100 text-green-700' : 
                        s.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {s.status}
                      </span>
                      {s.raw_data.attachmentUrls?.length > 0 && (
                        <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                          <ImageIcon className="h-3 w-3" /> {s.raw_data.attachmentUrls.length}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Details & Editor */}
      <div className="flex-1 bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col">
        {selectedSubmission ? (
          <>
            <div className="p-4 border-b border-neutral-200 bg-neutral-50 flex justify-between items-center">
              <h3 className="font-bold text-neutral-900">Testimonial Details</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Delete"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
                <div className="h-6 w-px bg-neutral-200 mx-2" />
                <button
                  onClick={() => handleUpdateStatus(selectedSubmission.id, 'rejected')}
                  className={`p-2 rounded-lg transition ${selectedSubmission.status === 'rejected' ? 'bg-red-100 text-red-700' : 'hover:bg-neutral-100 text-neutral-500'}`}
                  title="Reject"
                >
                  <X className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedSubmission.id, 'approved')}
                  className={`p-2 rounded-lg transition ${selectedSubmission.status === 'approved' ? 'bg-green-100 text-green-700' : 'hover:bg-neutral-100 text-neutral-500'}`}
                  title="Approve"
                >
                  <Check className="h-5 w-5" />
                </button>
                <button
                  onClick={handleSaveEdits}
                  disabled={isSaving}
                  className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-primary-700 transition disabled:opacity-50"
                >
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  Save Changes
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Header Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1 flex items-center gap-1">
                    <User className="h-3 w-3" /> Customer
                  </div>
                  <div className="font-bold text-neutral-900">{selectedSubmission.raw_data.name}</div>
                  <div className="text-sm text-neutral-500">{selectedSubmission.raw_data.email}</div>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1 flex items-center gap-1">
                    <Building className="h-3 w-3" /> Company
                  </div>
                  <div className="font-bold text-neutral-900">{selectedSubmission.raw_data.company || 'N/A'}</div>
                  <div className="text-sm text-neutral-500">{selectedSubmission.raw_data.role || 'No role provided'}</div>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Submitted
                  </div>
                  <div className="font-bold text-neutral-900">
                    {new Date(selectedSubmission.created_at).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {new Date(selectedSubmission.created_at).toLocaleTimeString()}
                  </div>
                </div>
              </div>

              {/* Main Quote Editor */}
              <div className="space-y-4">
                <h4 className="font-bold text-neutral-900 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Testimonial Content
                </h4>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Full Quote</label>
                    <textarea
                      value={selectedSubmission.raw_data.quote}
                      onChange={(e) => setSelectedSubmission({
                        ...selectedSubmission,
                        raw_data: { ...selectedSubmission.raw_data, quote: e.target.value }
                      })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Short Quote (for Mobile/Cards)</label>
                    <input
                      type="text"
                      value={selectedSubmission.raw_data.shortQuote || ''}
                      placeholder="Catchy one-liner..."
                      onChange={(e) => setSelectedSubmission({
                        ...selectedSubmission,
                        raw_data: { ...selectedSubmission.raw_data, shortQuote: e.target.value }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Background Color (Tailwind class)</label>
                    <select
                      value={selectedSubmission.raw_data.bgColor || 'bg-emerald-100'}
                      onChange={(e) => setSelectedSubmission({
                        ...selectedSubmission,
                        raw_data: { ...selectedSubmission.raw_data, bgColor: e.target.value }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 outline-none transition"
                    >
                      <option value="bg-emerald-100">Emerald (Green)</option>
                      <option value="bg-blue-100">Blue</option>
                      <option value="bg-amber-100">Amber (Yellow)</option>
                      <option value="bg-rose-100">Rose (Red)</option>
                      <option value="bg-violet-100">Violet (Purple)</option>
                      <option value="bg-pink-100">Pink</option>
                      <option value="bg-sky-100">Sky (Cyan)</option>
                      <option value="bg-indigo-100">Indigo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Priority (Higher shows first)</label>
                    <input
                      type="number"
                      value={selectedSubmission.raw_data.priority || 0}
                      onChange={(e) => setSelectedSubmission({
                        ...selectedSubmission,
                        raw_data: { ...selectedSubmission.raw_data, priority: parseInt(e.target.value) }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Attachments */}
              <div className="space-y-4 pt-4">
                <h4 className="font-bold text-neutral-900 flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-blue-500" />
                  Attachments (${selectedSubmission.raw_data.attachmentUrls?.length || 0})
                </h4>
                
                {selectedSubmission.raw_data.attachmentUrls?.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedSubmission.raw_data.attachmentUrls.map((file, idx) => (
                      <div key={idx} className="group relative aspect-square rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                        {file.type.startsWith('image') ? (
                          <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                            <Video className="h-8 w-8 text-neutral-400 mb-2" />
                            <span className="text-[10px] text-neutral-500 truncate w-full">{file.name}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2">
                          <a 
                            href={file.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-neutral-900 p-2 rounded-full shadow-lg hover:scale-110 transition"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                          <button
                            onClick={() => setSelectedSubmission({
                              ...selectedSubmission,
                              raw_data: { ...selectedSubmission.raw_data, pouchImage: file.url }
                            })}
                            className={`text-[10px] px-2 py-1 rounded bg-white font-bold ${selectedSubmission.raw_data.pouchImage === file.url ? 'text-green-600' : 'text-neutral-600'}`}
                          >
                            {selectedSubmission.raw_data.pouchImage === file.url ? 'SELECTED' : 'SET AS MAIN'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-neutral-400 border-2 border-dashed border-neutral-200 rounded-2xl">
                    No media attached to this submission.
                  </div>
                )}
              </div>

              {/* Live Preview */}
              <div className="pt-8 border-t border-neutral-100">
                <h4 className="font-bold text-neutral-900 mb-4">Preview on Website</h4>
                <div className={`p-8 rounded-3xl ${selectedSubmission.raw_data.bgColor || 'bg-emerald-100'} max-w-lg mx-auto shadow-xl border-4 border-black`}>
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${selectedSubmission.raw_data.name}&background=10b981&color=fff&size=128`} 
                      className="w-16 h-16 rounded-full border-2 border-black"
                    />
                    <div>
                      <div className="font-black text-xl">{selectedSubmission.raw_data.name}</div>
                      <div className="text-sm font-bold opacity-60">{selectedSubmission.raw_data.company || 'Customer'}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold leading-tight mb-4 italic">
                    "{selectedSubmission.raw_data.shortQuote || selectedSubmission.raw_data.quote}"
                  </div>
                  <div className="text-sm opacity-80 line-clamp-3">
                    {selectedSubmission.raw_data.quote}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-neutral-400 p-12">
            <MessageSquare className="h-16 w-16 mb-4 opacity-20" />
            <h3 className="text-lg font-bold">No Testimonial Selected</h3>
            <p className="text-sm text-center max-w-xs">Select a submission from the list on the left to review, edit, and approve it.</p>
          </div>
        )}
      </div>
    </div>
  )
}
