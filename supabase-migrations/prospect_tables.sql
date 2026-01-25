-- ProspectPro Tables Migration
-- Run this in Supabase SQL Editor

-- 1. Search Query Table
CREATE TABLE IF NOT EXISTS prospect_search_query (
    id BIGSERIAL PRIMARY KEY,
    query TEXT NOT NULL,
    sender VARCHAR(50) NOT NULL DEFAULT 'ryan',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    total_results INTEGER DEFAULT 0,
    emails_found INTEGER DEFAULT 0,
    emails_sent INTEGER DEFAULT 0,
    status VARCHAR(50) DEFAULT 'pending'
);

-- 2. Prospect Table
CREATE TABLE IF NOT EXISTS prospect (
    id BIGSERIAL PRIMARY KEY,
    search_query_id BIGINT REFERENCES prospect_search_query(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    company VARCHAR(200),
    website VARCHAR(500),
    email VARCHAR(200),
    sales_pitch TEXT,
    email_sent BOOLEAN DEFAULT FALSE,
    email_sent_at TIMESTAMPTZ,
    email_delivered BOOLEAN DEFAULT FALSE,
    email_delivered_at TIMESTAMPTZ,
    email_opened BOOLEAN DEFAULT FALSE,
    email_opened_at TIMESTAMPTZ,
    email_clicked BOOLEAN DEFAULT FALSE,
    email_clicked_at TIMESTAMPTZ,
    brevo_message_id VARCHAR(100),
    business_type VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Lead Table (CRM)
CREATE TABLE IF NOT EXISTS prospect_lead (
    id BIGSERIAL PRIMARY KEY,
    prospect_id BIGINT REFERENCES prospect(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'new',
    priority VARCHAR(20) DEFAULT 'medium',
    lead_score INTEGER DEFAULT 0,
    industry VARCHAR(100),
    company_size VARCHAR(50),
    annual_revenue VARCHAR(50),
    packaging_needs TEXT,
    notes TEXT,
    next_follow_up TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Activity Table
CREATE TABLE IF NOT EXISTS prospect_activity (
    id BIGSERIAL PRIMARY KEY,
    lead_id BIGINT REFERENCES prospect_lead(id) ON DELETE CASCADE,
    activity_type VARCHAR(50) NOT NULL,
    subject VARCHAR(200),
    description TEXT,
    scheduled_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Automation Status Table
CREATE TABLE IF NOT EXISTS prospect_automation (
    id BIGSERIAL PRIMARY KEY,
    is_running BOOLEAN DEFAULT FALSE,
    last_run_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default automation status
INSERT INTO prospect_automation (id, is_running) VALUES (1, FALSE) ON CONFLICT (id) DO NOTHING;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_prospect_search_query_id ON prospect(search_query_id);
CREATE INDEX IF NOT EXISTS idx_prospect_email_sent ON prospect(email_sent);
CREATE INDEX IF NOT EXISTS idx_prospect_email ON prospect(email);
CREATE INDEX IF NOT EXISTS idx_prospect_lead_prospect_id ON prospect_lead(prospect_id);
CREATE INDEX IF NOT EXISTS idx_prospect_activity_lead_id ON prospect_activity(lead_id);

-- Enable Row Level Security
ALTER TABLE prospect_search_query ENABLE ROW LEVEL SECURITY;
ALTER TABLE prospect ENABLE ROW LEVEL SECURITY;
ALTER TABLE prospect_lead ENABLE ROW LEVEL SECURITY;
ALTER TABLE prospect_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE prospect_automation ENABLE ROW LEVEL SECURITY;

-- Create policies for service role access (allows all operations)
CREATE POLICY "Allow service role full access" ON prospect_search_query FOR ALL USING (true);
CREATE POLICY "Allow service role full access" ON prospect FOR ALL USING (true);
CREATE POLICY "Allow service role full access" ON prospect_lead FOR ALL USING (true);
CREATE POLICY "Allow service role full access" ON prospect_activity FOR ALL USING (true);
CREATE POLICY "Allow service role full access" ON prospect_automation FOR ALL USING (true);

-- 6. Email Unsubscribes Table
CREATE TABLE IF NOT EXISTS email_unsubscribes (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(200) NOT NULL UNIQUE,
    unsubscribed_at TIMESTAMPTZ DEFAULT NOW(),
    source VARCHAR(50) DEFAULT 'cold_email',
    reason TEXT
);

CREATE INDEX IF NOT EXISTS idx_email_unsubscribes_email ON email_unsubscribes(email);
ALTER TABLE email_unsubscribes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow service role full access" ON email_unsubscribes FOR ALL USING (true);

-- 7. RPC Function to increment emails_sent counter
CREATE OR REPLACE FUNCTION increment_emails_sent(search_id BIGINT)
RETURNS VOID AS $$
BEGIN
    UPDATE prospect_search_query
    SET emails_sent = emails_sent + 1
    WHERE id = search_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
