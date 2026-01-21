CREATE TABLE IF NOT EXISTS artwork_batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_name TEXT NOT NULL,
    password TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    customer_name TEXT,
    customer_email TEXT,
    overall_comment TEXT,
    approved_by_name TEXT,
    approved_by_company TEXT,
    approved_at TIMESTAMPTZ,
    total_items INTEGER DEFAULT 0,
    approved_count INTEGER DEFAULT 0,
    rejected_count INTEGER DEFAULT 0,
    created_by UUID,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS artwork_batch_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID REFERENCES artwork_batches(id) ON DELETE CASCADE,
    artwork_id UUID,
    name TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_type TEXT,
    file_size INTEGER,
    ai_analysis JSONB,
    status TEXT DEFAULT 'pending',
    customer_comment TEXT,
    approval_type TEXT,
    checklist JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE artwork_batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE artwork_batch_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_all_batches" ON artwork_batches FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_items" ON artwork_batch_items FOR ALL USING (true) WITH CHECK (true);
