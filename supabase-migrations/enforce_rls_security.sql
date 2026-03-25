-- 1. 強化 daily_reports 資料表安全性
ALTER TABLE public.daily_reports ENABLE ROW LEVEL SECURITY;

-- 移除舊有的危險無限制權限
DROP POLICY IF EXISTS "Public access to daily_reports" ON public.daily_reports;

-- 建立必須帶有特製 Header 才能讀寫的新規則
CREATE POLICY "Secure daily_reports via Admin Key Header" 
ON public.daily_reports FOR ALL 
USING (current_setting('request.headers', true)::json->>'x-admin-key' = 'achieve-secure-77');


-- 2. 強化 webhook_logs 資料表安全性
ALTER TABLE public.webhook_logs ENABLE ROW LEVEL SECURITY;

-- 移除舊有的寬鬆權限
DROP POLICY IF EXISTS "Enable public read access for webhook_logs" ON public.webhook_logs;
DROP POLICY IF EXISTS "Enable public insert access for webhook_logs" ON public.webhook_logs;

-- 建立嚴格新規則
CREATE POLICY "Secure webhook_logs via Admin Key Header" 
ON public.webhook_logs FOR ALL 
USING (current_setting('request.headers', true)::json->>'x-admin-key' = 'achieve-secure-77');

