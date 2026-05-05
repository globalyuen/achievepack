-- Add touch tracking columns
ALTER TABLE prospect ADD COLUMN IF NOT EXISTS touch_count INTEGER DEFAULT 1;
ALTER TABLE prospect ADD COLUMN IF NOT EXISTS last_touch_at TIMESTAMPTZ;
UPDATE prospect SET last_touch_at = email_sent_at WHERE email_sent = true AND last_touch_at IS NULL;

-- Remove duplicate emails (keep the one with the most information or most recent)
-- We delete rows where there's another row with the same email but a smaller ID
-- (This is a simple way to deduplicate while keeping one record)
DELETE FROM prospect
WHERE id IN (
    SELECT id
    FROM (
        SELECT id,
               ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at DESC, id DESC) as rn
        FROM prospect
        WHERE email IS NOT NULL AND email != ''
    ) t
    WHERE t.rn > 1
);
