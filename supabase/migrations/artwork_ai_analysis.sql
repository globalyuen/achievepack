-- Add AI analysis column to artwork_files table
-- This stores xAI Vision analysis results for admin review

ALTER TABLE artwork_files 
ADD COLUMN IF NOT EXISTS ai_analysis JSONB DEFAULT NULL;

-- Add customer_email column if not exists (for reliable matching)
ALTER TABLE artwork_files 
ADD COLUMN IF NOT EXISTS customer_email TEXT;

-- Create index for searching AI analysis content
CREATE INDEX IF NOT EXISTS idx_artwork_ai_analysis 
ON artwork_files USING GIN (ai_analysis);

-- Create index for customer_email lookup
CREATE INDEX IF NOT EXISTS idx_artwork_customer_email 
ON artwork_files (customer_email);

-- Comment for documentation
COMMENT ON COLUMN artwork_files.ai_analysis IS 'JSON object containing xAI Vision analysis: {title, description, alt, keywords[], category, type, colors[], content_detected[], quality_score, recommendations[], analyzed_at}';
