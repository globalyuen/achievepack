-- Adds attachments array to daily_reports
ALTER TABLE public.daily_reports 
ADD COLUMN IF NOT EXISTS attachments jsonb DEFAULT '[]'::jsonb;

-- Create storage bucket for daily_reports_files if it doesn't exist
INSERT INTO storage.buckets (id, name, public) 
VALUES ('daily_reports_files', 'daily_reports_files', true)
ON CONFLICT (id) DO NOTHING;

-- Grant public read access to the bucket
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'daily_reports_files');

-- Allow authenticated and anon inserts to the bucket
CREATE POLICY "Allow Uploads" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'daily_reports_files');

-- Allow authenticated and anon deletes from the bucket
CREATE POLICY "Allow Deletes" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'daily_reports_files');
