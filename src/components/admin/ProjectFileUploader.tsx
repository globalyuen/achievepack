import React, { useState, useRef } from 'react'
import { Upload, X, File, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface FileUploadProps {
    projectId: string
    onUploadComplete: () => void
    allowedTypes?: string[]
    maxSize?: number // in MB
}

const ProjectFileUploader: React.FC<FileUploadProps> = ({
    projectId,
    onUploadComplete,
    allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/svg+xml'],
    maxSize = 20
}) => {
    const [dragging, setDragging] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFile = async (file: File) => {
        if (!file) return
        setError(null)
        setSuccess(false)

        // Validate size
        if (file.size > maxSize * 1024 * 1024) {
            setError(`File is too large. Max size is ${maxSize}MB.`)
            return
        }

        // Validate type
        if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
            setError('File type not supported.')
            return
        }

        setUploading(true)
        try {
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
            const filePath = `project-docs/${projectId}/${fileName}`

            // 1. Upload to Supabase Storage
            const { error: storageError, data: storageData } = await supabase.storage
                .from('artworks') // Use existing artworks bucket for now
                .upload(filePath, file)

            if (storageError) throw storageError

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('artworks')
                .getPublicUrl(filePath)

            // 3. Create Document Record
            const { error: dbError } = await supabase.from('documents').insert({
                project_id: projectId,
                name: file.name,
                file_url: publicUrl,
                type: file.type || 'unknown',
                description: 'Uploaded via Project Detail Page',
                is_public: false
            })

            if (dbError) throw dbError

            // 4. Create Activity Note
            await supabase.from('project_comments').insert({
                project_id: projectId,
                message: `Uploaded file: ${file.name}`,
                message_type: 'status',
                is_admin: true
            })

            setSuccess(true)
            onUploadComplete()
        } catch (err: any) {
            console.error('Upload error:', err)
            setError(err.message || 'Failed to upload file.')
        } finally {
            setUploading(false)
        }
    }

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setDragging(false)
        const file = e.dataTransfer.files?.[0]
        if (file) handleFile(file)
    }

    return (
        <div className="space-y-4">
            <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-3xl p-10 text-center cursor-pointer transition-all duration-300 ${dragging ? 'border-primary-500 bg-primary-50' :
                        uploading ? 'border-gray-200 bg-gray-50' :
                            'border-gray-200 hover:border-primary-400 hover:bg-gray-50'
                    }`}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                    className="hidden"
                />

                <div className="flex flex-col items-center">
                    {uploading ? (
                        <div className="space-y-3">
                            <Loader2 className="h-12 w-12 text-primary-500 animate-spin mx-auto" />
                            <p className="text-sm font-bold text-gray-900">Uploading your file...</p>
                        </div>
                    ) : success ? (
                        <div className="space-y-3 animate-in zoom-in-75 duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <p className="text-sm font-bold text-gray-900">Upload Successful!</p>
                            <p className="text-xs text-gray-500">Document has been added to project.</p>
                        </div>
                    ) : (
                        <>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${dragging ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'}`}>
                                <Upload className="h-8 w-8" />
                            </div>
                            <h3 className="text-base font-bold text-gray-900 mb-1">Click or drag to upload</h3>
                            <p className="text-xs text-gray-500 max-w-xs mx-auto">
                                Supports AI, PSD, PDF, PNG, JPG. Max {maxSize}MB.
                            </p>
                        </>
                    )}
                </div>
            </div>

            {error && (
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-3 animate-in slide-in-from-top-1">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <p className="text-xs font-bold text-red-700">{error}</p>
                    <button onClick={() => setError(null)} className="ml-auto p-1 hover:bg-red-100 rounded-lg transition">
                        <X className="h-4 w-4 text-red-400" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProjectFileUploader
