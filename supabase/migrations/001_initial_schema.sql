-- Skilled Trades Workforce - Initial Database Schema
-- Migration 001: Core tables and relationships
-- Created: 2026-11-05

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- === ENUMS ===

CREATE TYPE employment_type AS ENUM (
  'temporary',
  'temp-to-hire',
  'direct-hire',
  'contract',
  'remote'
);

CREATE TYPE shift_type AS ENUM (
  'day',
  'night',
  'swing',
  'rotating',
  'flexible',
  'weekends'
);

CREATE TYPE mobilization_window AS ENUM (
  'immediately',
  '24-hours',
  '48-hours',
  '72-hours',
  'one-week',
  'other'
);

CREATE TYPE deployment_duration AS ENUM (
  '1-week',
  '2-weeks',
  '1-month',
  '2-months',
  '3-plus-months',
  'flexible'
);

CREATE TYPE lead_status AS ENUM (
  'new',
  'contacted',
  'qualified',
  'proposal-sent',
  'negotiating',
  'won',
  'lost',
  'on-hold'
);

CREATE TYPE candidate_status AS ENUM (
  'new',
  'screening',
  'qualified',
  'available',
  'interviewing',
  'placed',
  'inactive'
);

CREATE TYPE storm_worker_status AS ENUM (
  'registered',
  'screening',
  'qualified',
  'available',
  'deployed',
  'unavailable',
  'inactive'
);

CREATE TYPE crew_status AS ENUM (
  'registered',
  'verification-pending',
  'qualified',
  'available',
  'deployed',
  'unavailable',
  'inactive'
);

CREATE TYPE application_stage AS ENUM (
  'submitted',
  'reviewing',
  'shortlisted',
  'interviewing',
  'offer-extended',
  'hired',
  'rejected',
  'withdrawn'
);

CREATE TYPE credential_type AS ENUM (
  'license',
  'certification',
  'permit',
  'card',
  'other'
);

CREATE TYPE document_type AS ENUM (
  'resume',
  'cover-letter',
  'certification',
  'license',
  'reference',
  'other'
);

CREATE TYPE consent_type AS ENUM (
  'email-marketing',
  'sms-marketing',
  'phone-calls',
  'job-alerts',
  'storm-alerts',
  'data-processing',
  'terms-of-service',
  'privacy-policy'
);

CREATE TYPE crm_sync_status AS ENUM (
  'pending',
  'in-progress',
  'success',
  'failed',
  'skipped'
);

CREATE TYPE notification_channel AS ENUM (
  'email',
  'sms',
  'internal',
  'webhook'
);

-- === CORE TABLES ===

-- Profiles (for future authentication)
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  display_name TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Organizations (employers, crew businesses)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'employer', 'crew', 'both'
  industry TEXT,
  website TEXT,
  phone TEXT,
  email TEXT,
  address_street TEXT,
  address_city TEXT,
  address_state TEXT,
  address_zip TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Organization members (user-to-organization relationship)
CREATE TABLE organization_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'member', -- 'owner', 'admin', 'member'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(organization_id, profile_id)
);

-- Employer leads (contact submissions)
CREATE TABLE employer_leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,

  -- Contact information
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  phone TEXT NOT NULL,

  -- Request details
  industry TEXT,
  source_page TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,

  -- Status and CRM
  status lead_status NOT NULL DEFAULT 'new',
  crm_contact_id TEXT,
  crm_company_id TEXT,
  crm_deal_id TEXT,
  crm_sync_status crm_sync_status DEFAULT 'pending',
  crm_sync_error TEXT,
  crm_synced_at TIMESTAMP WITH TIME ZONE,

  -- Metadata
  notes TEXT,
  assigned_to UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_employer_leads_status ON employer_leads(status);
CREATE INDEX idx_employer_leads_email ON employer_leads(work_email);
CREATE INDEX idx_employer_leads_crm_sync ON employer_leads(crm_sync_status) WHERE crm_sync_status = 'pending';

-- Job orders (internal staffing requests from employers)
CREATE TABLE job_orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  employer_lead_id UUID REFERENCES employer_leads(id) ON DELETE SET NULL,
  organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,

  -- Position details
  position_title TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  category TEXT,
  description TEXT,

  -- Location and timing
  work_city TEXT,
  work_state TEXT,
  staffing_type employment_type NOT NULL,
  estimated_start_date DATE,
  duration TEXT,
  schedule TEXT,
  shifts shift_type[],

  -- Compensation
  target_pay_min DECIMAL(10,2),
  target_pay_max DECIMAL(10,2),
  pay_unit TEXT, -- 'hourly', 'salary', 'project'
  bill_rate_budget DECIMAL(10,2),

  -- Requirements
  qualifications TEXT[],
  required_licenses TEXT[],
  required_certifications TEXT[],

  -- Status
  status TEXT NOT NULL DEFAULT 'new',
  assigned_recruiter UUID REFERENCES profiles(id),

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_job_orders_status ON job_orders(status);
CREATE INDEX idx_job_orders_category ON job_orders(category);

