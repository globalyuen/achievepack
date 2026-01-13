-- Create project_comments table for unified internal tracking
CREATE TABLE IF NOT EXISTS project_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id),
    user_email TEXT,
    user_name TEXT,
    is_admin BOOLEAN DEFAULT false,
    message TEXT NOT NULL,
    file_url TEXT,
    file_name TEXT,
    file_size INTEGER,
    file_type TEXT,
    message_type TEXT DEFAULT 'text',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE project_comments ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Enable all for authenticated users" ON project_comments
    FOR ALL USING (auth.role() = 'authenticated');
