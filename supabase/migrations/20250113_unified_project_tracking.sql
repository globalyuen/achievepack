-- =====================================================
-- Unified Project Tracking System
-- PRJ-YYYY-NNNN format for tracking orders through all stages
-- =====================================================

-- Enable pgcrypto extension for UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1. Create projects table (统一订单追踪)
CREATE TABLE IF NOT EXISTS public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_code text NOT NULL UNIQUE,  -- "PRJ-2024-0001" 统一编码
  user_id uuid REFERENCES auth.users(id),
  customer_email text,
  customer_name text,
  
  -- Project type determines workflow
  project_type text DEFAULT 'custom',
  -- rfq: RFQ → Artwork → Custom Order → Shipping → Doc
  -- stock: Stock Order → Shipping → Doc
  -- custom: Custom Order → Shipping → Doc (no RFQ)
  
  -- Current status in workflow (matches TypeScript ProjectStatus type)
  status text DEFAULT 'rfq',
  -- status values: 'rfq' | 'artwork' | 'order' | 'production' | 'shipping' | 'complete'
  
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 2. Add project_id columns (no FKs yet - safer approach)
ALTER TABLE public.quotes ADD COLUMN IF NOT EXISTS project_id uuid;
ALTER TABLE public.artwork_files ADD COLUMN IF NOT EXISTS project_id uuid;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS project_id uuid;
ALTER TABLE public.documents ADD COLUMN IF NOT EXISTS project_id uuid;

-- 3. Index the new columns
CREATE INDEX IF NOT EXISTS quotes_project_id_idx ON public.quotes(project_id);
CREATE INDEX IF NOT EXISTS artwork_files_project_id_idx ON public.artwork_files(project_id);
CREATE INDEX IF NOT EXISTS orders_project_id_idx ON public.orders(project_id);
CREATE INDEX IF NOT EXISTS documents_project_id_idx ON public.documents(project_id);

-- 4. Add foreign keys as NOT VALID (avoids long locks)
ALTER TABLE public.quotes
  ADD CONSTRAINT quotes_project_id_fkey
  FOREIGN KEY (project_id) REFERENCES public.projects(id) NOT VALID;

ALTER TABLE public.artwork_files
  ADD CONSTRAINT artwork_files_project_id_fkey
  FOREIGN KEY (project_id) REFERENCES public.projects(id) NOT VALID;

ALTER TABLE public.orders
  ADD CONSTRAINT orders_project_id_fkey
  FOREIGN KEY (project_id) REFERENCES public.projects(id) NOT VALID;

ALTER TABLE public.documents
  ADD CONSTRAINT documents_project_id_fkey
  FOREIGN KEY (project_id) REFERENCES public.projects(id) NOT VALID;

-- 5. Validate foreign keys (lighter locks)
ALTER TABLE public.quotes VALIDATE CONSTRAINT quotes_project_id_fkey;
ALTER TABLE public.artwork_files VALIDATE CONSTRAINT artwork_files_project_id_fkey;
ALTER TABLE public.orders VALIDATE CONSTRAINT orders_project_id_fkey;
ALTER TABLE public.documents VALIDATE CONSTRAINT documents_project_id_fkey;

-- 6. Create function to generate project code
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

-- 7. Create trigger to auto-generate project code on insert
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

-- 8. Create trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS projects_set_updated_at ON public.projects;
CREATE TRIGGER projects_set_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- 9. Enable RLS and grant privileges
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
GRANT ALL ON public.projects TO authenticated;

-- 10. RLS Policies (owner-based access)
-- Users can view their own projects
DROP POLICY IF EXISTS "projects_select_own" ON public.projects;
CREATE POLICY "projects_select_own" ON public.projects
  FOR SELECT TO authenticated
  USING ((SELECT auth.uid()) = user_id);

-- Users can insert their own projects
DROP POLICY IF EXISTS "projects_insert_own" ON public.projects;
CREATE POLICY "projects_insert_own" ON public.projects
  FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- Users can update their own projects
DROP POLICY IF EXISTS "projects_update_own" ON public.projects;
CREATE POLICY "projects_update_own" ON public.projects
  FOR UPDATE TO authenticated
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

DROP POLICY IF EXISTS "projects_delete_own" ON public.projects;
CREATE POLICY "projects_delete_own" ON public.projects
  FOR DELETE TO authenticated
  USING ((SELECT auth.uid()) = user_id);

-- Admin can do everything (service role bypasses RLS)
-- For admin access via anon key, add specific policy if needed

