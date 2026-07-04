CREATE TABLE IF NOT EXISTS client_logos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  website_url TEXT,
  sector TEXT,
  logo_url TEXT NOT NULL,
  storage_path TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE client_logos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admin_all" ON client_logos FOR ALL TO authenticated USING (true) WITH CHECK (true);
