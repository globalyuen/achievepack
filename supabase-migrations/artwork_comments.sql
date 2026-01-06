-- Artwork Comments Table for Customer-Admin Exchange
-- Run this in Supabase SQL Editor

-- Create artwork_comments table
CREATE TABLE IF NOT EXISTS public.artwork_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artwork_id UUID NOT NULL REFERENCES public.artwork_files(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  user_email TEXT,
  user_name TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for fast lookup
CREATE INDEX IF NOT EXISTS idx_artwork_comments_artwork_id ON public.artwork_comments(artwork_id);
CREATE INDEX IF NOT EXISTS idx_artwork_comments_user_id ON public.artwork_comments(user_id);
CREATE INDEX IF NOT EXISTS idx_artwork_comments_created_at ON public.artwork_comments(created_at);

-- Enable RLS
ALTER TABLE public.artwork_comments ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view comments on their own artwork
CREATE POLICY "Users can view comments on own artwork"
ON public.artwork_comments
FOR SELECT
TO authenticated
USING (
  artwork_id IN (
    SELECT id FROM public.artwork_files WHERE user_id = auth.uid()
  )
  OR (auth.jwt() ->> 'email') = 'ryan@achievepack.com'
);

-- Policy: Users can insert comments on their own artwork
CREATE POLICY "Users can insert comments on own artwork"
ON public.artwork_comments
FOR INSERT
TO authenticated
WITH CHECK (
  artwork_id IN (
    SELECT id FROM public.artwork_files WHERE user_id = auth.uid()
  )
  OR (auth.jwt() ->> 'email') = 'ryan@achievepack.com'
);

-- Policy: Admin can view all comments
CREATE POLICY "Admin can view all comments"
ON public.artwork_comments
FOR SELECT
TO authenticated
USING (
  (auth.jwt() ->> 'email') = 'ryan@achievepack.com'
);

-- Policy: Admin can insert comments on any artwork
CREATE POLICY "Admin can insert any comment"
ON public.artwork_comments
FOR INSERT
TO authenticated
WITH CHECK (
  (auth.jwt() ->> 'email') = 'ryan@achievepack.com'
);
