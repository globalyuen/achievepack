-- Create calendly_inquiries table
CREATE TABLE IF NOT EXISTS public.calendly_inquiries (
  id text PRIMARY KEY, -- file name without .md
  name text NOT NULL,
  email text,
  phone text,
  meeting_time text,
  duration text,
  inquiry text,
  raw_date text,
  source_file text,
  status text NOT NULL DEFAULT '未跟進',
  notes text DEFAULT '',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.calendly_inquiries ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Enable read for all" ON public.calendly_inquiries;
DROP POLICY IF EXISTS "Enable insert for all" ON public.calendly_inquiries;
DROP POLICY IF EXISTS "Enable update for all" ON public.calendly_inquiries;
DROP POLICY IF EXISTS "Enable delete for all" ON public.calendly_inquiries;

-- Policies for RLS
CREATE POLICY "Enable read for all" ON public.calendly_inquiries FOR SELECT USING (true);
CREATE POLICY "Enable insert for all" ON public.calendly_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all" ON public.calendly_inquiries FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for all" ON public.calendly_inquiries FOR DELETE USING (true);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_calendly_inquiries_updated_at ON public.calendly_inquiries;

CREATE TRIGGER trg_calendly_inquiries_updated_at
BEFORE UPDATE ON public.calendly_inquiries
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
