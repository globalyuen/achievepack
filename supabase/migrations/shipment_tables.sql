-- Shipment Document Hub Tables
-- Run this in Supabase SQL Editor

-- 货运批次（按订单/PO号组织）
CREATE TABLE IF NOT EXISTS shipment_batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_number VARCHAR(50) UNIQUE,
    order_number VARCHAR(100),
    customer_po VARCHAR(100),
    customer_id UUID REFERENCES profiles(id),
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    password VARCHAR(50) DEFAULT substring(md5(random()::text), 1, 8),
    shipping_status VARCHAR(50) DEFAULT 'pending',
    shipping_term VARCHAR(50),
    shipping_mode VARCHAR(50),
    delivery_to TEXT,
    tracking_number VARCHAR(100),
    carrier VARCHAR(100),
    estimated_delivery DATE,
    actual_delivery DATE,
    total_boxes INTEGER,
    total_weight_kg DECIMAL(10,2),
    total_volume_cbm DECIMAL(10,2),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 文档项目（Invoice, Packing List）
CREATE TABLE IF NOT EXISTS shipment_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID REFERENCES shipment_batches(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    file_url TEXT,
    file_type VARCHAR(100),
    file_size BIGINT,
    is_template BOOLEAN DEFAULT FALSE,
    content_json JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 交付凭证图片
CREATE TABLE IF NOT EXISTS shipment_proofs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID REFERENCES shipment_batches(id) ON DELETE CASCADE,
    type VARCHAR(50),
    name VARCHAR(255),
    file_url TEXT,
    file_type VARCHAR(100),
    notes TEXT,
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 运输状态更新历史
CREATE TABLE IF NOT EXISTS shipment_tracking_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID REFERENCES shipment_batches(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL,
    location VARCHAR(255),
    description TEXT,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    updated_by UUID REFERENCES profiles(id)
);

-- 文档模板库
CREATE TABLE IF NOT EXISTS document_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    file_url TEXT,
    preview_url TEXT,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_shipment_batches_customer ON shipment_batches(customer_id);
CREATE INDEX IF NOT EXISTS idx_shipment_batches_status ON shipment_batches(shipping_status);
CREATE INDEX IF NOT EXISTS idx_shipment_batches_batch_number ON shipment_batches(batch_number);
CREATE INDEX IF NOT EXISTS idx_shipment_documents_batch ON shipment_documents(batch_id);
CREATE INDEX IF NOT EXISTS idx_shipment_proofs_batch ON shipment_proofs(batch_id);
CREATE INDEX IF NOT EXISTS idx_shipment_tracking_batch ON shipment_tracking_history(batch_id);

-- Enable RLS
ALTER TABLE shipment_batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipment_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipment_proofs ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipment_tracking_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for shipment_batches
CREATE POLICY "Admin full access to shipment_batches" ON shipment_batches
    FOR ALL USING (
        EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Users can view own shipments" ON shipment_batches
    FOR SELECT USING (customer_id = auth.uid());

-- RLS Policies for shipment_documents
CREATE POLICY "Admin full access to shipment_documents" ON shipment_documents
    FOR ALL USING (
        EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Users can view own shipment documents" ON shipment_documents
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM shipment_batches 
            WHERE shipment_batches.id = shipment_documents.batch_id 
            AND shipment_batches.customer_id = auth.uid()
        )
    );

-- RLS Policies for shipment_proofs
CREATE POLICY "Admin full access to shipment_proofs" ON shipment_proofs
    FOR ALL USING (
        EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Users can view own shipment proofs" ON shipment_proofs
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM shipment_batches 
            WHERE shipment_batches.id = shipment_proofs.batch_id 
            AND shipment_batches.customer_id = auth.uid()
        )
    );

-- RLS Policies for shipment_tracking_history
CREATE POLICY "Admin full access to tracking_history" ON shipment_tracking_history
    FOR ALL USING (
        EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Users can view own tracking history" ON shipment_tracking_history
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM shipment_batches 
            WHERE shipment_batches.id = shipment_tracking_history.batch_id 
            AND shipment_batches.customer_id = auth.uid()
        )
    );

-- RLS Policies for document_templates
CREATE POLICY "Admin full access to templates" ON document_templates
    FOR ALL USING (
        EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Anyone can view templates" ON document_templates
    FOR SELECT USING (true);

-- Create storage bucket for shipment documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('shipments', 'shipments', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Admin can upload shipment files" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'shipments' AND
        EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Anyone can view shipment files" ON storage.objects
    FOR SELECT USING (bucket_id = 'shipments');

CREATE POLICY "Admin can delete shipment files" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'shipments' AND
        EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    );
