-- =====================================================
-- Supabase SQL Script: Create Search Analytics Table
-- =====================================================

CREATE TABLE IF NOT EXISTS search_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  domain TEXT NOT NULL, -- 'pouch.eco' or 'achievepack.com'
  ip_address TEXT,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indices for performance
CREATE INDEX IF NOT EXISTS idx_search_analytics_query ON search_analytics(query);
CREATE INDEX IF NOT EXISTS idx_search_analytics_created ON search_analytics(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_search_analytics_domain ON search_analytics(domain);

-- Enable RLS
ALTER TABLE search_analytics ENABLE ROW LEVEL SECURITY;

-- Policy: Admin can view all search analytics
CREATE POLICY "Admin can view all search analytics"
  ON search_analytics FOR SELECT
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Policy: Admin can delete search analytics
CREATE POLICY "Admin can delete search analytics"
  ON search_analytics FOR DELETE
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Comment
COMMENT ON TABLE search_analytics IS 'Logs of customer search queries across B2B and B2C sites';
