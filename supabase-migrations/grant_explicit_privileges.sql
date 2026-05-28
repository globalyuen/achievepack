-- =====================================================
-- ACHIEVEPACK & POUCH.ECO EXPLICIT API GRANTS MIGRATION
-- Fixes Supabase Breaking Change #45329
-- Ensures all tables are exposed to Data/REST/GraphQL APIs
-- =====================================================

-- 1. Core System & Commerce Tables
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.profiles TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.projects TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.orders TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.quotes TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.newsletter_subscribers TO anon, authenticated, service_role;

-- 2. Custom Operations & Prepress Tracking
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.production_jobs TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.shipping_records TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.daily_reports TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.webhook_logs TO anon, authenticated, service_role;

-- 3. Artwork, Approvals & Comments
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.artwork_files TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.artwork_comments TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.artwork_batch_items TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.project_comments TO anon, authenticated, service_role;

-- 4. Blog & Search Analytics (B2C & B2B Hubs)
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.pouch_seo_blog TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.search_analytics TO anon, authenticated, service_role;

-- 5. CRM & Prospecting Infrastructure
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.prospect_search_query TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.prospect TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.prospect_lead TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.prospect_activity TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.prospect_automation TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.email_unsubscribes TO anon, authenticated, service_role;

-- 6. Admin Logs & Security attempts
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.admin_audit_logs TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.login_attempts TO anon, authenticated, service_role;

-- 7. Sequences (Important for Serial IDs)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;
