-- Please run this SQL script in the Supabase Dashboard (SQL Editor)
-- This will add the supplier password to artwork_batches
-- and supplier_comment to artwork_batch_items

ALTER TABLE public.artwork_batches
ADD COLUMN IF NOT EXISTS supplier_password TEXT;

ALTER TABLE public.artwork_batch_items
ADD COLUMN IF NOT EXISTS supplier_comment TEXT;
