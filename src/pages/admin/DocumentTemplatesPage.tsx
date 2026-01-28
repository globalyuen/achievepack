import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, Upload, FileText, Image, Trash2, Eye, Download,
  RefreshCw, X, Sparkles, Loader2, Check, Copy, Plus,
  FileImage, File, AlertCircle
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../lib/supabase'
import { toast } from 'sonner'

const ADMIN_EMAIL = 'ryan@achievepack.com'
const XAI_API_KEY = import.meta.env.VITE_XAI_API_KEY

interface DocumentTemplate {
  id: string
  type: string
  name: string
  file_url: string
  preview_url?: string
  extracted_data?: any
  is_default: boolean
  created_at: string
}

export default function DocumentTemplatesPage() {
  const { user, loading: authLoading } = useAuth()
  const [templates, setTemplates] = useState<DocumentTemplate[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [extracting, setExtracting] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadType, setUploadType] = useState<'invoice' | 'packing_list'>('invoice')
  const [uploadName, setUploadName] = useState('')
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState<DocumentTemplate | null>(null)

  // Fetch templates
  const fetchTemplates = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('document_templates')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setTemplates(data || [])
    } catch (err) {
      console.error('Error fetching templates:', err)
      toast.error('Failed to load templates')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (user?.email === ADMIN_EMAIL) {
      fetchTemplates()
    }
  }, [user, fetchTemplates])

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadFile(file)
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file)
        setPreviewUrl(url)
      } else {
        setPreviewUrl(null)
      }
      // Auto-set name from filename
      if (!uploadName) {
        setUploadName(file.name.replace(/\.[^/.]+$/, ''))
      }
    }
  }

  // Upload template
  const handleUpload = async () => {
    if (!uploadFile || !uploadName) {
      toast.error('Please select a file and enter a name')
      return
    }

    setUploading(true)
    try {
      // Upload file to storage
      const fileExt = uploadFile.name.split('.').pop()
      const fileName = `templates/${uploadType}/${Date.now()}.${fileExt}`
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('shipments')
        .upload(fileName, uploadFile)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('shipments')
        .getPublicUrl(fileName)

      // Save to database
      const { data, error } = await supabase
        .from('document_templates')
        .insert({
          type: uploadType,
          name: uploadName,
          file_url: publicUrl,
          preview_url: uploadFile.type.startsWith('image/') ? publicUrl : null,
          is_default: templates.filter(t => t.type === uploadType).length === 0
        })
        .select()
        .single()

      if (error) throw error

      setShowUploadModal(false)
      setUploadFile(null)
      setUploadName('')
      setPreviewUrl(null)
      
      // Show success state with the new template
      setUploadSuccess(data)
      toast.success('Template uploaded! Now extracting data with XAI...')
      await fetchTemplates()

      // Auto-extract if it's an image
      if (data && uploadFile.type.startsWith('image/')) {
        await extractWithXAI(data)
        setSelectedTemplate(data) // Auto-open the template to show results
      } else {
        setSelectedTemplate(data)
      }
      
      setUploadSuccess(null)
    } catch (err: any) {
      console.error('Upload error:', err)
      toast.error(err.message || 'Failed to upload template')
    } finally {
      setUploading(false)
    }
  }

  // Extract data with XAI
  const extractWithXAI = async (template: DocumentTemplate) => {
    if (!XAI_API_KEY) {
      toast.error('XAI API key not configured')
      return
    }

    setExtracting(template.id)
    try {
      // Convert image to base64
      const imageResponse = await fetch(template.file_url)
      const blob = await imageResponse.blob()
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result as string)
        reader.readAsDataURL(blob)
      })

      const prompt = template.type === 'invoice' 
        ? `Analyze this invoice image and extract all structured data including:
           - Invoice number, date, due date
           - Seller information (company name, address, contact)
           - Buyer information (company name, address, contact)
           - Line items (description, quantity, unit price, amount)
           - Subtotal, tax, shipping, total
           - Payment terms, bank details
           Return as JSON format.`
        : `Analyze this packing list image and extract all structured data including:
           - Packing list number, date
           - Shipper information
           - Consignee information  
           - Shipping details (carrier, tracking, vessel, port)
           - Package details (carton numbers, dimensions, weights)
           - Item list (description, quantity, carton allocation)
           - Total packages, gross weight, net weight, volume
           Return as JSON format.`

      const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${XAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'grok-2-vision-1212',
          messages: [
            {
              role: 'user',
              content: [
                { type: 'image_url', image_url: { url: base64 } },
                { type: 'text', text: prompt }
              ]
            }
          ],
          max_tokens: 2000,
          temperature: 0.1
        })
      })

      if (!response.ok) {
        throw new Error(`XAI API error: ${response.status}`)
      }

      const result = await response.json()
      const extractedText = result.choices?.[0]?.message?.content || ''
      
      // Try to parse JSON from response
      let extractedData = null
      try {
        const jsonMatch = extractedText.match(/```json\n?([\s\S]*?)\n?```/) || 
                          extractedText.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          extractedData = JSON.parse(jsonMatch[1] || jsonMatch[0])
        } else {
          extractedData = { raw_text: extractedText }
        }
      } catch {
        extractedData = { raw_text: extractedText }
      }

      // Update template with extracted data
      const { error } = await supabase
        .from('document_templates')
        .update({ extracted_data: extractedData })
        .eq('id', template.id)

      if (error) throw error

      toast.success('Data extracted successfully!')
      fetchTemplates()
    } catch (err: any) {
      console.error('XAI extraction error:', err)
      toast.error(err.message || 'Failed to extract data')
    } finally {
      setExtracting(null)
    }
  }

  // Delete template
  const handleDelete = async (template: DocumentTemplate) => {
    if (!confirm('Delete this template?')) return

    try {
      const { error } = await supabase
        .from('document_templates')
        .delete()
        .eq('id', template.id)

      if (error) throw error
      toast.success('Template deleted')
      fetchTemplates()
    } catch (err) {
      toast.error('Failed to delete template')
    }
  }

  // Set as default
  const setAsDefault = async (template: DocumentTemplate) => {
    try {
      // Remove default from other templates of same type
      await supabase
        .from('document_templates')
        .update({ is_default: false })
        .eq('type', template.type)

      // Set this one as default
      const { error } = await supabase
        .from('document_templates')
        .update({ is_default: true })
        .eq('id', template.id)

      if (error) throw error
      toast.success('Set as default template')
      fetchTemplates()
    } catch (err) {
      toast.error('Failed to set default')
    }
  }

  // Auth check
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <RefreshCw className="h-8 w-8 animate-spin text-primary-500" />
      </div>
    )
  }

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Access denied</p>
        </div>
      </div>
    )
  }

  const invoiceTemplates = templates.filter(t => t.type === 'invoice')
  const packingListTemplates = templates.filter(t => t.type === 'packing_list')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/ctrl-x9k7m/shipments" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-lg font-semibold text-gray-900">Document Templates</h1>
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Upload Template</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Processing Status Banner */}
        {(uploading || extracting) && (
          <div className="mb-6 bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-center gap-4">
            <div className="flex-shrink-0">
              <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
            </div>
            <div>
              <h3 className="font-medium text-purple-900">
                {uploading ? 'Uploading template...' : 'Extracting data with XAI...'}
              </h3>
              <p className="text-sm text-purple-700">
                {uploading 
                  ? 'Please wait while we upload your file'
                  : 'AI is analyzing the document to extract structured data'}
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="h-8 w-8 animate-spin text-primary-500" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Invoice Templates */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Invoice Templates ({invoiceTemplates.length})
              </h2>
              {invoiceTemplates.length === 0 ? (
                <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
                  <FileImage className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No invoice templates yet</p>
                  <button
                    onClick={() => { setUploadType('invoice'); setShowUploadModal(true) }}
                    className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Upload your first invoice template
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {invoiceTemplates.map(template => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      extracting={extracting === template.id}
                      onExtract={() => extractWithXAI(template)}
                      onDelete={() => handleDelete(template)}
                      onSetDefault={() => setAsDefault(template)}
                      onView={() => setSelectedTemplate(template)}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Packing List Templates */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <File className="h-5 w-5 text-green-500" />
                Packing List Templates ({packingListTemplates.length})
              </h2>
              {packingListTemplates.length === 0 ? (
                <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
                  <FileImage className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No packing list templates yet</p>
                  <button
                    onClick={() => { setUploadType('packing_list'); setShowUploadModal(true) }}
                    className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Upload your first packing list template
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {packingListTemplates.map(template => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      extracting={extracting === template.id}
                      onExtract={() => extractWithXAI(template)}
                      onDelete={() => handleDelete(template)}
                      onSetDefault={() => setAsDefault(template)}
                      onView={() => setSelectedTemplate(template)}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Upload Template</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Template Type</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setUploadType('invoice')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                      uploadType === 'invoice' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <FileText className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Invoice</span>
                  </button>
                  <button
                    onClick={() => setUploadType('packing_list')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                      uploadType === 'packing_list' 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <File className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Packing List</span>
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Template Name</label>
                <input
                  type="text"
                  value={uploadName}
                  onChange={e => setUploadName(e.target.value)}
                  placeholder="e.g., Standard Invoice Template"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File (Image/PDF)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-gray-300 transition cursor-pointer"
                     onClick={() => document.getElementById('file-input')?.click()}>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
                  ) : uploadFile ? (
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <File className="h-8 w-8" />
                      <span>{uploadFile.name}</span>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500">Click to upload or drag & drop</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG, PDF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="bg-purple-50 rounded-lg p-3 flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-purple-700">
                  After upload, XAI will automatically extract data from image templates to help generate new documents.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                disabled={uploading || !uploadFile || !uploadName}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4" />
                    Upload
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Template Detail Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold">{selectedTemplate.name}</h3>
              <button onClick={() => setSelectedTemplate(null)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Preview */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Preview</h4>
                {selectedTemplate.file_url.endsWith('.pdf') ? (
                  <iframe src={selectedTemplate.file_url} className="w-full h-96 rounded-lg border" />
                ) : (
                  <img src={selectedTemplate.file_url} alt={selectedTemplate.name} className="w-full rounded-lg border" />
                )}
              </div>
              {/* Extracted Data */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  Extracted Data
                </h4>
                {selectedTemplate.extracted_data ? (
                  <pre className="bg-gray-50 rounded-lg p-4 text-xs overflow-auto max-h-96 border">
                    {JSON.stringify(selectedTemplate.extracted_data, null, 2)}
                  </pre>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center border">
                    <Sparkles className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">No extracted data yet</p>
                    <button
                      onClick={() => { setSelectedTemplate(null); extractWithXAI(selectedTemplate) }}
                      className="mt-3 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Extract with XAI
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Template Card Component
function TemplateCard({ 
  template, 
  extracting, 
  onExtract, 
  onDelete, 
  onSetDefault, 
  onView 
}: {
  template: DocumentTemplate
  extracting: boolean
  onExtract: () => void
  onDelete: () => void
  onSetDefault: () => void
  onView: () => void
}) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition group">
      {/* Preview Image */}
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
        {template.file_url.endsWith('.pdf') ? (
          <div className="flex items-center justify-center h-full">
            <FileText className="h-16 w-16 text-gray-300" />
          </div>
        ) : (
          <img 
            src={template.file_url} 
            alt={template.name} 
            className="w-full h-full object-cover"
          />
        )}
        {template.is_default && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
            Default
          </span>
        )}
        {template.extracted_data && (
          <span className="absolute top-2 right-2 px-2 py-1 bg-purple-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            Extracted
          </span>
        )}
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
          <button
            onClick={onView}
            className="p-2 bg-white rounded-lg hover:bg-gray-100 transition"
            title="View"
          >
            <Eye className="h-5 w-5 text-gray-700" />
          </button>
          <a
            href={template.file_url}
            download
            className="p-2 bg-white rounded-lg hover:bg-gray-100 transition"
            title="Download"
          >
            <Download className="h-5 w-5 text-gray-700" />
          </a>
          <button
            onClick={onExtract}
            disabled={extracting}
            className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition disabled:opacity-50"
            title="Extract with XAI"
          >
            {extracting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Sparkles className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate">{template.name}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(template.created_at).toLocaleDateString()}
        </p>
        <div className="flex items-center gap-2 mt-3">
          {!template.is_default && (
            <button
              onClick={onSetDefault}
              className="text-xs text-primary-600 hover:text-primary-700"
            >
              Set as default
            </button>
          )}
          <button
            onClick={onDelete}
            className="text-xs text-red-500 hover:text-red-600 ml-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
