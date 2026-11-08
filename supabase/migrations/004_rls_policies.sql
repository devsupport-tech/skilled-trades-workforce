-- Skilled Trades Workforce - Row-Level Security Policies
-- Migration 004: RLS policies for secure data access
-- Created: 2026-11-05

-- SECURITY PRINCIPLES:
-- 1. Public users can only INSERT through validated server-side endpoints
-- 2. Authenticated users see only their own data
-- 3. Recruiters/admins have broader access based on roles
-- 4. All sensitive tables have RLS enabled
-- 5. Service role bypasses RLS for system operations

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE organization_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidate_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidate_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidate_credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidate_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE storm_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE crews ENABLE ROW LEVEL SECURITY;
ALTER TABLE crew_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE storm_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE integration_outbox ENABLE ROW LEVEL SECURITY;
ALTER TABLE communications ENABLE ROW LEVEL SECURITY;
ALTER TABLE consent_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

-- === HELPER FUNCTIONS ===

-- Function to check if user is authenticated
CREATE OR REPLACE FUNCTION auth.is_authenticated()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN auth.uid() IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get user role
CREATE OR REPLACE FUNCTION auth.user_role()
RETURNS TEXT AS $$
BEGIN
  RETURN (
    SELECT role
    FROM profiles
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user is recruiter or admin
CREATE OR REPLACE FUNCTION auth.is_recruiter_or_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN auth.user_role() IN ('recruiter', 'admin');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION auth.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN auth.user_role() = 'admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- === PROFILES ===

-- Users can read their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Recruiters and admins can view all profiles
CREATE POLICY "Recruiters can view all profiles"
  ON profiles FOR SELECT
  USING (auth.is_recruiter_or_admin());

-- === ORGANIZATIONS ===

-- Organization members can view their organizations
CREATE POLICY "Members can view their organizations"
  ON organizations FOR SELECT
  USING (
    id IN (
      SELECT organization_id FROM organization_members
      WHERE profile_id = auth.uid()
    )
  );

-- Recruiters can view all organizations
CREATE POLICY "Recruiters can view all organizations"
  ON organizations FOR SELECT
  USING (auth.is_recruiter_or_admin());

-- === EMPLOYER LEADS ===

-- No public read access - leads are internal only
CREATE POLICY "Recruiters can view employer leads"
  ON employer_leads FOR SELECT
  USING (auth.is_recruiter_or_admin());

-- Recruiters can insert employer leads
CREATE POLICY "Recruiters can create employer leads"
  ON employer_leads FOR INSERT
  WITH CHECK (auth.is_recruiter_or_admin());

-- Recruiters can update employer leads
CREATE POLICY "Recruiters can update employer leads"
  ON employer_leads FOR UPDATE
  USING (auth.is_recruiter_or_admin());

-- === JOB ORDERS ===

-- Recruiters can manage job orders
CREATE POLICY "Recruiters can view job orders"
  ON job_orders FOR SELECT
  USING (auth.is_recruiter_or_admin());

CREATE POLICY "Recruiters can create job orders"
  ON job_orders FOR INSERT
  WITH CHECK (auth.is_recruiter_or_admin());

CREATE POLICY "Recruiters can update job orders"
  ON job_orders FOR UPDATE
  USING (auth.is_recruiter_or_admin());

-- === JOBS (Public Listings) ===

-- Anyone can view published jobs
CREATE POLICY "Anyone can view published jobs"
  ON jobs FOR SELECT
  USING (published = TRUE AND (expires_at IS NULL OR expires_at > NOW()));

-- Recruiters can view all jobs (including unpublished)
CREATE POLICY "Recruiters can view all jobs"
  ON jobs FOR SELECT
  USING (auth.is_recruiter_or_admin());

-- Recruiters can manage jobs
CREATE POLICY "Recruiters can create jobs"
  ON jobs FOR INSERT
  WITH CHECK (auth.is_recruiter_or_admin());

CREATE POLICY "Recruiters can update jobs"
  ON jobs FOR UPDATE
  USING (auth.is_recruiter_or_admin());

-- === CANDIDATES ===

-- Candidates can view their own profile
CREATE POLICY "Candidates can view own profile"
  ON candidates FOR SELECT
  USING (
    profile_id = auth.uid() OR
    auth.is_recruiter_or_admin()
  );

-- Candidates can update their own profile
CREATE POLICY "Candidates can update own profile"
  ON candidates FOR UPDATE
  USING (profile_id = auth.uid());

-- Recruiters can view and manage all candidates
CREATE POLICY "Recruiters can view all candidates"
  ON candidates FOR SELECT
  USING (auth.is_recruiter_or_admin());

CREATE POLICY "Recruiters can create candidates"
  ON candidates FOR INSERT
  WITH CHECK (auth.is_recruiter_or_admin());

CREATE POLICY "Recruiters can update candidates"
  ON candidates FOR UPDATE
  USING (auth.is_recruiter_or_admin());

-- === CANDIDATE PREFERENCES ===

-- Candidates can manage their own preferences
CREATE POLICY "Candidates can manage own preferences"
  ON candidate_preferences FOR ALL
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR auth.is_recruiter_or_admin()
  );

-- === SKILLS ===

-- Anyone can view skills catalog
CREATE POLICY "Anyone can view skills"
  ON skills FOR SELECT
  USING (TRUE);

-- Only recruiters can manage skills catalog
CREATE POLICY "Recruiters can manage skills"
  ON skills FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === CANDIDATE SKILLS ===

