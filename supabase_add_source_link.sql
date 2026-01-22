-- Add source_link column to artwork_batch_items table
-- This field stores the original artwork download link or extra information link

ALTER TABLE artwork_batch_items 
ADD COLUMN IF NOT EXISTS source_link TEXT;

-- Add comment for documentation
COMMENT ON COLUMN artwork_batch_items.source_link IS 'Link to original artwork file or extra download information';
