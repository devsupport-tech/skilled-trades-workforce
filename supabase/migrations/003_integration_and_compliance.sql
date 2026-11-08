-- Skilled Trades Workforce - Integration and Compliance
-- Migration 003: Integration outbox, consent, activity tracking, tasks
-- Created: 2026-11-05

-- === INTEGRATION OUTBOX ===

-- Integration outbox (durable event queue for external APIs)
CREATE TABLE integration_outbox (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Event details
  event_type TEXT NOT NULL,
  event_payload JSONB NOT NULL,

  -- Target integration
  integration_name TEXT NOT NULL, -- 'hubspot', 'postmark', 'n8n'
  endpoint TEXT,

  -- Idempotency
  idempotency_key TEXT UNIQUE,

  -- Status and retry logic
  status crm_sync_status NOT NULL DEFAULT 'pending',
  attempts INTEGER DEFAULT 0,
  max_attempts INTEGER DEFAULT 5,
  next_retry_at TIMESTAMP WITH TIME ZONE,
  last_attempt_at TIMESTAMP WITH TIME ZONE,

  -- Error handling
  error_message TEXT,
  error_details JSONB,

  -- Response
  response_status INTEGER,
  response_body JSONB,

  -- Timing
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,

  -- Priority
  priority INTEGER DEFAULT 5, -- 1 (highest) to 10 (lowest)

  CONSTRAINT check_priority CHECK (priority BETWEEN 1 AND 10)
);

CREATE INDEX idx_integration_outbox_status ON integration_outbox(status, next_retry_at) WHERE status IN ('pending', 'failed');
CREATE INDEX idx_integration_outbox_integration ON integration_outbox(integration_name, status);
CREATE INDEX idx_integration_outbox_created ON integration_outbox(created_at DESC);

-- === COMMUNICATIONS ===

-- Communications (email/SMS metadata and delivery tracking)
CREATE TABLE communications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Target
  candidate_id UUID REFERENCES candidates(id) ON DELETE SET NULL,
  employer_lead_id UUID REFERENCES employer_leads(id) ON DELETE SET NULL,
  recipient_email TEXT,
  recipient_phone TEXT,

  -- Communication details
  channel notification_channel NOT NULL,
  template_id TEXT,
  subject TEXT,
  body TEXT,

  -- Consent basis
  consent_type consent_type,
  consent_record_id UUID REFERENCES consent_records(id),

  -- Delivery status
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'delivered', 'bounced', 'failed', 'unsubscribed'
  sent_at TIMESTAMP WITH TIME ZONE,
  delivered_at TIMESTAMP WITH TIME ZONE,
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,

  -- External provider tracking
  provider_message_id TEXT,
  provider_metadata JSONB,

  -- Error handling
  error_message TEXT,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_communications_candidate ON communications(candidate_id);
CREATE INDEX idx_communications_employer ON communications(employer_lead_id);
CREATE INDEX idx_communications_status ON communications(status);
CREATE INDEX idx_communications_template ON communications(template_id);

-- === CONSENT MANAGEMENT ===

-- Consent records (GDPR/compliance consent tracking)
CREATE TABLE consent_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Subject
  candidate_id UUID REFERENCES candidates(id) ON DELETE CASCADE,
  employer_lead_id UUID REFERENCES employer_leads(id) ON DELETE CASCADE,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,

  -- Consent details
  consent_type consent_type NOT NULL,
  consent_given BOOLEAN NOT NULL,
  consent_text TEXT NOT NULL, -- Exact wording shown to user
  consent_version TEXT NOT NULL, -- Version of consent text

  -- Collection details
  source TEXT NOT NULL, -- 'web-form', 'phone-call', 'email', 'in-person'
  source_url TEXT,
  source_page TEXT,
  ip_address INET,
  user_agent TEXT,

  -- Withdrawal
  withdrawn BOOLEAN DEFAULT FALSE,
  withdrawn_at TIMESTAMP WITH TIME ZONE,
  withdrawal_reason TEXT,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  CONSTRAINT check_subject CHECK (
    (candidate_id IS NOT NULL AND employer_lead_id IS NULL AND profile_id IS NULL) OR
    (candidate_id IS NULL AND employer_lead_id IS NOT NULL AND profile_id IS NULL) OR
    (candidate_id IS NULL AND employer_lead_id IS NULL AND profile_id IS NOT NULL)
  )
);

CREATE INDEX idx_consent_records_candidate ON consent_records(candidate_id);
CREATE INDEX idx_consent_records_employer ON consent_records(employer_lead_id);
CREATE INDEX idx_consent_records_type ON consent_records(consent_type, consent_given);
CREATE INDEX idx_consent_records_withdrawn ON consent_records(withdrawn);

-- === ACTIVITY TRACKING ===

-- Activity events (audit trail for recruiting actions)
CREATE TABLE activity_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Actor (who performed the action)
  actor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  actor_type TEXT NOT NULL DEFAULT 'user', -- 'user', 'system', 'api', 'integration'
  actor_email TEXT,

  -- Subject (what was acted upon)
  subject_type TEXT NOT NULL, -- 'employer_lead', 'candidate', 'application', etc.
  subject_id UUID NOT NULL,

  -- Event details
  event_type TEXT NOT NULL, -- 'created', 'updated', 'status_changed', 'contacted', etc.
  event_action TEXT NOT NULL,
  event_description TEXT,

  -- Changes
  old_values JSONB,
  new_values JSONB,

  -- Metadata
  metadata JSONB,
  ip_address INET,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_activity_events_subject ON activity_events(subject_type, subject_id);
