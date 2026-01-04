-- Fix Artwork Files Table issues
-- 1. Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS artwork_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL references auth.users(id),
  order_id UUID,
  order_number TEXT,
  name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT,
  file_size BIGINT,
  status TEXT DEFAULT 'pending_review',
  customer_comment TEXT,
  admin_comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable RLS
ALTER TABLE artwork_files ENABLE ROW LEVEL SECURITY;

-- 3. Create policies (drop existing ones first to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own artwork" ON artwork_files;
DROP POLICY IF EXISTS "Users can update own artwork" ON artwork_files;
DROP POLICY IF EXISTS "Service role full access" ON artwork_files;

-- Policy: Users can view their own artwork
CREATE POLICY "Users can view own artwork" 
ON artwork_files FOR SELECT 
USING (auth.uid() = user_id);

-- Policy: Users can update their own artwork (for adding comments/revisions)
CREATE POLICY "Users can update own artwork" 
ON artwork_files FOR UPDATE 
USING (auth.uid() = user_id);

-- Policy: Service role (API) has full access
-- (Note: Service role bypasses RLS by default, but explicit policies can help if using local client with service role claim)
CREATE POLICY "Service role full access" 
ON artwork_files FOR ALL 
USING (true) 
WITH CHECK (true);

-- 4. Grant permissions
GRANT ALL ON artwork_files TO authenticated;
GRANT ALL ON artwork_files TO service_role;

-- 5. Ensure Storage Bucket Exists (SQL can't create buckets easily in all Supabase versions, but we can set policies)
-- The user said they added the bucket, so we assume 'artworks' bucket exists.
-- We should add storage policies just in case.

-- Policy: Users can upload their own artwork
-- Note: storage.objects RLS
BEGIN;
  -- Remove existing policies to avoid conflicts
  DROP POLICY IF EXISTS "Users can upload own artwork" ON storage.objects;
  DROP POLICY IF EXISTS "Users can view own artwork files" ON storage.objects;
  DROP POLICY IF EXISTS "Public can view artwork files" ON storage.objects;

  -- Create policies
  CREATE POLICY "Users can upload own artwork"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'artworks' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
  -- Explanation: We enforce the folder structure user_id/filename

  CREATE POLICY "Users can view own artwork files"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'artworks' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
  
  -- Or if we want public read access for the API to generate convenient URLs (optional, currently using signed or public)
  -- The code uses getPublicUrl, so the bucket must be Public.
COMMIT;

-- 6. Ensure the bucket is public
UPDATE storage.buckets
SET public = true
WHERE id = 'artworks';

