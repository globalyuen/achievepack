-- =====================================================
-- Supabase SQL Script: Create Bookkeeping App Tables
-- 执行步骤：
-- 1. 登录 Supabase Dashboard
-- 2. 进入你的项目
-- 3. 点击左侧 "SQL Editor"
-- 4. 创建新 Query
-- 5. 复制粘贴下面的 SQL 代码
-- 6. 点击 "Run" 执行
-- =====================================================

-- 1. Businesses Table (小生意表)
CREATE TABLE IF NOT EXISTS public.kid_bookkeeping_businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  emoji TEXT DEFAULT '📦',
  color_idx INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Custom Category Presets Table (收支項目類別表)
CREATE TABLE IF NOT EXISTS public.kid_bookkeeping_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('incoming', 'outgoing')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(business_name, name, type)
);

-- 3. Transactions Table (交易記錄表)
CREATE TABLE IF NOT EXISTS public.kid_bookkeeping_transactions (
  id TEXT PRIMARY KEY, -- maps to localStorage t-xxx IDs
  date TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('incoming', 'outgoing')),
  amount NUMERIC NOT NULL,
  original_amount NUMERIC NOT NULL,
  currency TEXT NOT NULL,
  business TEXT NOT NULL, -- business name
  label TEXT NOT NULL, -- category name
  description TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Disable Row Level Security (RLS) explicitly to allow clients with the anon key to read and write records.
ALTER TABLE public.kid_bookkeeping_businesses DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.kid_bookkeeping_categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.kid_bookkeeping_transactions DISABLE ROW LEVEL SECURITY;

-- Ensure all tables are exposed to the API (Fix for Supabase #45329)
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.kid_bookkeeping_businesses TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.kid_bookkeeping_categories TO anon, authenticated, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.kid_bookkeeping_transactions TO anon, authenticated, service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- Pre-populate default businesses
INSERT INTO public.kid_bookkeeping_businesses (name, emoji, color_idx)
VALUES 
  ('包裝買賣 📦', '📦', 0),
  ('車位出租 🅿️', '🅿️', 1),
  ('汽車出租 🚗', '🚗', 2),
  ('房屋出租 🏠', '🏠', 3)
ON CONFLICT (name) DO NOTHING;
