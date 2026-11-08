-- Skilled Trades Workforce - Storm Tables and Applications
-- Migration 002: Storm profiles, crews, applications, and integration outbox
-- Created: 2026-11-05

-- === STORM RESPONSE TABLES ===

-- Storm profiles (extended deployment preferences for candidates)
CREATE TABLE storm_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  candidate_id UUID NOT NULL UNIQUE REFERENCES candidates(id) ON DELETE CASCADE,

  -- Storm-specific details
  storm_specialties TEXT[] NOT NULL,
  prior_deployments INTEGER DEFAULT 0,
  deployment_experience_notes TEXT,

  -- Travel and deployment
  travel_regions TEXT[], -- State codes
  willing_nationwide BOOLEAN DEFAULT FALSE,
  willing_international BOOLEAN DEFAULT FALSE,

  -- Mobilization
  mobilization_window mobilization_window NOT NULL,
  anticipated_deployment_length deployment_duration,

  -- Equipment and logistics
  has_own_transportation BOOLEAN DEFAULT FALSE,
  has_own_tools BOOLEAN DEFAULT FALSE,
  has_own_ppe BOOLEAN DEFAULT FALSE,

  -- Lodging and travel
  lodging_needs TEXT,
  travel_needs TEXT,

  -- Compensation
  hourly_rate_expectation DECIMAL(10,2),
  daily_rate_expectation DECIMAL(10,2),
  requires_per_diem BOOLEAN DEFAULT FALSE,

  -- Crew affiliation
  crew_id UUID REFERENCES crews(id) ON DELETE SET NULL,
  is_crew_leader BOOLEAN DEFAULT FALSE,

  -- Availability
  current_availability TEXT NOT NULL DEFAULT 'available', -- 'available', 'deployed', 'unavailable', 'inactive'
  last_availability_confirmed_at TIMESTAMP WITH TIME ZONE,
  availability_reconfirmation_due TIMESTAMP WITH TIME ZONE,

  -- Status
  status storm_worker_status NOT NULL DEFAULT 'registered',

  -- Consent
  permission_to_contact BOOLEAN NOT NULL DEFAULT TRUE,
  storm_alerts_enabled BOOLEAN NOT NULL DEFAULT TRUE,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_storm_profiles_status ON storm_profiles(status);
CREATE INDEX idx_storm_profiles_availability ON storm_profiles(current_availability);
CREATE INDEX idx_storm_profiles_mobilization ON storm_profiles(mobilization_window);
CREATE INDEX idx_storm_profiles_reconfirm_due ON storm_profiles(availability_reconfirmation_due) WHERE availability_reconfirmation_due IS NOT NULL;

-- Crews (registered crew leaders and their teams)
CREATE TABLE crews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Crew leader
  leader_candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  leader_profile_id UUID REFERENCES profiles(id) ON DELETE SET NULL,

  -- Crew details
  crew_name TEXT NOT NULL,
  company_name TEXT,
  organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,

  -- Team composition
  estimated_team_size INTEGER NOT NULL,
  specialties TEXT[] NOT NULL,
  crew_capabilities TEXT[],

  -- Operating details
  home_base_city TEXT,
  home_base_state TEXT,
  operating_states TEXT[],

  -- Mobilization
  mobilization_window mobilization_window NOT NULL,
  preferred_deployment_duration deployment_duration,

  -- Equipment and resources
  has_own_equipment BOOLEAN DEFAULT FALSE,
  equipment_description TEXT,
  has_own_transportation BOOLEAN DEFAULT FALSE,
  transportation_capacity TEXT,

  -- Business details
  business_registered BOOLEAN DEFAULT FALSE,
  insurance_status TEXT, -- 'none', 'general-liability', 'workers-comp', 'full-coverage'
  insurance_expiry DATE,
  licenses TEXT[],

  -- Rate model
  crew_rate_model TEXT, -- 'per-person-hourly', 'crew-daily-rate', 'project-based', 'negotiable'
  estimated_daily_rate DECIMAL(10,2),
  estimated_hourly_rate DECIMAL(10,2),

  -- Logistics
  lodging_needs TEXT,
  per_diem_requirements TEXT,

  -- Experience
  prior_storm_deployments INTEGER DEFAULT 0,
  past_experience_notes TEXT,

  -- Status and verification
  status crew_status NOT NULL DEFAULT 'registered',
  verification_status TEXT DEFAULT 'pending', -- 'pending', 'documents-requested', 'verified', 'rejected'
  verified_at TIMESTAMP WITH TIME ZONE,
  verified_by UUID REFERENCES profiles(id),
  verification_notes TEXT,

  -- Availability
  current_availability TEXT NOT NULL DEFAULT 'available',
  last_availability_confirmed_at TIMESTAMP WITH TIME ZONE,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_crews_status ON crews(status);
CREATE INDEX idx_crews_leader ON crews(leader_candidate_id);
CREATE INDEX idx_crews_verification ON crews(verification_status);

-- Crew memberships (individual crew members with consent tracking)
CREATE TABLE crew_memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  crew_id UUID NOT NULL REFERENCES crews(id) ON DELETE CASCADE,
  candidate_id UUID REFERENCES candidates(id) ON DELETE SET NULL,

  -- Member details (before individual registration)
  member_name TEXT,
  member_email TEXT,
  member_phone TEXT,

  -- Consent and verification
  invitation_sent_at TIMESTAMP WITH TIME ZONE,
  consent_given BOOLEAN DEFAULT FALSE,
  consent_given_at TIMESTAMP WITH TIME ZONE,
  consent_ip_address INET,

  -- Verification
  verification_status TEXT DEFAULT 'pending', -- 'pending', 'invited', 'registered', 'verified', 'declined'
  verified_at TIMESTAMP WITH TIME ZONE,

  -- Role in crew
  role_in_crew TEXT,
  specialties TEXT[],

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_crew_memberships_crew ON crew_memberships(crew_id);
CREATE INDEX idx_crew_memberships_candidate ON crew_memberships(candidate_id);
CREATE INDEX idx_crew_memberships_consent ON crew_memberships(consent_given);

