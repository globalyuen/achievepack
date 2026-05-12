-- =====================================================
-- Supplier RFQ Hub System
-- Multi-supplier quoting with AI-assisted parsing
-- =====================================================

-- 1. RFQ Batches (Header)
CREATE TABLE IF NOT EXISTS public.rfq_batches (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,                -- e.g. "Pet Food RFQ May 2024"
    raw_text text,                     -- Original pasted text from customer
    status text DEFAULT 'active',      -- 'active', 'closed', 'archived'
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- 2. RFQ Items (SKUs)
CREATE TABLE IF NOT EXISTS public.rfq_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id uuid REFERENCES public.rfq_batches(id) ON DELETE CASCADE,
    product_name text NOT NULL,
    style text,                        -- e.g. "Quad-seal", "Stand-up"
    dimensions text,                   -- e.g. "16 x 31 x 6 inches"
    material_spec text,                -- e.g. "6.0 mil mLLDPE"
    print_type text,                   -- e.g. "Flexo", "Gravure"
    target_quantities jsonb,           -- e.g. [10000, 25000, 50000]
    created_at timestamptz DEFAULT now()
);

-- 3. RFQ Participants (Suppliers & Access)
CREATE TABLE IF NOT EXISTS public.rfq_participants (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id uuid REFERENCES public.rfq_batches(id) ON DELETE CASCADE,
    supplier_name text NOT NULL,       -- e.g. "CWL", "KHH"
    access_password text NOT NULL,     -- The exclusive password
    last_accessed timestamptz,
    created_at timestamptz DEFAULT now()
);

-- 4. RFQ Submissions (Quotes from Suppliers)
CREATE TABLE IF NOT EXISTS public.rfq_submissions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id uuid REFERENCES public.rfq_batches(id) ON DELETE CASCADE,
    participant_id uuid REFERENCES public.rfq_participants(id) ON DELETE CASCADE,
    prices jsonb,                      -- { "item_id": { "10000": 1.25, "25000": 1.10 } }
    file_url text,                     -- Uploaded PDF/Excel quote
    supplier_comment text,
    submitted_at timestamptz DEFAULT now()
);

-- 5. Enable RLS
ALTER TABLE public.rfq_batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rfq_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rfq_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rfq_submissions ENABLE ROW LEVEL SECURITY;

-- 6. Basic Policies (Allow all for now, similar to artwork_batches)
CREATE POLICY "allow_all_rfq_batches" ON public.rfq_batches FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_rfq_items" ON public.rfq_items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_rfq_participants" ON public.rfq_participants FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_rfq_submissions" ON public.rfq_submissions FOR ALL USING (true) WITH CHECK (true);

-- 7. Trigger for updated_at
CREATE OR REPLACE FUNCTION public.set_rfq_updated_at()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER rfq_batches_updated_at
    BEFORE UPDATE ON public.rfq_batches
    FOR EACH ROW
    EXECUTE FUNCTION public.set_rfq_updated_at();
