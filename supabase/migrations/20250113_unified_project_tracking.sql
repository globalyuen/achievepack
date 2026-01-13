-- =====================================================
-- Unified Project Tracking System
-- PRJ-YYYY-NNNN format for tracking orders through all stages
-- =====================================================

-- 1. Create projects table (统一订单追踪)
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_code TEXT NOT NULL UNIQUE,  -- "PRJ-2024-0001" 统一编码
  user_id UUID REFERENCES auth.users(id),
  customer_email TEXT,
  customer_name TEXT,
  
  -- Project type determines workflow
  project_type TEXT DEFAULT 'custom' CHECK (project_type IN ('rfq', 'stock', 'custom')),
  -- rfq: RFQ → Artwork → Custom Order → Shipping → Doc
  -- stock: Stock Order → Shipping → Doc
  -- custom: Custom Order → Shipping → Doc (no RFQ)
  
  -- Current stage in workflow
  current_stage TEXT DEFAULT 'rfq' CHECK (current_stage IN ('rfq', 'artwork', 'order', 'production', 'shipping', 'complete')),
  
  -- Stage completion flags
  rfq_completed BOOLEAN DEFAULT FALSE,
  artwork_completed BOOLEAN DEFAULT FALSE,
  order_completed BOOLEAN DEFAULT FALSE,
  shipping_completed BOOLEAN DEFAULT FALSE,
  
  -- Metadata
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Add project_id to existing tables
ALTER TABLE quotes ADD COLUMN IF NOT EXISTS project_id UUID REFERENCES projects(id);
ALTER TABLE artwork_files ADD COLUMN IF NOT EXISTS project_id UUID REFERENCES projects(id);
ALTER TABLE orders ADD COLUMN IF NOT EXISTS project_id UUID REFERENCES projects(id);
ALTER TABLE documents ADD COLUMN IF NOT EXISTS project_id UUID REFERENCES projects(id);

-- 3. Add order_type to orders table (stock vs custom)
ALTER TABLE orders ADD COLUMN IF NOT EXISTS order_type TEXT DEFAULT 'custom' CHECK (order_type IN ('stock', 'custom'));

-- 4. Create function to generate project code
CREATE OR REPLACE FUNCTION generate_project_code()
RETURNS TEXT AS $$
DECLARE
  year_part TEXT;
  next_num INTEGER;
  new_code TEXT;
BEGIN
  year_part := TO_CHAR(CURRENT_DATE, 'YYYY');
  
  -- Get the next sequence number for this year
  SELECT COALESCE(MAX(
    CAST(SUBSTRING(project_code FROM 10 FOR 4) AS INTEGER)
  ), 0) + 1
  INTO next_num
  FROM projects
  WHERE project_code LIKE 'PRJ-' || year_part || '-%';
  
  new_code := 'PRJ-' || year_part || '-' || LPAD(next_num::TEXT, 4, '0');
  
  RETURN new_code;
END;
$$ LANGUAGE plpgsql;

-- 5. Create trigger to auto-generate project code on insert
CREATE OR REPLACE FUNCTION set_project_code()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.project_code IS NULL OR NEW.project_code = '' THEN
    NEW.project_code := generate_project_code();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_set_project_code ON projects;
CREATE TRIGGER trigger_set_project_code
  BEFORE INSERT ON projects
  FOR EACH ROW
  EXECUTE FUNCTION set_project_code();

-- 6. Create trigger to update updated_at
CREATE OR REPLACE FUNCTION update_project_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_project_timestamp ON projects;
CREATE TRIGGER trigger_update_project_timestamp
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_project_timestamp();

-- 7. Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 8. RLS Policies
-- Users can view their own projects
CREATE POLICY "projects_select_own" ON projects
  FOR SELECT USING (
    auth.uid() = user_id 
    OR customer_email = (SELECT email FROM auth.users WHERE id = auth.uid())
  );

-- Users can insert their own projects
CREATE POLICY "projects_insert_own" ON projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own projects
CREATE POLICY "projects_update_own" ON projects
  FOR UPDATE USING (auth.uid() = user_id);

-- Admin can do everything (service role bypasses RLS)
-- For admin access via anon key, add specific policy if needed

-- 9. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_customer_email ON projects(customer_email);
CREATE INDEX IF NOT EXISTS idx_projects_project_code ON projects(project_code);
CREATE INDEX IF NOT EXISTS idx_projects_current_stage ON projects(current_stage);

CREATE INDEX IF NOT EXISTS idx_quotes_project_id ON quotes(project_id);
CREATE INDEX IF NOT EXISTS idx_artwork_files_project_id ON artwork_files(project_id);
CREATE INDEX IF NOT EXISTS idx_orders_project_id ON orders(project_id);
CREATE INDEX IF NOT EXISTS idx_documents_project_id ON documents(project_id);

-- =====================================================
-- Data Migration: Create projects for existing data
-- All existing data belongs to 456@achievepack.com
-- =====================================================

-- 10. Migrate existing orders to projects
DO $$
DECLARE
  order_rec RECORD;
  new_project_id UUID;
  customer_user_id UUID;
