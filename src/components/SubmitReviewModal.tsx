import React, { useState, useRef, useEffect } from 'react'
import { X, Camera, Video, UploadCloud, Loader2, Star } from 'lucide-react'

interface SubmitReviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubmitReviewModal({ isOpen, onClose }: SubmitReviewModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    quote: ''
  })
  
  const [files, setFiles] = useState<{file: File, preview: string, type: 'image' | 'video'}[]>([])
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  
  useEffect(() => {
    if (isOpen) {
      // Reset state when opening
      setIsSuccess(false)
      setError(null)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', company: '', role: '', quote: '' })
      setFiles([])
      
      // Load Turnstile
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoadForReview'
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      const renderWidget = () => {
        const container = document.getElementById('turnstile-container-review')
        if (container && (window as any).turnstile) {
          (window as any).turnstile.render(container, {
            sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
            callback: (token: string) => setTurnstileToken(token),
            'expired-callback': () => setTurnstileToken(null),
            'error-callback': () => setError('Verification failed. Please refresh the page.'),
          })
        }
      }

      ;(window as any).onTurnstileLoadForReview = renderWidget
      if ((window as any).turnstile) renderWidget()
    }
  }, [isOpen])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const newFiles = Array.from(e.target.files).map(file => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('video') ? 'video' as const : 'image' as const
    }))
    setFiles(prev => [...prev, ...newFiles])
  }

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev]
      URL.revokeObjectURL(newFiles[index].preview)
      newFiles.splice(index, 1)
      return newFiles
    })
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const result = reader.result as string
        resolve(result.split(',')[1]) // remove the data:image/png;base64, part
      }
      reader.onerror = error => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!turnstileToken) {
      setError('Please complete the verification')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const attachments = await Promise.all(
        files.map(async f => ({
          name: f.file.name,
          contentType: f.file.type,
          content: await fileToBase64(f.file)
        }))
      )

      const response = await fetch('/api/submit-testimonial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
          attachments
        })
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
      } else {
        throw new Error(data.error || 'Failed to submit review')
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10"
        >
          <X className="h-5 w-5 text-neutral-700" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Share Your Experience</h2>
            <p className="text-neutral-600">Your feedback helps us improve and helps others make the right choice.</p>
          </div>

          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-green-500 fill-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h3>
              <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                Your review has been successfully submitted. We will review it and notify you once it is published on our website.
              </p>
              <button
                onClick={onClose}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Role (Optional)</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="Founder, CEO, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Your Review *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.quote}
                  onChange={e => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                  placeholder="Tell us what you loved about working with us..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">Add Photos or Video (Optional)</label>
                <div className="flex flex-wrap gap-4 mb-4">
                  {/* Photo Upload */}
                  <label className="cursor-pointer flex-1 min-w-[140px] flex flex-col items-center justify-center p-4 border-2 border-dashed border-neutral-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition">
                    <Camera className="h-6 w-6 text-neutral-500 mb-2" />
                    <span className="text-sm font-medium text-neutral-700">Take/Upload Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>

                  {/* Video Upload */}
                  <label className="cursor-pointer flex-1 min-w-[140px] flex flex-col items-center justify-center p-4 border-2 border-dashed border-neutral-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition">
                    <Video className="h-6 w-6 text-neutral-500 mb-2" />
                    <span className="text-sm font-medium text-neutral-700">Record/Upload Video</span>
                    <input
                      type="file"
                      accept="video/*"
                      capture="environment"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* Previews */}
                {files.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {files.map((f, i) => (
                      <div key={i} className="relative w-24 h-24 rounded-lg overflow-hidden border border-neutral-200">
                        {f.type === 'image' ? (
                          <img src={f.preview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <video muted={true} src={f.preview} className="w-full h-full object-cover" />
                        )}
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <div id="turnstile-container-review" className="my-4 flex justify-center"></div>

              <button
                type="submit"
                disabled={isSubmitting || !turnstileToken}
                className="w-full bg-primary-600 text-white font-semibold py-4 rounded-xl hover:bg-primary-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <UploadCloud className="h-5 w-5" />
                    Submit Review
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
