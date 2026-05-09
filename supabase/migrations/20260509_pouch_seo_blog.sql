-- Create pouch_seo_blog table
CREATE TABLE IF NOT EXISTS pouch_seo_blog (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content JSONB NOT NULL,
  category TEXT DEFAULT 'Packaging Guide',
  image_url TEXT,
  meta_title TEXT,
  meta_description TEXT,
  source_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE pouch_seo_blog ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON pouch_seo_blog
  FOR SELECT USING (true);

-- Allow service role to manage
CREATE POLICY "Allow service role management" ON pouch_seo_blog
  USING (true)
  WITH CHECK (true);
