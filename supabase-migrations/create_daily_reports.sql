-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create daily_reports table
CREATE TABLE IF NOT EXISTS public.daily_reports (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  customer text NOT NULL,
  report_date date NOT NULL DEFAULT current_date,
  status text NOT NULL,
  category text NOT NULL,
  detail text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on row level security
ALTER TABLE public.daily_reports ENABLE ROW LEVEL SECURITY;

-- Allow authenticated and unauthenticated read/write (since you use app-level PIN protection on your route)
-- In production, restrict this to authenticated admins if you have Supabase Login.
CREATE POLICY "Enable read access for all users" ON public.daily_reports FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON public.daily_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON public.daily_reports FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for all users" ON public.daily_reports FOR DELETE USING (true);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_daily_reports_updated_at ON public.daily_reports;

CREATE TRIGGER trg_daily_reports_updated_at
BEFORE UPDATE ON public.daily_reports
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- Insert initial dummy data based on your previous snapshot
INSERT INTO public.daily_reports (customer, report_date, status, category, detail) VALUES 
('Rafaela Minatti - EcoPackables', '2026-03-24', 'Urgent', 'Quotes', 'Product: Flat Bottom Pouch (Unfurl version)
Sample: 10 bags to Vista, CA | Bulk: 5,000 bags to Bristol, CT
Status: Customer in a hurry - Need reply TODAY
Action: Re-quote for Unfurl version'),
('Nadine Likkle More Chocolate', '2026-03-16', 'In Progress', 'Production', 'Day 8 - Daily email reminder active'),
('Mark Powell', '2026-03-17', 'In Progress', 'Production', 'Day 7 - Daily email reminder active'),
('Jesus Shipping Arrangement', '2026-03-18', 'In Progress', 'Production', 'Day 6 - At Shenzhen freight forwarder'),
('Plastic Free Lab Test', '2026-03-19', 'In Progress', 'Production', 'Day 5 - Daily email reminder active'),
('Kostaman', '2026-03-16', 'Shipped', 'Shipping', 'SF1539401797884'),
('Icelynne', '2026-03-19', 'Shipped', 'Shipping', 'In transit'),
('Patrick', '2026-03-20', 'Shipped', 'Shipping', 'In transit'),
('Krissee', '2026-03-19', 'Shipped', 'Shipping', 'Order shipped - follow up'),
('Mikaela', '2026-03-03', 'Pending', 'Quotes', 'Price enquiry - needs follow-up ⚠️ (21 Days)'),
('UELAV8 (Justine Heaphy)', '2026-03-22', 'Pending', 'Quotes', 'Stand Up Pouch PET/VMPET/PE, 100-500 qty - Awaiting supplier quote'),
('Mike', '2026-03-19', 'Pending', 'Quotes', 'Stone Ground Grits Packaging (2lb, 5lb, 25lb) - Quote sent'),
('Katie', '2026-03-22', 'Pending', 'Quotes', 'Display Box - Box 1 quoted, Box 2 awaiting vendor calc'),
('Sebastien Ojaperv', '2026-03-24', 'New', 'Enquiries', 'Stick Packs/Sachets for Daily Vitamin Pack (Helpy) ~6x7cm, 360 packs'),
('Palina & Kenny Meeting', '2026-04-08', 'Scheduled', 'Meetings', 'Meeting preparation needed'),
('Jaspreet Visit', '2026-04-20', 'Scheduled', 'Meetings', 'HK & Shenzhen Arriving Apr 20, Leaving Apr 24')
ON CONFLICT DO NOTHING;
