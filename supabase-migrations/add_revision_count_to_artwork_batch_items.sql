-- Migration: Add revision_count to artwork_batch_items
-- Purpose: Track how many times admin has uploaded a new proof after customer rejection
-- revision_count = 0 (or null): original proof, never revised
-- revision_count = 1: "1st Revised Pending"
-- revision_count = 2: "2nd Revised Pending"
-- etc.

ALTER TABLE artwork_batch_items
  ADD COLUMN IF NOT EXISTS revision_count INTEGER NOT NULL DEFAULT 0;

COMMENT ON COLUMN artwork_batch_items.revision_count IS
  'Number of times admin uploaded a new proof after customer rejection. 0 = original, 1 = 1st revised, 2 = 2nd revised, etc.';
