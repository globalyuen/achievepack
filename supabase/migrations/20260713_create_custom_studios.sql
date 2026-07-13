-- Migration: Create custom_studios table for custom 3D studio sharing links (pouch.eco/:slug)
-- Date: 2026-07-13

CREATE TABLE IF NOT EXISTS custom_studios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  company_name VARCHAR(255),
  design_data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast lookup by slug
CREATE INDEX IF NOT EXISTS idx_custom_studios_slug ON custom_studios(slug);

-- Enable RLS
ALTER TABLE custom_studios ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public read access to custom_studios (so anyone with the link can view it)
CREATE POLICY "Allow public read access to custom_studios" ON custom_studios
  FOR SELECT USING (true);

-- Policy 2: Allow public insert access to custom_studios (so anyone can save a design)
CREATE POLICY "Allow public insert access to custom_studios" ON custom_studios
  FOR INSERT WITH CHECK (true);

-- Policy 3: Allow admin (ryan@achievepack.com) to perform all actions
CREATE POLICY "Admin can manage all custom_studios" ON custom_studios
  FOR ALL TO authenticated
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'ryan@achievepack.com');
