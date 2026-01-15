-- =====================================================
-- Supabase SQL Script: Create Production & Shipping Tables
-- 执行步骤：
-- 1. 登录 Supabase Dashboard
-- 2. 进入你的项目
-- 3. 点击左侧 "SQL Editor"
-- 4. 创建新 Query
-- 5. 复制粘贴下面的 SQL 代码
-- 6. 点击 "Run" 执行
-- =====================================================

-- =====================================================
-- 1. Production Jobs Table (生产任务表)
-- =====================================================
CREATE TABLE IF NOT EXISTS production_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- 关联字段
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
  
  -- 基本信息
  production_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'quality_check', 'completed', 'on_hold')),
  
  -- 生产详情
  product_name TEXT,
  quantity INTEGER,
  unit TEXT DEFAULT 'pcs', -- pcs / boxes / bags
  
  -- 工序追踪
  current_stage TEXT, -- prepress / printing / lamination / slitting / bag_making / quality_check / packing
  stages_completed TEXT[] DEFAULT '{}', -- 已完成工序数组
  
  -- 时间跟踪
  started_at TIMESTAMPTZ,
  estimated_completion TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  
  -- 备注
  notes TEXT,
  internal_notes TEXT, -- 仅内部可见
  
  -- 负责人
  assigned_to TEXT,
  
  -- 时间戳
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建索引以提升查询性能
CREATE INDEX IF NOT EXISTS idx_production_jobs_project ON production_jobs(project_id);
CREATE INDEX IF NOT EXISTS idx_production_jobs_order ON production_jobs(order_id);
CREATE INDEX IF NOT EXISTS idx_production_jobs_status ON production_jobs(status);
CREATE INDEX IF NOT EXISTS idx_production_jobs_created ON production_jobs(created_at DESC);

-- 添加自动更新 updated_at 的触发器
CREATE OR REPLACE FUNCTION update_production_jobs_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_production_jobs_updated_at
  BEFORE UPDATE ON production_jobs
  FOR EACH ROW
  EXECUTE FUNCTION update_production_jobs_updated_at();

-- 添加注释
COMMENT ON TABLE production_jobs IS 'Production jobs tracking table';
COMMENT ON COLUMN production_jobs.production_number IS 'Unique production number (e.g., PROD-2025-0001)';
COMMENT ON COLUMN production_jobs.status IS 'Production status: pending, in_progress, quality_check, completed, on_hold';
COMMENT ON COLUMN production_jobs.stages_completed IS 'Array of completed production stages';

-- =====================================================
-- 2. Shipping Records Table (物流记录表)
-- =====================================================
CREATE TABLE IF NOT EXISTS shipping_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- 关联字段
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
  production_job_id UUID REFERENCES production_jobs(id) ON DELETE SET NULL,
  
  -- 基本信息
  shipping_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'preparing' CHECK (status IN ('preparing', 'shipped', 'in_transit', 'delivered', 'returned', 'cancelled')),
  
  -- 物流信息
  carrier TEXT, -- UPS / FedEx / DHL / USPS / Other
  tracking_number TEXT,
  tracking_url TEXT,
  
  -- 包裹信息
  package_count INTEGER DEFAULT 1,
  total_weight DECIMAL(10, 2),
  weight_unit TEXT DEFAULT 'kg', -- kg / lbs
  dimensions TEXT, -- "L x W x H"
  
  -- 地址
  shipping_address JSONB,
  
  -- 时间
  shipped_at TIMESTAMPTZ,
  estimated_delivery TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  
  -- 照片和文档
  shipping_images TEXT[] DEFAULT '{}', -- 发货照片 URLs
  packing_list_url TEXT,
  invoice_url TEXT,
  
  -- 备注
  shipping_notes TEXT, -- 客户可见
  internal_notes TEXT, -- 仅内部
  
  -- 时间戳
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建索引以提升查询性能
CREATE INDEX IF NOT EXISTS idx_shipping_records_project ON shipping_records(project_id);
CREATE INDEX IF NOT EXISTS idx_shipping_records_order ON shipping_records(order_id);
CREATE INDEX IF NOT EXISTS idx_shipping_records_production ON shipping_records(production_job_id);
CREATE INDEX IF NOT EXISTS idx_shipping_records_status ON shipping_records(status);
CREATE INDEX IF NOT EXISTS idx_shipping_records_tracking ON shipping_records(tracking_number);
CREATE INDEX IF NOT EXISTS idx_shipping_records_created ON shipping_records(created_at DESC);