-- Candidates can manage their own skills
CREATE POLICY "Candidates can manage own skills"
  ON candidate_skills FOR ALL
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR auth.is_recruiter_or_admin()
  );

-- === CANDIDATE CREDENTIALS ===

-- Candidates can manage their own credentials
CREATE POLICY "Candidates can manage own credentials"
  ON candidate_credentials FOR ALL
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR auth.is_recruiter_or_admin()
  );

-- === CANDIDATE DOCUMENTS ===

-- Candidates can manage their own documents
CREATE POLICY "Candidates can manage own documents"
  ON candidate_documents FOR ALL
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR auth.is_recruiter_or_admin()
  );

-- === STORM PROFILES ===

-- Storm workers can view their own profile
CREATE POLICY "Storm workers can view own profile"
  ON storm_profiles FOR SELECT
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR auth.is_recruiter_or_admin()
  );

-- Storm workers can update their own profile
CREATE POLICY "Storm workers can update own profile"
  ON storm_profiles FOR UPDATE
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    )
  );

-- Recruiters can manage storm profiles
CREATE POLICY "Recruiters can manage storm profiles"
  ON storm_profiles FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === CREWS ===

-- Crew leaders can view their own crew
CREATE POLICY "Crew leaders can view own crew"
  ON crews FOR SELECT
  USING (
    leader_candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR
    leader_profile_id = auth.uid() OR
    auth.is_recruiter_or_admin()
  );

-- Crew leaders can update their own crew
CREATE POLICY "Crew leaders can update own crew"
  ON crews FOR UPDATE
  USING (
    leader_profile_id = auth.uid() OR
    leader_candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    )
  );

-- Recruiters can manage all crews
CREATE POLICY "Recruiters can manage crews"
  ON crews FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === CREW MEMBERSHIPS ===

-- Crew members can view their own membership
CREATE POLICY "Crew members can view own membership"
  ON crew_memberships FOR SELECT
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR
    crew_id IN (
      SELECT id FROM crews WHERE leader_profile_id = auth.uid()
    ) OR
    auth.is_recruiter_or_admin()
  );

-- Recruiters can manage crew memberships
CREATE POLICY "Recruiters can manage crew memberships"
  ON crew_memberships FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === STORM REQUESTS ===

-- Recruiters can manage storm requests
CREATE POLICY "Recruiters can manage storm requests"
  ON storm_requests FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === APPLICATIONS ===

-- Candidates can view their own applications
CREATE POLICY "Candidates can view own applications"
  ON applications FOR SELECT
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR
    auth.is_recruiter_or_admin()
  );

-- Candidates can create applications
CREATE POLICY "Candidates can create applications"
  ON applications FOR INSERT
  WITH CHECK (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR
    auth.is_recruiter_or_admin()
  );

-- Recruiters can manage all applications
CREATE POLICY "Recruiters can manage applications"
  ON applications FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === ASSIGNMENTS ===

-- Assigned candidates/crews can view their assignments
CREATE POLICY "Workers can view own assignments"
  ON assignments FOR SELECT
  USING (
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR
    crew_id IN (
      SELECT id FROM crews WHERE leader_profile_id = auth.uid()
    ) OR
    auth.is_recruiter_or_admin()
  );

-- Recruiters can manage assignments
CREATE POLICY "Recruiters can manage assignments"
  ON assignments FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === INTEGRATION OUTBOX ===

-- Only system/recruiters can access integration outbox
CREATE POLICY "Recruiters can view integration outbox"
  ON integration_outbox FOR SELECT
  USING (auth.is_recruiter_or_admin());

-- === COMMUNICATIONS ===

-- Recruiters can view communications
CREATE POLICY "Recruiters can view communications"
  ON communications FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === CONSENT RECORDS ===

-- Users can view their own consent records
CREATE POLICY "Users can view own consent"
  ON consent_records FOR SELECT
  USING (
    profile_id = auth.uid() OR
    candidate_id IN (
      SELECT id FROM candidates WHERE profile_id = auth.uid()
    ) OR
    auth.is_recruiter_or_admin()
  );

-- Recruiters can view all consent records
CREATE POLICY "Recruiters can view all consent"
  ON consent_records FOR SELECT
  USING (auth.is_recruiter_or_admin());

-- === ACTIVITY EVENTS ===

-- Recruiters can view activity events
CREATE POLICY "Recruiters can view activity events"
  ON activity_events FOR SELECT
  USING (auth.is_recruiter_or_admin());

-- System can insert activity events
CREATE POLICY "System can insert activity events"
  ON activity_events FOR INSERT
  WITH CHECK (TRUE);

-- === ADMIN TASKS ===

-- Assigned users can view their tasks
CREATE POLICY "Users can view assigned tasks"
  ON admin_tasks FOR SELECT
  USING (
    assigned_to = auth.uid() OR
    auth.is_recruiter_or_admin()
  );

-- Recruiters can manage all tasks
CREATE POLICY "Recruiters can manage tasks"
  ON admin_tasks FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === NOTES ===

-- Recruiters can manage notes
CREATE POLICY "Recruiters can manage notes"
  ON notes FOR ALL
  USING (auth.is_recruiter_or_admin());

-- === SYSTEM SETTINGS ===

-- Admins only can manage system settings
CREATE POLICY "Admins can manage settings"
  ON system_settings FOR ALL
  USING (auth.is_admin());

-- === STORAGE POLICIES ===

-- Note: Storage policies are configured separately in Supabase Storage
-- Private bucket for candidate documents:
-- - Authenticated candidates can upload their own documents
-- - Recruiters can view all documents
-- - Service role has full access

-- Migration complete
