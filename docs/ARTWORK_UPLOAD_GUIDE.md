# Artwork Upload Function Implementation Guide

This document records how to implement a secure artwork file upload function using Supabase Storage + Database with RLS (Row Level Security).

## Architecture Overview

```
User Upload → Supabase Storage (file bytes) → Supabase Database (metadata record)
                    ↓                                    ↓
              artworks bucket                    artwork_files table
```

## Prerequisites

1. **Supabase Project** with:
   - Storage bucket: `artworks`
   - Database table: `artwork_files`
   - RLS policies configured

2. **Environment Variables**:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

---

## Step 1: Database Table Structure

Create the `artwork_files` table:

```sql
CREATE TABLE public.artwork_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  order_id UUID,
  order_number TEXT,
  name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT DEFAULT 'unknown',
  file_size INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending_review' CHECK (status IN ('pending_review', 'in_review', 'prepress', 'proof_ready', 'approved', 'revision_needed')),
  proof_url TEXT,
  admin_feedback TEXT,
  customer_comment TEXT,
  reviewed_by UUID,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for RLS performance
CREATE INDEX idx_artwork_files_user_id ON public.artwork_files(user_id);
```

---

## Step 2: RLS Helper Functions

Create helper functions for RLS policies:

```sql
-- Helper: check admin from JWT claims
CREATE OR REPLACE FUNCTION public.is_admin_from_jwt()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT (auth.jwt() ->> 'user_role') = 'admin'
         OR (auth.jwt() ->> 'role') = 'admin';
$$;

REVOKE ALL ON FUNCTION public.is_admin_from_jwt() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin_from_jwt() TO anon, authenticated;

-- Helper: ownership check for artwork_files
CREATE OR REPLACE FUNCTION public.is_owner_artwork_files(row public.artwork_files)
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT row.user_id = (SELECT auth.uid());
$$;

REVOKE ALL ON FUNCTION public.is_owner_artwork_files(public.artwork_files) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_owner_artwork_files(public.artwork_files) TO anon, authenticated;
```

---

## Step 3: RLS Policies

Enable RLS and create policies:

```sql
-- Enable RLS
ALTER TABLE public.artwork_files ENABLE ROW LEVEL SECURITY;

-- INSERT: owner or admin
CREATE POLICY "artwork_insert_owner_or_admin"
ON public.artwork_files
FOR INSERT
TO authenticated
WITH CHECK (
  is_admin_from_jwt()
  OR user_id = (SELECT auth.uid())
);

-- SELECT: owner or admin
CREATE POLICY "artwork_select_owner_or_admin"
ON public.artwork_files
FOR SELECT
TO authenticated
USING (
  is_admin_from_jwt()
  OR is_owner_artwork_files(artwork_files)
);

-- UPDATE: owner or admin
CREATE POLICY "artwork_update_owner_or_admin"
ON public.artwork_files
FOR UPDATE
TO authenticated
USING (
  is_admin_from_jwt()
  OR is_owner_artwork_files(artwork_files)
)
WITH CHECK (
  is_admin_from_jwt()
  OR is_owner_artwork_files(artwork_files)
);

-- DELETE: owner or admin
CREATE POLICY "artwork_delete_owner_or_admin"
ON public.artwork_files
FOR DELETE
TO authenticated
USING (
  is_admin_from_jwt()
  OR is_owner_artwork_files(artwork_files)
);
```

---

## Step 4: Storage Bucket Setup

In Supabase Dashboard → Storage:

1. Create bucket named `artworks`
2. Set bucket to **public** (for download URLs) or configure signed URLs
3. Add storage policies:

```sql
-- Allow authenticated users to upload to their own folder
CREATE POLICY "Users can upload artworks"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'artworks' 
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to read their own files
CREATE POLICY "Users can read own artworks"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'artworks'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow admins to read all
CREATE POLICY "Admins can read all artworks"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'artworks'
  AND (
    (auth.jwt() ->> 'user_role') = 'admin'
    OR (auth.jwt() ->> 'role') = 'admin'
  )
);
```

---

## Step 5: Frontend Implementation (React/TypeScript)

### Supabase Client Setup

```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

export type ArtworkFile = {
  id: string
  user_id: string
  order_id?: string
  order_number?: string
  name: string
  file_url: string
  file_type: string
  file_size: number
  status: 'pending_review' | 'in_review' | 'prepress' | 'proof_ready' | 'approved' | 'revision_needed'
  proof_url?: string
  admin_feedback?: string
  customer_comment?: string
  reviewed_by?: string
  reviewed_at?: string
  created_at: string
  updated_at: string
}
```

### Upload Handler Function