CREATE INDEX idx_activity_events_actor ON activity_events(actor_id);
CREATE INDEX idx_activity_events_type ON activity_events(event_type);
CREATE INDEX idx_activity_events_created ON activity_events(created_at DESC);

-- === ADMIN TASKS ===

-- Admin tasks (follow-up tasks and reminders)
CREATE TABLE admin_tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Assignment
  assigned_to UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,

  -- Related entities
  employer_lead_id UUID REFERENCES employer_leads(id) ON DELETE CASCADE,
  candidate_id UUID REFERENCES candidates(id) ON DELETE CASCADE,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
  crew_id UUID REFERENCES crews(id) ON DELETE CASCADE,
  storm_request_id UUID REFERENCES storm_requests(id) ON DELETE CASCADE,

  -- Task details
  title TEXT NOT NULL,
  description TEXT,
  task_type TEXT NOT NULL, -- 'follow-up', 'verification', 'interview', 'document-review', 'availability-check', etc.

  -- Priority and timing
  priority TEXT NOT NULL DEFAULT 'normal', -- 'low', 'normal', 'high', 'urgent'
  due_date DATE,
  due_time TIME,

  -- Status
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'in-progress', 'completed', 'cancelled'
  completed_at TIMESTAMP WITH TIME ZONE,
  completion_notes TEXT,

  -- Reminders
  reminder_sent BOOLEAN DEFAULT FALSE,
  reminder_sent_at TIMESTAMP WITH TIME ZONE,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_admin_tasks_assigned ON admin_tasks(assigned_to, status);
CREATE INDEX idx_admin_tasks_due_date ON admin_tasks(due_date) WHERE status IN ('pending', 'in-progress');
CREATE INDEX idx_admin_tasks_status ON admin_tasks(status);
CREATE INDEX idx_admin_tasks_type ON admin_tasks(task_type);

-- === NOTES ===

-- Notes (internal notes on leads, candidates, etc.)
CREATE TABLE notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Author
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_by_name TEXT,

  -- Related entities
  employer_lead_id UUID REFERENCES employer_leads(id) ON DELETE CASCADE,
  candidate_id UUID REFERENCES candidates(id) ON DELETE CASCADE,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
  crew_id UUID REFERENCES crews(id) ON DELETE CASCADE,

  -- Note details
  content TEXT NOT NULL,
  note_type TEXT, -- 'general', 'phone-call', 'meeting', 'email', 'interview'
  is_private BOOLEAN DEFAULT FALSE,

  -- Attachments
  attachments JSONB,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_notes_employer_lead ON notes(employer_lead_id);
CREATE INDEX idx_notes_candidate ON notes(candidate_id);
CREATE INDEX idx_notes_application ON notes(application_id);
CREATE INDEX idx_notes_created ON notes(created_at DESC);

-- === SYSTEM CONFIGURATION ===

-- System settings (key-value store for configuration)
CREATE TABLE system_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  category TEXT,
  updated_by UUID REFERENCES profiles(id),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_system_settings_category ON system_settings(category);

-- === FUNCTIONS AND TRIGGERS ===

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to all tables with updated_at column
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_employer_leads_updated_at BEFORE UPDATE ON employer_leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_job_orders_updated_at BEFORE UPDATE ON job_orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_candidates_updated_at BEFORE UPDATE ON candidates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_candidate_credentials_updated_at BEFORE UPDATE ON candidate_credentials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_candidate_documents_updated_at BEFORE UPDATE ON candidate_documents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_storm_profiles_updated_at BEFORE UPDATE ON storm_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_crews_updated_at BEFORE UPDATE ON crews
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_crew_memberships_updated_at BEFORE UPDATE ON crew_memberships
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_storm_requests_updated_at BEFORE UPDATE ON storm_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assignments_updated_at BEFORE UPDATE ON assignments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_tasks_updated_at BEFORE UPDATE ON admin_tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_notes_updated_at BEFORE UPDATE ON notes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to log application stage changes
CREATE OR REPLACE FUNCTION log_application_stage_change()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.stage IS DISTINCT FROM NEW.stage THEN
    NEW.stage_changed_at = NOW();

    -- Log to activity events
    INSERT INTO activity_events (
      subject_type,
      subject_id,
      event_type,
      event_action,
      event_description,
      old_values,
      new_values,
      actor_type
    ) VALUES (
      'application',
      NEW.id,
      'status_changed',
      'application_stage_changed',
      'Application stage changed from ' || OLD.stage || ' to ' || NEW.stage,
      jsonb_build_object('stage', OLD.stage),
      jsonb_build_object('stage', NEW.stage),
      'system'
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER log_application_stage_change BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION log_application_stage_change();

-- Function to increment job views counter
CREATE OR REPLACE FUNCTION increment_job_views(job_id_param UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE jobs
  SET views = views + 1
  WHERE id = job_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- This schema is now complete. Row-level security policies will be added in migration 004_rls_policies.sql
