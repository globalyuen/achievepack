-- Mini Sites CMS Tables
-- Run this migration in Supabase SQL Editor

-- 1. Create mini_sites table to store website configurations
CREATE TABLE IF NOT EXISTS mini_sites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  template VARCHAR(50) DEFAULT 'coffee-shop',
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_public BOOLEAN DEFAULT false,
  
  -- Content JSON (brand, hero, products, collections, mission, subscription)
  content JSONB NOT NULL DEFAULT '{}',
  
  -- SEO fields
  meta_title VARCHAR(255),
  meta_description TEXT,
  favicon_url VARCHAR(500),
  
  -- Styling
  primary_color VARCHAR(20) DEFAULT '#059669',
  secondary_color VARCHAR(20) DEFAULT '#0d9488',
  font_family VARCHAR(100) DEFAULT 'Inter',
  
  -- Owner
  owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE
);

-- 2. Create mini_site_access table for user authorization
CREATE TABLE IF NOT EXISTS mini_site_access (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id UUID NOT NULL REFERENCES mini_sites(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Access level
  role VARCHAR(20) DEFAULT 'viewer' CHECK (role IN ('viewer', 'editor', 'admin')),
  
  -- Access control
  can_edit BOOLEAN DEFAULT false,
  can_publish BOOLEAN DEFAULT false,
  can_manage_access BOOLEAN DEFAULT false,
  
  -- Invitation
  invited_by UUID REFERENCES auth.users(id),
  invited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  accepted_at TIMESTAMP WITH TIME ZONE,
  
  -- Status
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'revoked')),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Unique constraint: one access record per user per site
  UNIQUE(site_id, user_id)
);

-- 3. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_mini_sites_slug ON mini_sites(slug);
CREATE INDEX IF NOT EXISTS idx_mini_sites_status ON mini_sites(status);
CREATE INDEX IF NOT EXISTS idx_mini_sites_owner ON mini_sites(owner_id);
CREATE INDEX IF NOT EXISTS idx_mini_site_access_site ON mini_site_access(site_id);
CREATE INDEX IF NOT EXISTS idx_mini_site_access_user ON mini_site_access(user_id);

-- 4. Enable RLS
ALTER TABLE mini_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE mini_site_access ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for mini_sites

-- Admin can see all sites
CREATE POLICY "Admin can view all mini sites" ON mini_sites
  FOR SELECT TO authenticated
  USING (
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

-- Admin can manage all sites
CREATE POLICY "Admin can manage all mini sites" ON mini_sites
  FOR ALL TO authenticated
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Users can view public sites
CREATE POLICY "Anyone can view public mini sites" ON mini_sites
  FOR SELECT TO authenticated
  USING (is_public = true AND status = 'published');

-- Anonymous users can view public published sites (for mobile access without login)
CREATE POLICY "Anonymous can view public mini sites" ON mini_sites
  FOR SELECT TO anon
  USING (is_public = true AND status = 'published');

-- Users can view sites they have access to
CREATE POLICY "Users can view authorized mini sites" ON mini_sites
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM mini_site_access
      WHERE mini_site_access.site_id = mini_sites.id
      AND mini_site_access.user_id = auth.uid()
      AND mini_site_access.status = 'active'
    )
  );

-- Owners can manage their own sites
CREATE POLICY "Owners can manage their mini sites" ON mini_sites
  FOR ALL TO authenticated
  USING (owner_id = auth.uid())
  WITH CHECK (owner_id = auth.uid());

-- 6. RLS Policies for mini_site_access

-- Admin can see all access records
CREATE POLICY "Admin can view all access records" ON mini_site_access
  FOR SELECT TO authenticated
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Admin can manage all access records
CREATE POLICY "Admin can manage all access records" ON mini_site_access
  FOR ALL TO authenticated
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Users can see their own access
CREATE POLICY "Users can view their own access" ON mini_site_access
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