BEGIN
  -- Find user_id for 456@achievepack.com
  SELECT id INTO customer_user_id FROM auth.users WHERE email = '456@achievepack.com' LIMIT 1;
  
  -- Create a project for each existing order
  FOR order_rec IN 
    SELECT * FROM orders WHERE project_id IS NULL
  LOOP
    -- Create new project
    INSERT INTO projects (
      user_id,
      customer_email,
      customer_name,
      project_type,
      current_stage,
      order_completed,
      shipping_completed,
      notes
    ) VALUES (
      COALESCE(order_rec.user_id, customer_user_id),
      COALESCE(order_rec.customer_email, '456@achievepack.com'),
      order_rec.customer_name,
      COALESCE(order_rec.order_type, 'custom'),
      CASE 
        WHEN order_rec.status IN ('shipped', 'delivered') THEN 'complete'
        WHEN order_rec.tracking_number IS NOT NULL THEN 'shipping'
        ELSE 'order'
      END,
      order_rec.status IN ('confirmed', 'production', 'shipped', 'delivered'),
      order_rec.status IN ('shipped', 'delivered'),
      'Migrated from order: ' || order_rec.order_number
    ) RETURNING id INTO new_project_id;
    
    -- Link order to project
    UPDATE orders SET project_id = new_project_id WHERE id = order_rec.id;
    
    -- Link related artwork files by user_id or order_id
    UPDATE artwork_files 
    SET project_id = new_project_id 
    WHERE project_id IS NULL 
      AND (linked_order_id = order_rec.id OR order_id = order_rec.id);
  END LOOP;
END $$;

-- 11. Migrate existing quotes to projects (for RFQ that haven't become orders yet)
DO $$
DECLARE
  quote_rec RECORD;
  new_project_id UUID;
  customer_user_id UUID;
BEGIN
  -- Find user_id for 456@achievepack.com
  SELECT id INTO customer_user_id FROM auth.users WHERE email = '456@achievepack.com' LIMIT 1;
  
  FOR quote_rec IN 
    SELECT * FROM quotes WHERE project_id IS NULL
  LOOP
    -- Create new project for this quote
    INSERT INTO projects (
      user_id,
      customer_email,
      customer_name,
      project_type,
      current_stage,
      rfq_completed,
      notes
    ) VALUES (
      COALESCE(quote_rec.user_id, customer_user_id),
      '456@achievepack.com',
      NULL,
      'rfq',
      CASE 
        WHEN quote_rec.status = 'accepted' THEN 'order'
        ELSE 'rfq'
      END,
      quote_rec.status IN ('accepted', 'expired', 'rejected'),
      'Migrated from quote: ' || quote_rec.quote_number
    ) RETURNING id INTO new_project_id;
    
    -- Link quote to project
    UPDATE quotes SET project_id = new_project_id WHERE id = quote_rec.id;
    
    -- Link related artwork files
    UPDATE artwork_files 
    SET project_id = new_project_id 
    WHERE project_id IS NULL 
      AND linked_quote_id = quote_rec.id;
  END LOOP;
END $$;

-- 12. Create projects for orphan artwork files
DO $$
DECLARE
  artwork_rec RECORD;
  new_project_id UUID;
  customer_user_id UUID;
BEGIN
  SELECT id INTO customer_user_id FROM auth.users WHERE email = '456@achievepack.com' LIMIT 1;
  
  FOR artwork_rec IN 
    SELECT * FROM artwork_files WHERE project_id IS NULL
  LOOP
    INSERT INTO projects (
      user_id,
      customer_email,
      project_type,
      current_stage,
      notes
    ) VALUES (
      COALESCE(artwork_rec.user_id, customer_user_id),
      '456@achievepack.com',
      'custom',
      'artwork',
      'Migrated from artwork: ' || artwork_rec.name
    ) RETURNING id INTO new_project_id;
    
    UPDATE artwork_files SET project_id = new_project_id WHERE id = artwork_rec.id;
  END LOOP;
END $$;

-- 13. View to get project summary with all related items
CREATE OR REPLACE VIEW project_summary AS
SELECT 
  p.*,
  (SELECT COUNT(*) FROM quotes WHERE project_id = p.id) as quote_count,
  (SELECT COUNT(*) FROM artwork_files WHERE project_id = p.id) as artwork_count,
  (SELECT COUNT(*) FROM orders WHERE project_id = p.id) as order_count,
  (SELECT COUNT(*) FROM documents WHERE project_id = p.id) as document_count,
  (SELECT json_agg(json_build_object('id', id, 'quote_number', quote_number, 'status', status)) 
   FROM quotes WHERE project_id = p.id) as quotes,
  (SELECT json_agg(json_build_object('id', id, 'name', name, 'status', status, 'file_url', file_url)) 
   FROM artwork_files WHERE project_id = p.id) as artworks,
  (SELECT json_agg(json_build_object('id', id, 'order_number', order_number, 'status', status, 'total_amount', total_amount)) 
   FROM orders WHERE project_id = p.id) as orders
FROM projects p;

COMMENT ON TABLE projects IS 'Unified project tracking - links RFQ, Artwork, Orders, Shipping, and Documents with single PRJ-YYYY-NNNN code';