-- Jobs (public openings)
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_order_id UUID REFERENCES job_orders(id) ON DELETE SET NULL,

  -- SEO and display
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,

  -- Location
  city TEXT,
  state TEXT NOT NULL DEFAULT 'TX',
  remote BOOLEAN DEFAULT FALSE,

  -- Employment details
  employment_type employment_type NOT NULL,
  shifts shift_type[],
  schedule_details TEXT,

  -- Compensation
  pay_min DECIMAL(10,2),
  pay_max DECIMAL(10,2),
  pay_unit TEXT,
  pay_disclosed BOOLEAN DEFAULT FALSE,

  -- Requirements
  qualifications TEXT[],
  required_skills TEXT[],
  preferred_skills TEXT[],
  required_certifications TEXT[],

  -- Publishing
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  featured BOOLEAN DEFAULT FALSE,

  -- Metadata
  views INTEGER DEFAULT 0,
  applications_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_jobs_published ON jobs(published, published_at) WHERE published = TRUE;
CREATE INDEX idx_jobs_category ON jobs(category) WHERE published = TRUE;
CREATE INDEX idx_jobs_slug ON jobs(slug);
CREATE INDEX idx_jobs_location ON jobs(city, state) WHERE published = TRUE;

-- Candidates (job seekers and storm workers)
CREATE TABLE candidates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id) ON DELETE SET NULL,

  -- Personal information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT NOT NULL,

  -- Location
  city TEXT,
  state TEXT,
  zip TEXT,

  -- Status
  status candidate_status NOT NULL DEFAULT 'new',

  -- Professional details
  years_experience INTEGER,
  education_level TEXT,

  -- Availability
  available_from DATE,
  availability_notes TEXT,
  has_transportation BOOLEAN,
  willing_to_relocate BOOLEAN DEFAULT FALSE,

  -- Metadata
  source_page TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  notes TEXT,
  assigned_recruiter UUID REFERENCES profiles(id),

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_candidates_status ON candidates(status);
CREATE INDEX idx_candidates_email ON candidates(email);

-- Candidate preferences
CREATE TABLE candidate_preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,

  -- Job preferences
  preferred_categories TEXT[],
  preferred_job_titles TEXT[],
  employment_types employment_type[],

  -- Compensation
  desired_pay_min DECIMAL(10,2),
  desired_pay_max DECIMAL(10,2),
  pay_unit TEXT,

  -- Schedule
  preferred_shifts shift_type[],
  full_time BOOLEAN DEFAULT TRUE,
  part_time BOOLEAN DEFAULT FALSE,

  -- Location
  preferred_locations TEXT[],
  max_commute_miles INTEGER,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills (canonical skill catalog)
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  category TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_skills_category ON skills(category);

-- Candidate skills (many-to-many relationship)
CREATE TABLE candidate_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  skill_name TEXT, -- Denormalized for flexibility
  years_experience DECIMAL(4,2),
  proficiency_level TEXT, -- 'beginner', 'intermediate', 'advanced', 'expert'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(candidate_id, skill_id)
);

CREATE INDEX idx_candidate_skills_candidate ON candidate_skills(candidate_id);

-- Candidate credentials
CREATE TABLE candidate_credentials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,

  credential_type credential_type NOT NULL,
  name TEXT NOT NULL,
  issuer TEXT,
  credential_number TEXT,
  issue_date DATE,
  expiry_date DATE,

  -- Verification
  verification_status TEXT DEFAULT 'unverified', -- 'unverified', 'pending', 'verified', 'expired', 'invalid'
  verified_at TIMESTAMP WITH TIME ZONE,
  verified_by UUID REFERENCES profiles(id),

  -- Private document reference
  document_path TEXT, -- Stored in private bucket

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_candidate_credentials_candidate ON candidate_credentials(candidate_id);
CREATE INDEX idx_candidate_credentials_expiry ON candidate_credentials(expiry_date) WHERE expiry_date IS NOT NULL;

-- Candidate documents (resumes, references, etc.)
CREATE TABLE candidate_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,

  document_type document_type NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,

  -- Private storage path
  storage_path TEXT NOT NULL, -- Path in Supabase Storage

  -- Access tracking
  uploaded_by UUID REFERENCES profiles(id),
  last_accessed_at TIMESTAMP WITH TIME ZONE,
  access_count INTEGER DEFAULT 0,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_candidate_documents_candidate ON candidate_documents(candidate_id);

-- This migration continues in 002_storm_tables.sql
