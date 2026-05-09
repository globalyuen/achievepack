-- Create table for Pouch.eco dynamic blog posts (migrated from AchievePack SEO)
CREATE TABLE IF NOT EXISTS pouch_seo_blog (
    id BIGSERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    content JSONB NOT NULL, -- Stores sections, FAQs, etc.
    category TEXT,
    image_url TEXT,
    author TEXT DEFAULT 'Pouch.eco Team',
    published_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    meta_title TEXT,
    meta_description TEXT,
    source_url TEXT -- Link to original achievepack.com page
);

-- Index for fast lookup by slug
CREATE INDEX IF NOT EXISTS pouch_seo_blog_slug_idx ON pouch_seo_blog (slug);

-- Enable RLS
ALTER TABLE pouch_seo_blog ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to pouch_seo_blog" 
ON pouch_seo_blog FOR SELECT 
TO public 
USING (true);
