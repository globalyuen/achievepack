-- Add admin reply fields to quotes table
ALTER TABLE quotes 
ADD COLUMN IF NOT EXISTS admin_reply TEXT,
ADD COLUMN IF NOT EXISTS quoted_amount DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS replied_at TIMESTAMP WITH TIME ZONE;

-- Add admin reply fields to rfq_submissions table
ALTER TABLE rfq_submissions 
ADD COLUMN IF NOT EXISTS admin_reply TEXT,
ADD COLUMN IF NOT EXISTS quoted_amount DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS replied_at TIMESTAMP WITH TIME ZONE;

-- Add comment
COMMENT ON COLUMN quotes.admin_reply IS 'Admin response message to customer';
COMMENT ON COLUMN quotes.quoted_amount IS 'Amount quoted by admin for this request';
COMMENT ON COLUMN quotes.replied_at IS 'Timestamp when admin replied';

COMMENT ON COLUMN rfq_submissions.admin_reply IS 'Admin response message to customer';
COMMENT ON COLUMN rfq_submissions.quoted_amount IS 'Amount quoted by admin for this RFQ';
COMMENT ON COLUMN rfq_submissions.replied_at IS 'Timestamp when admin replied';
