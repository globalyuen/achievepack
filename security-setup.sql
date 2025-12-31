-- ============================================
-- ACHIEVEPACK SECURITY SETUP SQL
-- Run this in Supabase SQL Editor
-- ============================================

-- B. SUPABASE RLS POLICIES
-- ============================================

-- 1. Enable RLS on all sensitive tables
ALTER TABLE crm_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 2. Admin-only policies for CRM tables
-- Only authenticated admin can access CRM data
CREATE POLICY "Admin only access" ON crm_inquiries
  FOR ALL USING (
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

CREATE POLICY "Admin only access" ON crm_activities
  FOR ALL USING (
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

-- 3. Users can only see their own orders
CREATE POLICY "Users see own orders" ON orders
  FOR SELECT USING (
    auth.uid() = user_id OR
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

CREATE POLICY "Admin manage all orders" ON orders
  FOR ALL USING (
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

-- 4. Profiles - users see only their own
CREATE POLICY "Users see own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admin see all profiles" ON profiles
  FOR SELECT USING (
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

-- D. AUDIT LOGGING
-- ============================================

-- Create audit log table
CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id TEXT,
  details JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on audit logs (admin only read)
ALTER TABLE admin_audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin read audit logs" ON admin_audit_logs
  FOR SELECT USING (
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

-- Allow service role to insert
CREATE POLICY "Service insert audit logs" ON admin_audit_logs
  FOR INSERT WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_audit_logs_created_at ON admin_audit_logs(created_at DESC);
CREATE INDEX idx_audit_logs_user_email ON admin_audit_logs(user_email);
CREATE INDEX idx_audit_logs_action ON admin_audit_logs(action);

-- ============================================
-- LOGIN TRACKING
-- ============================================

CREATE TABLE IF NOT EXISTS login_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  success BOOLEAN NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  failure_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for security monitoring
CREATE INDEX idx_login_attempts_email ON login_attempts(email);
CREATE INDEX idx_login_attempts_ip ON login_attempts(ip_address);
CREATE INDEX idx_login_attempts_created ON login_attempts(created_at DESC);

-- Public can insert (for login tracking)
ALTER TABLE login_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert login attempts" ON login_attempts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin read login attempts" ON login_attempts
  FOR SELECT USING (
    auth.jwt() ->> 'email' = 'ryan@achievepack.com'
  );

-- ============================================
-- RATE LIMITING VIEW (for monitoring)
-- ============================================

CREATE OR REPLACE VIEW failed_login_summary AS
SELECT 
  ip_address,
  COUNT(*) as attempt_count,
  MAX(created_at) as last_attempt
FROM login_attempts
WHERE success = false 
  AND created_at > NOW() - INTERVAL '1 hour'
GROUP BY ip_address
HAVING COUNT(*) >= 5
ORDER BY attempt_count DESC;