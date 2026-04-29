-- Raise the file size limit on the "artworks" storage bucket to 500 MB
-- Run this in Supabase SQL Editor

UPDATE storage.buckets
SET    file_size_limit = 524288000   -- 500 MB in bytes (500 * 1024 * 1024)
WHERE  id = 'artworks';

-- Verify the change
SELECT id, name, file_size_limit, allowed_mime_types
FROM   storage.buckets
WHERE  id = 'artworks';
