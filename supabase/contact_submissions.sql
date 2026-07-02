-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/mjwqhpirfxplqsiksbri/sql

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT        NOT NULL,
  phone       TEXT,
  email       TEXT        NOT NULL,
  subject     TEXT        NOT NULL,
  message     TEXT        NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  read        BOOLEAN     NOT NULL DEFAULT FALSE
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit the contact form (public)
CREATE POLICY "public_insert"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admins) can read submissions
CREATE POLICY "admin_select"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can mark as read
CREATE POLICY "admin_update"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true);
