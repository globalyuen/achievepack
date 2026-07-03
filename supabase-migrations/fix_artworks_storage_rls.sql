-- ============================================
-- FIX ARTWORKS STORAGE BUCKET RLS POLICIES
-- Run this in the Supabase SQL Editor
-- ============================================

-- 1. Ensure the "artworks" bucket exists and is public
INSERT INTO storage.buckets (id, name, public)
VALUES ('artworks', 'artworks', true)
ON CONFLICT (id) DO UPDATE
SET public = true;

-- 2. Drop existing restrictive policies on storage.objects for "artworks" bucket
DROP POLICY IF EXISTS "Users can upload own artwork" ON storage.objects;
DROP POLICY IF EXISTS "Users can view own artwork files" ON storage.objects;
DROP POLICY IF EXISTS "Public can view artwork files" ON storage.objects;
DROP POLICY IF EXISTS "Allow Uploads to artworks" ON storage.objects;
DROP POLICY IF EXISTS "Allow Selects from artworks" ON storage.objects;
DROP POLICY IF EXISTS "Allow Updates to artworks" ON storage.objects;
DROP POLICY IF EXISTS "Allow Deletes from artworks" ON storage.objects;

-- 3. Create new RLS policies for the "artworks" bucket that support both standard and resumable (TUS) uploads
-- Note: Resumable uploads require both INSERT and SELECT permissions on storage.objects to verify and complete the upload.

-- Policy: Allow both authenticated and anonymous users to upload (INSERT) files to the "artworks" bucket
CREATE POLICY "Allow Uploads to artworks"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'artworks');

-- Policy: Allow both authenticated and anonymous users to view/retrieve (SELECT) files from the "artworks" bucket
-- (Required for TUS upload completion and general read access)
CREATE POLICY "Allow Selects from artworks"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'artworks');

-- Policy: Allow both authenticated and anonymous users to update (UPDATE) files in the "artworks" bucket
CREATE POLICY "Allow Updates to artworks"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'artworks')
WITH CHECK (bucket_id = 'artworks');

-- Policy: Allow authenticated users (e.g., admins) to delete files from the "artworks" bucket
CREATE POLICY "Allow Deletes from artworks"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'artworks');