-- Site owners can manage access
CREATE POLICY "Site owners can manage access" ON mini_site_access
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM mini_sites
      WHERE mini_sites.id = mini_site_access.site_id
      AND mini_sites.owner_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM mini_sites
      WHERE mini_sites.id = mini_site_access.site_id
      AND mini_sites.owner_id = auth.uid()
    )
  );

-- 7. Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_mini_site_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. Triggers for updated_at
DROP TRIGGER IF EXISTS mini_sites_updated_at ON mini_sites;
CREATE TRIGGER mini_sites_updated_at
  BEFORE UPDATE ON mini_sites
  FOR EACH ROW
  EXECUTE FUNCTION update_mini_site_timestamp();

DROP TRIGGER IF EXISTS mini_site_access_updated_at ON mini_site_access;
CREATE TRIGGER mini_site_access_updated_at
  BEFORE UPDATE ON mini_site_access
  FOR EACH ROW
  EXECUTE FUNCTION update_mini_site_timestamp();

-- 9. Insert default Achieve Coffee demo site
INSERT INTO mini_sites (
  name,
  slug,
  description,
  template,
  status,
  is_public,
  content,
  meta_title,
  meta_description
) VALUES (
  'Achieve Coffee',
  'achieve-coffee-demo',
  'Demo coffee shop website showcasing Achieve Pack sustainable packaging',
  'coffee-shop',
  'published',
  true,
  '{
    "brand": {
      "name": "Achieve Coffee",
      "tagline": "Go Against the Grain",
      "taglineWords": ["Go", "Against", "the", "Grain"],
      "description": "Surrender to the moment with each sip and every cup of our wide and varied specialty coffee selection.",
      "ctaText": "Shop Now",
      "ctaLink": "#shop"
    },
    "hero": {
      "backgroundImage": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80",
      "overlayOpacity": 0.4
    },
    "marquee": {
      "text": "NEW * FRESH OFF THE TREE * NEW",
      "speed": 30
    },
    "products": [
      {
        "id": "1",
        "name": "Achieve Signature Blend",
        "price": 29.00,
        "type": "Single Origin",
        "origin": "Ethiopia",
        "process": "Natural",
        "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80"
      },
      {
        "id": "2",
        "name": "Morning Ritual",
        "price": 25.00,
        "type": "Single Origin",
        "origin": "Colombia",
        "process": "Washed",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80"
      },
      {
        "id": "3",
        "name": "Red Honey Reserve",
        "price": 34.00,
        "type": "Single Origin",
        "origin": "Costa Rica",
        "process": "Red Honey",
        "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
      }
    ],
    "collections": [
      {
        "id": "limited",
        "name": "Limited Series",
        "logo": "LIMITED",
        "description": "They are the highest echelon of quality we find with producers we already work with.",
        "bgColor": "from-amber-900 to-amber-950",
        "images": [
          "https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80"
        ]
      },
      {
        "id": "bright",
        "name": "Bright Series",
        "logo": "BRIGHT",
        "description": "They are developed with bright aromatic flavors in mind.",
        "bgColor": "from-orange-800 to-orange-950",
        "images": [
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
          "https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80"
        ]
      },
      {
        "id": "warm",
        "name": "Warm Series",
        "logo": "WARM",
        "description": "It showcases the personality of the coffee without adding a burnt taste.",
        "bgColor": "from-stone-800 to-stone-950",
        "images": [
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
          "https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80"
        ]
      }
    ],
    "mission": {
      "title": "Our Mission",
      "content": "We have been accused of having a one-track mind. And to those accusations we say - thank you.",
      "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80",
      "coordinates": "22.3193° N — 114.1694° E"
    },
    "subscription": {
      "title": "Never Run Out",
      "steps": ["Select your coffee and size", "Select your frequency", "Sit back and Achieve"],
      "discount": "Save up to 15% on every order"
    }
  }',
  'Achieve Coffee - Premium Sustainable Coffee',
  'Experience premium specialty coffee in sustainable packaging by Achieve Pack'
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();
