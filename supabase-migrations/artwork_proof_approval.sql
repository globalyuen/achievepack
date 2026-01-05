-- Artwork Proof Approval System Migration
-- Run this in Supabase SQL Editor

-- 1. Add new columns to artwork_files table
ALTER TABLE public.artwork_files 
ADD COLUMN IF NOT EXISTS customer_code VARCHAR(10),
ADD COLUMN IF NOT EXISTS product_code VARCHAR(10),
ADD COLUMN IF NOT EXISTS version_number INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS artwork_code VARCHAR(30),
ADD COLUMN IF NOT EXISTS linked_order_id UUID,
ADD COLUMN IF NOT EXISTS linked_quote_id UUID,
ADD COLUMN IF NOT EXISTS link_type VARCHAR(10) DEFAULT 'none',
ADD COLUMN IF NOT EXISTS approval_type VARCHAR(20),
ADD COLUMN IF NOT EXISTS checklist_verified JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS approver_signature TEXT,
ADD COLUMN IF NOT EXISTS approver_company TEXT,
ADD COLUMN IF NOT EXISTS approved_date DATE,
ADD COLUMN IF NOT EXISTS approval_notes TEXT,
ADD COLUMN IF NOT EXISTS revision_count INTEGER DEFAULT 0;

-- 2. Add check constraints
ALTER TABLE public.artwork_files 
DROP CONSTRAINT IF EXISTS artwork_files_status_check;

ALTER TABLE public.artwork_files 
ADD CONSTRAINT artwork_files_status_check 
CHECK (status IN ('pending_review', 'in_review', 'prepress', 'proof_ready', 'approved', 'revision_needed', 'in_production'));

ALTER TABLE public.artwork_files 
DROP CONSTRAINT IF EXISTS artwork_files_link_type_check;

ALTER TABLE public.artwork_files 
ADD CONSTRAINT artwork_files_link_type_check 
CHECK (link_type IN ('order', 'quote', 'none'));

ALTER TABLE public.artwork_files 
DROP CONSTRAINT IF EXISTS artwork_files_approval_type_check;

ALTER TABLE public.artwork_files 
ADD CONSTRAINT artwork_files_approval_type_check 
CHECK (approval_type IS NULL OR approval_type IN ('approve_as_is', 'not_approved'));

-- 3. Add foreign key constraints (optional - depends on your table structure)
-- ALTER TABLE public.artwork_files 
-- ADD CONSTRAINT fk_artwork_linked_order 
-- FOREIGN KEY (linked_order_id) REFERENCES public.orders(id) ON DELETE SET NULL;

-- ALTER TABLE public.artwork_files 
-- ADD CONSTRAINT fk_artwork_linked_quote 
-- FOREIGN KEY (linked_quote_id) REFERENCES public.quotes(id) ON DELETE SET NULL;

-- 4. Create indexes for better search performance
CREATE INDEX IF NOT EXISTS idx_artwork_customer_code ON public.artwork_files(customer_code);
CREATE INDEX IF NOT EXISTS idx_artwork_product_code ON public.artwork_files(product_code);
CREATE INDEX IF NOT EXISTS idx_artwork_code ON public.artwork_files(artwork_code);
CREATE INDEX IF NOT EXISTS idx_artwork_linked_order ON public.artwork_files(linked_order_id);
CREATE INDEX IF NOT EXISTS idx_artwork_linked_quote ON public.artwork_files(linked_quote_id);
CREATE INDEX IF NOT EXISTS idx_artwork_status ON public.artwork_files(status);
CREATE INDEX IF NOT EXISTS idx_artwork_approval_type ON public.artwork_files(approval_type);

-- 5. Create function to auto-generate artwork_code
CREATE OR REPLACE FUNCTION public.generate_artwork_code()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.customer_code IS NOT NULL AND NEW.product_code IS NOT NULL THEN
    NEW.artwork_code := NEW.customer_code || '-' || 
      COALESCE(
        CASE 
          WHEN NEW.link_type = 'order' AND NEW.order_number IS NOT NULL 
            THEN REPLACE(REPLACE(NEW.order_number, 'ORD-', 'ORD'), '-', '')
          WHEN NEW.link_type = 'quote' AND NEW.quote_number IS NOT NULL 
            THEN REPLACE(REPLACE(NEW.quote_number, 'QUO-', 'QUO'), '-', '')
          ELSE 'NA'
        END,
        'NA'
      ) || '-' || 
      NEW.product_code || '-V' || 
      LPAD(COALESCE(NEW.version_number, 1)::text, 3, '0');
  END IF;
  RETURN NEW;
END;
$$;

-- 6. Create trigger for auto-generating artwork_code
DROP TRIGGER IF EXISTS trigger_generate_artwork_code ON public.artwork_files;
CREATE TRIGGER trigger_generate_artwork_code
BEFORE INSERT OR UPDATE ON public.artwork_files
FOR EACH ROW
EXECUTE FUNCTION public.generate_artwork_code();

-- 7. Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.generate_artwork_code() TO anon, authenticated;

-- Done! 
-- After running this migration, the artwork_files table will support:
-- - Customer codes (e.g., ACM01)
-- - Product codes (e.g., PKG01)
-- - Version numbers (1, 2, 3...)
-- - Auto-generated artwork codes (e.g., ACM01-ORD2401001-PKG01-V001)
-- - Linking to orders or quotes
-- - Proof approval workflow with checklist
