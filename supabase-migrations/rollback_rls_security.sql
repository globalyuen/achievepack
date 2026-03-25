-- 退回原本的「公用讀寫規則」(先確保 Dashboard 功能可以立即恢復運作)
-- 因為自訂 Header 被 Supabase 的 CORS 防火牆阻擋了！

ALTER TABLE public.daily_reports ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Secure daily_reports via Admin Key Header" ON public.daily_reports;
CREATE POLICY "Public access to daily_reports" ON public.daily_reports FOR ALL USING (true);


ALTER TABLE public.webhook_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Secure webhook_logs via Admin Key Header" ON public.webhook_logs;
CREATE POLICY "Enable public read access for webhook_logs" ON public.webhook_logs FOR SELECT USING (true);
CREATE POLICY "Enable public insert access for webhook_logs" ON public.webhook_logs FOR INSERT WITH CHECK (true);