-- 添加自动更新 updated_at 的触发器
CREATE OR REPLACE FUNCTION update_shipping_records_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_shipping_records_updated_at
  BEFORE UPDATE ON shipping_records
  FOR EACH ROW
  EXECUTE FUNCTION update_shipping_records_updated_at();

-- 添加注释
COMMENT ON TABLE shipping_records IS 'Shipping records tracking table';
COMMENT ON COLUMN shipping_records.shipping_number IS 'Unique shipping number (e.g., SHIP-2025-0001)';
COMMENT ON COLUMN shipping_records.status IS 'Shipping status: preparing, shipped, in_transit, delivered, returned, cancelled';
COMMENT ON COLUMN shipping_records.shipping_images IS 'Array of shipping photo URLs';

-- =====================================================
-- 3. 启用 Row Level Security (RLS)
-- =====================================================
ALTER TABLE production_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipping_records ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- 4. 创建 RLS 策略 (Admin 全权访问)
-- =====================================================

-- Production Jobs: Admin 可以查看所有记录
CREATE POLICY "Admin can view all production jobs"
  ON production_jobs FOR SELECT
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Production Jobs: Admin 可以插入记录
CREATE POLICY "Admin can insert production jobs"
  ON production_jobs FOR INSERT
  WITH CHECK (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Production Jobs: Admin 可以更新记录
CREATE POLICY "Admin can update production jobs"
  ON production_jobs FOR UPDATE
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Production Jobs: Admin 可以删除记录
CREATE POLICY "Admin can delete production jobs"
  ON production_jobs FOR DELETE
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Shipping Records: Admin 可以查看所有记录
CREATE POLICY "Admin can view all shipping records"
  ON shipping_records FOR SELECT
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Shipping Records: Admin 可以插入记录
CREATE POLICY "Admin can insert shipping records"
  ON shipping_records FOR INSERT
  WITH CHECK (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Shipping Records: Admin 可以更新记录
CREATE POLICY "Admin can update shipping records"
  ON shipping_records FOR UPDATE
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- Shipping Records: Admin 可以删除记录
CREATE POLICY "Admin can delete shipping records"
  ON shipping_records FOR DELETE
  USING (auth.jwt() ->> 'email' = 'ryan@achievepack.com');

-- =====================================================
-- 5. 插入测试数据 (可选 - 用于验证表创建成功)
-- =====================================================

-- 注意：实际使用时注释掉这部分，避免插入测试数据

/*
-- 测试 Production Job
INSERT INTO production_jobs (
  production_number,
  status,
  product_name,
  quantity,
  unit,
  current_stage,
  notes
) VALUES (
  'PROD-2025-0001',
  'pending',
  'Coffee Bags - Stand Up Pouch',
  10000,
  'pcs',
  'prepress',
  'Test production job for system verification'
);

-- 测试 Shipping Record
INSERT INTO shipping_records (
  shipping_number,
  status,
  carrier,
  tracking_number,
  package_count,
  shipping_notes
) VALUES (
  'SHIP-2025-0001',
  'preparing',
  'UPS',
  'TEST123456',
  5,
  'Test shipping record for system verification'
);
*/

-- =====================================================
-- 执行完成！
-- =====================================================
-- 验证步骤：
-- 1. 在 Supabase Dashboard 左侧点击 "Table Editor"
-- 2. 确认看到 "production_jobs" 和 "shipping_records" 两个新表
-- 3. 检查表结构和索引是否正确创建
-- 4. 返回告诉我 "表创建成功"，我会继续完成前端代码
-- =====================================================
