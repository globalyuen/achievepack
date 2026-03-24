CREATE TABLE IF NOT EXISTS public.webhook_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  status text,
  source text,
  message text,
  raw_data jsonb
);

ALTER TABLE public.webhook_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public read access for webhook_logs" 
ON public.webhook_logs FOR SELECT USING (true);

CREATE POLICY "Enable public insert access for webhook_logs" 
ON public.webhook_logs FOR INSERT WITH CHECK (true);