-- 11. Additional indexes for performance
CREATE INDEX IF NOT EXISTS projects_user_id_idx ON public.projects(user_id);
CREATE INDEX IF NOT EXISTS projects_status_idx ON public.projects(status);
CREATE INDEX IF NOT EXISTS projects_code_idx ON public.projects(project_code);

-- =====================================================
-- Data Migration: Create projects for existing data
-- All existing data belongs to 456@achievepack.com
-- =====================================================

-- 12. Migrate existing orders to projects (OPTIONAL - run manually if needed)
-- This creates projects for existing orders and links them
/*
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
    INSERT INTO public.projects (
      user_id,
      customer_email,
      customer_name,
      project_type,
      status
    ) VALUES (
      COALESCE(order_rec.user_id, customer_user_id),
      COALESCE(order_rec.customer_email, '456@achievepack.com'),
      order_rec.customer_name,
      COALESCE(order_rec.order_type, 'custom'),
      CASE 
        WHEN order_rec.status IN ('shipped', 'delivered') THEN 'complete'
        WHEN order_rec.tracking_number IS NOT NULL THEN 'shipping'
        ELSE 'order'
      END
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
*/

-- 13. Migrate existing quotes to projects (OPTIONAL - run manually if needed)
/*
DO $$
DECLARE
  quote_rec RECORD;
  new_project_id UUID;
  customer_user_id UUID;
BEGIN
  SELECT id INTO customer_user_id FROM auth.users WHERE email = '456@achievepack.com' LIMIT 1;
  
  FOR quote_rec IN 
    SELECT * FROM quotes WHERE project_id IS NULL
  LOOP
    INSERT INTO public.projects (
      user_id,
      customer_email,
      project_type,
      status
    ) VALUES (
      COALESCE(quote_rec.user_id, customer_user_id),
      '456@achievepack.com',
      'rfq',
      CASE 
        WHEN quote_rec.status = 'accepted' THEN 'order'
        ELSE 'rfq'
      END
    ) RETURNING id INTO new_project_id;
    
    UPDATE quotes SET project_id = new_project_id WHERE id = quote_rec.id;
    
    UPDATE artwork_files 
    SET project_id = new_project_id 
    WHERE project_id IS NULL 
      AND linked_quote_id = quote_rec.id;
  END LOOP;
END $$;
*/

-- 14. Create projects for orphan artwork files (OPTIONAL - run manually if needed)
/*
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
    INSERT INTO public.projects (
      user_id,
      customer_email,
      project_type,
      status
    ) VALUES (
      COALESCE(artwork_rec.user_id, customer_user_id),
      '456@achievepack.com',
      'custom',
      'artwork'
    ) RETURNING id INTO new_project_id;
    
    UPDATE artwork_files SET project_id = new_project_id WHERE id = artwork_rec.id;
  END LOOP;
END $$;
*/

-- 15. View to get project summary with all related items
CREATE OR REPLACE VIEW public.project_summary AS
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
FROM public.projects p;

COMMENT ON TABLE public.projects IS 'Unified project tracking - links RFQ, Artwork, Orders, Shipping, and Documents with single PRJ-YYYY-NNNN code';

-- =====================================================
-- ROLLBACK PLAN (if needed)
-- =====================================================
/*
-- Remove FKs
ALTER TABLE public.quotes DROP CONSTRAINT IF EXISTS quotes_project_id_fkey;
ALTER TABLE public.artwork_files DROP CONSTRAINT IF EXISTS artwork_files_project_id_fkey;
ALTER TABLE public.orders DROP CONSTRAINT IF EXISTS orders_project_id_fkey;
ALTER TABLE public.documents DROP CONSTRAINT IF EXISTS documents_project_id_fkey;

-- Drop indexes
DROP INDEX IF EXISTS quotes_project_id_idx;
DROP INDEX IF EXISTS artwork_files_project_id_idx;
DROP INDEX IF EXISTS orders_project_id_idx;
DROP INDEX IF EXISTS documents_project_id_idx;

-- Drop columns
ALTER TABLE public.quotes DROP COLUMN IF EXISTS project_id;
ALTER TABLE public.artwork_files DROP COLUMN IF EXISTS project_id;
ALTER TABLE public.orders DROP COLUMN IF EXISTS project_id;
ALTER TABLE public.documents DROP COLUMN IF EXISTS project_id;

-- Drop parent table
DROP TABLE IF EXISTS public.projects;
*/