```typescript
// Upload artwork file handler
const handleArtworkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files
  if (!files || files.length === 0) return
  
  setUploading(true)
  setUploadError('')
  setUploadSuccess('')
  
  try {
    const uploadedFiles: string[] = []
    
    for (const file of Array.from(files)) {
      // 1. Validate file size (10MB limit)
      const maxSize = 10 * 1024 * 1024
      if (file.size > maxSize) {
        setUploadError(`File "${file.name}" is too large. Max 10MB.`)
        continue
      }
      
      // 2. Validate file type
      const isValid = file.name.match(/\.(ai|eps|pdf|png|jpg|jpeg|tiff|tif|zip|psd)$/i)
      if (!isValid) {
        setUploadError(`Invalid file type: ${file.name}`)
        continue
      }
      
      // 3. Upload to Supabase Storage
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
        throw new Error(uploadError.message || 'Failed to upload file')
      }
      
      // 4. Get public URL
      const { data: urlData } = supabase.storage
        .from('artworks')
        .getPublicUrl(uploadData?.path || fileName)
      const fileUrl = urlData.publicUrl
      
      // 5. Save record directly to Supabase (RLS handles access control)
      const { error: insertError } = await supabase
        .from('artwork_files')
        .insert({
          user_id: user?.id,  // CRITICAL: must match auth.uid() for RLS
          name: file.name,
          file_url: fileUrl,
          file_type: file.type || 'unknown',
          file_size: file.size,
          status: 'pending_review'
        })
      
      if (insertError) {
        setUploadError(`Record save failed: ${insertError.message}`)
        continue
      }
      
      uploadedFiles.push(file.name)
    }
    
    // Show success message
    if (uploadedFiles.length > 0) {
      setUploadSuccess(`✓ ${uploadedFiles.length} file(s) uploaded successfully.`)
    }
    
    // Refresh list
    fetchArtworks()
    
  } catch (error: any) {
    setUploadError(error.message || 'Failed to upload artwork')
  } finally {
    setUploading(false)
    e.target.value = ''  // Reset input
  }
}
```

### Upload with Order Association

```typescript
// Upload artwork for a specific order
const handleOrderArtworkUpload = async (
  e: React.ChangeEvent<HTMLInputElement>, 
  orderId: string, 
  orderNumber: string
) => {
  // ... same validation logic ...
  
  // Storage path includes order number
  const fileName = `${user?.id}/${orderNumber}/${Date.now()}.${ext}`
  
  // Insert includes order info
  const { error: insertError } = await supabase
    .from('artwork_files')
    .insert({
      user_id: user?.id,
      order_id: orderId,        // Link to order
      order_number: orderNumber, // For display
      name: file.name,
      file_url: fileUrl,
      file_type: file.type || 'unknown',
      file_size: file.size,
      status: 'pending_review'
    })
  
  // ... rest of logic ...
}
```

### Fetch Artworks (RLS Auto-filters)

```typescript
// Fetch user's artworks (RLS automatically filters by user_id)
const fetchArtworks = async () => {
  const { data, error } = await supabase
    .from('artwork_files')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (!error) {
    setArtworks(data || [])
  }
}
```

### UI Component

```tsx
{/* Upload Button */}
<label className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg cursor-pointer hover:bg-primary-700">
  <Upload className="h-4 w-4" />
  Upload Artwork
  <input
    type="file"
    className="hidden"
    accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.zip,.psd"
    multiple
    onChange={handleArtworkUpload}
    disabled={uploading}
  />
</label>

{/* Error/Success Messages */}
{uploadError && (
  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
    {uploadError}
  </div>
)}
{uploadSuccess && (
  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
    {uploadSuccess}
  </div>
)}
```

---

## Step 6: Admin Access

Admins need JWT claims to access all records:

1. Set up custom claims in Supabase Auth:
   - `user_role: 'admin'` or `role: 'admin'`

2. Admin can then:
   - View all artwork files
   - Update status, add feedback
   - Approve/request revisions

```typescript
// Admin: Update artwork status
const updateArtworkStatus = async (artworkId: string, status: string, feedback?: string) => {
  const { error } = await supabase
    .from('artwork_files')
    .update({ 
      status,
      admin_feedback: feedback,
      reviewed_by: adminUser?.id,
      reviewed_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .eq('id', artworkId)
  
  if (!error) {
    fetchArtworks()  // Refresh list
  }
}
```

---

## Key Points to Remember

1. **RLS is Critical**: Always set `user_id = auth.uid()` when inserting. RLS will reject otherwise.

2. **Direct Supabase Insert**: Use Supabase client directly instead of API routes to avoid server errors and simplify architecture.

3. **Storage Path Convention**: Use `{user_id}/{timestamp}.{ext}` to organize files by user.

4. **File Validation**: Always validate file size and type on client side before upload.

5. **Admin Claims**: Ensure admin users have proper JWT claims (`user_role=admin` or `role=admin`).

6. **Token Refresh**: After role changes, refresh the session for RLS to see updated claims.

---

## Rollback SQL (if needed)

```sql
-- Drop policies
DROP POLICY IF EXISTS "artwork_delete_owner_or_admin" ON public.artwork_files;
DROP POLICY IF EXISTS "artwork_update_owner_or_admin" ON public.artwork_files;
DROP POLICY IF EXISTS "artwork_select_owner_or_admin" ON public.artwork_files;
DROP POLICY IF EXISTS "artwork_insert_owner_or_admin" ON public.artwork_files;

-- Drop helper functions
DROP FUNCTION IF EXISTS public.is_owner_artwork_files(public.artwork_files);
DROP FUNCTION IF EXISTS public.is_admin_from_jwt();

-- Drop index
DROP INDEX IF EXISTS public.idx_artwork_files_user_id;

-- Drop table (CAUTION: destroys data)
-- DROP TABLE IF EXISTS public.artwork_files;
```

---

## Verification Checklist

- [ ] Regular user can upload files
- [ ] Regular user only sees their own files
- [ ] Regular user can only update/delete their own files
- [ ] Admin can see all files
- [ ] Admin can update status on any file
- [ ] File URLs are accessible for download
- [ ] Large files (>10MB) are rejected with clear message
