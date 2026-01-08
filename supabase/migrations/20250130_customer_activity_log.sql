-- Customer Activity Log Table
-- Records all customer actions for admin to understand user behavior

CREATE TABLE IF NOT EXISTS customer_activity_log (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    user_email TEXT NOT NULL,
    action_type TEXT NOT NULL, -- 'login', 'view_dashboard', 'upload_artwork', 'submit_rfq', 'view_order', 'view_quote', 'approve_proof', 'download_document', 'logout'
    action_details JSONB DEFAULT '{}', -- Additional details about the action
    page_path TEXT, -- The page where action occurred
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_activity_log_user_id ON customer_activity_log(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_user_email ON customer_activity_log(user_email);
CREATE INDEX IF NOT EXISTS idx_activity_log_action_type ON customer_activity_log(action_type);
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON customer_activity_log(created_at DESC);

-- RLS Policies
ALTER TABLE customer_activity_log ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own activity logs
CREATE POLICY "Users can insert own activity" ON customer_activity_log
    FOR INSERT
    WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Admin can view all activity logs
CREATE POLICY "Admin can view all activity" ON customer_activity_log
    FOR SELECT
    USING (
        auth.jwt() ->> 'email' = 'ryan@achievepack.com'
    );

-- Allow anonymous insert for login tracking before auth
CREATE POLICY "Allow anonymous activity logging" ON customer_activity_log
    FOR INSERT
    WITH CHECK (true);

-- Grant permissions
GRANT ALL ON customer_activity_log TO authenticated;
GRANT INSERT ON customer_activity_log TO anon;

-- Comment on table
COMMENT ON TABLE customer_activity_log IS 'Tracks all customer activities for behavior analysis';