-- Storm requests (employer requests for disaster response workers/crews)
CREATE TABLE storm_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  employer_lead_id UUID REFERENCES employer_leads(id) ON DELETE SET NULL,
  organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,

  -- Contact
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,

  -- Deployment location
  deployment_city TEXT NOT NULL,
  deployment_state TEXT NOT NULL,
  deployment_zip TEXT,
  deployment_address TEXT,

  -- Disaster details
  disaster_type TEXT,
  disaster_date DATE,

  -- Worker needs
  need_individuals BOOLEAN DEFAULT FALSE,
  need_crews BOOLEAN DEFAULT FALSE,
  specialties_needed TEXT[] NOT NULL,
  quantity_individuals INTEGER,
  quantity_crews INTEGER,
  supervisors_needed INTEGER,

  -- Timing
  requested_start_date DATE NOT NULL,
  estimated_duration TEXT,
  shift_details TEXT,

  -- Requirements
  safety_requirements TEXT[],
  equipment_expectations TEXT,
  required_certifications TEXT[],

  -- Logistics
  lodging_provided BOOLEAN,
  lodging_details TEXT,
  transportation_provided BOOLEAN,
  transportation_details TEXT,
  per_diem_offered BOOLEAN,
  per_diem_amount DECIMAL(10,2),

  -- Compensation
  proposed_hourly_rate DECIMAL(10,2),
  proposed_daily_rate DECIMAL(10,2),
  crew_rate_budget DECIMAL(10,2),

  -- Worksite
  jobsite_conditions TEXT,
  special_instructions TEXT,

  -- Status
  status TEXT NOT NULL DEFAULT 'new', -- 'new', 'contacted', 'sourcing', 'shortlist', 'assigned', 'active', 'completed', 'closed'
  urgency TEXT DEFAULT 'normal', -- 'low', 'normal', 'high', 'critical'
  assigned_recruiter UUID REFERENCES profiles(id),

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_storm_requests_status ON storm_requests(status);
CREATE INDEX idx_storm_requests_location ON storm_requests(deployment_state, deployment_city);
CREATE INDEX idx_storm_requests_urgency ON storm_requests(urgency) WHERE status IN ('new', 'contacted', 'sourcing');

-- === JOB APPLICATIONS ===

-- Applications (job applications and matches)
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE SET NULL,
  candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,

  -- Application details
  cover_letter TEXT,
  resume_document_id UUID REFERENCES candidate_documents(id),

  -- Source tracking
  source TEXT, -- 'job-board', 'direct', 'recruiter-match', 'referral'
  referrer_notes TEXT,

  -- Stage and status
  stage application_stage NOT NULL DEFAULT 'submitted',
  stage_changed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Matching (for recruiter-suggested matches)
  is_recruiter_match BOOLEAN DEFAULT FALSE,
  match_score DECIMAL(5,2),
  match_explanation TEXT,
  matched_by UUID REFERENCES profiles(id),

  -- Review
  reviewed BOOLEAN DEFAULT FALSE,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID REFERENCES profiles(id),
  reviewer_notes TEXT,

  -- Interview
  interview_scheduled_at TIMESTAMP WITH TIME ZONE,
  interview_location TEXT,
  interview_notes TEXT,

  -- Rejection
  rejection_reason TEXT,
  rejection_notes TEXT,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_applications_job ON applications(job_id);
CREATE INDEX idx_applications_candidate ON applications(candidate_id);
CREATE INDEX idx_applications_stage ON applications(stage);
CREATE INDEX idx_applications_created ON applications(created_at DESC);

-- === ASSIGNMENTS AND PLACEMENTS ===

-- Assignments (approved placements and deployments)
CREATE TABLE assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Link to job order or storm request
  job_order_id UUID REFERENCES job_orders(id) ON DELETE SET NULL,
  storm_request_id UUID REFERENCES storm_requests(id) ON DELETE SET NULL,
  application_id UUID REFERENCES applications(id) ON DELETE SET NULL,

  -- Assignee (individual or crew)
  candidate_id UUID REFERENCES candidates(id) ON DELETE SET NULL,
  crew_id UUID REFERENCES crews(id) ON DELETE SET NULL,

  -- Assignment details
  engagement_type TEXT NOT NULL, -- 'employee', 'contractor', 'subcontractor'
  position_title TEXT NOT NULL,
  work_location TEXT,

  -- Timing
  start_date DATE NOT NULL,
  estimated_end_date DATE,
  actual_end_date DATE,

  -- Compensation
  pay_rate DECIMAL(10,2),
  pay_unit TEXT,
  bill_rate DECIMAL(10,2),

  -- Status
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'active', 'on-hold', 'completed', 'terminated'
  completion_reason TEXT,

  -- Performance
  performance_rating DECIMAL(3,2),
  performance_notes TEXT,
  would_rehire BOOLEAN,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_assignments_candidate ON assignments(candidate_id);
CREATE INDEX idx_assignments_crew ON assignments(crew_id);
CREATE INDEX idx_assignments_job_order ON assignments(job_order_id);
CREATE INDEX idx_assignments_storm_request ON assignments(storm_request_id);
CREATE INDEX idx_assignments_status ON assignments(status);

-- This migration continues in 003_integration_and_compliance.sql
