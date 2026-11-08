-- Skilled Trades Workforce - Development Seed Data
-- WARNING: This is FICTIONAL data for development only
-- DO NOT use in production

-- Clear existing data (development only)
TRUNCATE TABLE
  profiles,
  organizations,
  employer_leads,
  job_orders,
  jobs,
  candidates,
  candidate_preferences,
  skills,
  candidate_skills,
  candidate_credentials,
  candidate_documents,
  storm_profiles,
  crews,
  crew_memberships,
  storm_requests,
  applications,
  assignments,
  integration_outbox,
  communications,
  consent_records,
  activity_events,
  admin_tasks,
  notes,
  system_settings
CASCADE;

-- === PROFILES ===

INSERT INTO profiles (id, email, display_name, role, status) VALUES
  ('11111111-1111-1111-1111-111111111111', 'admin@example.com', 'Admin User', 'admin', 'active'),
  ('22222222-2222-2222-2222-222222222222', 'recruiter@example.com', 'Jane Recruiter', 'recruiter', 'active'),
  ('33333333-3333-3333-3333-333333333333', 'john.doe@example.com', 'John Doe', 'user', 'active');

-- === ORGANIZATIONS ===

INSERT INTO organizations (id, name, type, industry, phone, email, address_city, address_state) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'ABC Construction', 'employer', 'construction', '713-555-0100', 'contact@abcconstruction.example', 'Houston', 'TX'),
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'XYZ Restoration', 'employer', 'restoration', '713-555-0200', 'info@xyzrestoration.example', 'Houston', 'TX'),
  ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Elite Storm Crew', 'crew', 'disaster-recovery', '555-555-0300', 'leader@elitestormcrew.example', 'Dallas', 'TX');

-- === SKILLS CATALOG ===

INSERT INTO skills (id, name, category) VALUES
  ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'Carpentry', 'construction'),
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'Electrical Work', 'construction'),
  ('10101010-1010-1010-1010-101010101010', 'Plumbing', 'construction'),
  ('20202020-2020-2020-2020-202020202020', 'HVAC', 'construction'),
  ('30303030-3030-3030-3030-303030303030', 'Water Mitigation', 'restoration'),
  ('40404040-4040-4040-4040-404040404040', 'Demolition', 'restoration'),
  ('50505050-5050-5050-5050-505050505050', 'Administrative Support', 'office'),
  ('60606060-6060-6060-6060-606060606060', 'Bookkeeping', 'office');

-- === CANDIDATES ===

INSERT INTO candidates (id, first_name, last_name, email, phone, city, state, status, years_experience) VALUES
  ('11111111-aaaa-bbbb-cccc-111111111111', 'Mike', 'Carpenter', 'mike.carpenter@example.com', '713-555-1001', 'Houston', 'TX', 'qualified', 8),
  ('22222222-aaaa-bbbb-cccc-222222222222', 'Sarah', 'Electrician', 'sarah.electric@example.com', '713-555-1002', 'Spring', 'TX', 'available', 5),
  ('33333333-aaaa-bbbb-cccc-333333333333', 'Tom', 'Restoration', 'tom.restoration@example.com', '713-555-1003', 'Katy', 'TX', 'qualified', 10),
  ('44444444-aaaa-bbbb-cccc-444444444444', 'Lisa', 'Admin', 'lisa.admin@example.com', '713-555-1004', 'Houston', 'TX', 'available', 3);

-- === CANDIDATE PREFERENCES ===

INSERT INTO candidate_preferences (candidate_id, preferred_categories, employment_types, desired_pay_min, desired_pay_max, pay_unit, preferred_shifts) VALUES
  ('11111111-aaaa-bbbb-cccc-111111111111', ARRAY['construction-skilled-trades'], ARRAY['temporary', 'temp-to-hire', 'direct-hire'], 28.00, 35.00, 'hourly', ARRAY['day']),
  ('22222222-aaaa-bbbb-cccc-222222222222', ARRAY['construction-skilled-trades'], ARRAY['direct-hire'], 30.00, 40.00, 'hourly', ARRAY['day', 'flexible']),
  ('33333333-aaaa-bbbb-cccc-333333333333', ARRAY['restoration-disaster-recovery'], ARRAY['temporary', 'contract'], 32.00, 45.00, 'hourly', ARRAY['day', 'night']),
  ('44444444-aaaa-bbbb-cccc-444444444444', ARRAY['administrative-clerical'], ARRAY['temporary', 'temp-to-hire'], 18.00, 24.00, 'hourly', ARRAY['day']);

-- === CANDIDATE SKILLS ===

INSERT INTO candidate_skills (candidate_id, skill_id, skill_name, years_experience, proficiency_level) VALUES
  ('11111111-aaaa-bbbb-cccc-111111111111', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'Carpentry', 8, 'expert'),
  ('22222222-aaaa-bbbb-cccc-222222222222', 'ffffffff-ffff-ffff-ffff-ffffffffffff', 'Electrical Work', 5, 'advanced'),
  ('33333333-aaaa-bbbb-cccc-333333333333', '30303030-3030-3030-3030-303030303030', 'Water Mitigation', 10, 'expert'),
  ('33333333-aaaa-bbbb-cccc-333333333333', '40404040-4040-4040-4040-404040404040', 'Demolition', 8, 'advanced'),
  ('44444444-aaaa-bbbb-cccc-444444444444', '50505050-5050-5050-5050-505050505050', 'Administrative Support', 3, 'intermediate');

-- === STORM PROFILES ===

INSERT INTO storm_profiles (candidate_id, storm_specialties, prior_deployments, travel_regions, willing_nationwide, mobilization_window, status) VALUES
  ('33333333-aaaa-bbbb-cccc-333333333333',
   ARRAY['Water Extraction', 'Structural Drying', 'Demolition'],
   5,
   ARRAY['TX', 'LA', 'FL'],
   TRUE,
   '48-hours',
   'qualified');

-- === JOBS (Published) ===

INSERT INTO jobs (
  id, title, slug, description, category, city, state, employment_type, shifts,
  pay_min, pay_max, pay_unit, pay_disclosed, published, published_at, expires_at
) VALUES
  ('job-1111-1111-1111-1111-111111111111',
   'Carpenter - Commercial Construction',
   'carpenter-commercial-construction-houston',
   'Experienced carpenter needed for commercial construction projects in Houston area. Must have own tools and reliable transportation.',
   'construction-skilled-trades',
   'Houston',
   'TX',
   'temporary',
   ARRAY['day'],
   28.00,
   32.00,
   'hourly',
   TRUE,
   TRUE,
   NOW() - INTERVAL '7 days',
   NOW() + INTERVAL '30 days'),

  ('job-2222-2222-2222-2222-222222222222',
   'Electrician - Industrial',
   'electrician-industrial-houston',
   'Licensed electrician for industrial facility maintenance. Must have active Texas electrical license.',
   'construction-skilled-trades',
   'Pasadena',
   'TX',
   'direct-hire',
   ARRAY['day', 'rotating'],
   35.00,
   45.00,
   'hourly',
   TRUE,
   TRUE,
   NOW() - INTERVAL '3 days',
   NOW() + INTERVAL '45 days'),

  ('job-3333-3333-3333-3333-333333333333',
   'Administrative Assistant',
   'administrative-assistant-houston',
   'Professional administrative assistant for busy construction office. Strong organizational and communication skills required.',
   'administrative-clerical',
   'Houston',
   'TX',
   'temp-to-hire',
   ARRAY['day'],
   18.00,
   22.00,
   'hourly',
   TRUE,
   TRUE,
   NOW() - INTERVAL '5 days',
   NOW() + INTERVAL '60 days');

-- === APPLICATIONS ===

INSERT INTO applications (job_id, candidate_id, source, stage) VALUES
  ('job-1111-1111-1111-1111-111111111111', '11111111-aaaa-bbbb-cccc-111111111111', 'job-board', 'reviewing'),
  ('job-2222-2222-2222-2222-222222222222', '22222222-aaaa-bbbb-cccc-222222222222', 'job-board', 'shortlisted'),
  ('job-3333-3333-3333-3333-333333333333', '44444444-aaaa-bbbb-cccc-444444444444', 'job-board', 'submitted');

-- === EMPLOYER LEADS ===

INSERT INTO employer_leads (
  id, company_name, contact_name, work_email, phone, industry, status, source_page
) VALUES
  ('lead-111-111-111-111-111111111111',
   'Tech Warehouse Solutions',
   'Robert Manager',
   'robert@techwarehouse.example',
   '713-555-2001',
   'warehouse-logistics',
   'new',
   '/employers/request-workers'),

  ('lead-222-222-222-222-222222222222',
   'Prime Accounting Services',
   'Jennifer CFO',
   'jennifer@primeaccounting.example',
   '713-555-2002',
   'accounting-finance',
   'contacted',
   '/staffing-services/professional-recruiting');

-- === ADMIN TASKS ===

INSERT INTO admin_tasks (
  assigned_to, title, description, task_type, priority, due_date, status
) VALUES
  ('22222222-2222-2222-2222-222222222222',
   'Follow up with Tech Warehouse Solutions',
   'Initial contact made, schedule needs assessment call.',
   'follow-up',
   'high',
   CURRENT_DATE + 2,
   'pending'),

  ('22222222-2222-2222-2222-222222222222',
   'Review Sarah Electrician credentials',
   'Verify electrical license and insurance.',
   'verification',
   'normal',
   CURRENT_DATE + 5,
   'pending');

-- === CONSENT RECORDS ===

INSERT INTO consent_records (
  candidate_id, consent_type, consent_given, consent_text, consent_version, source, source_page
) VALUES
  ('11111111-aaaa-bbbb-cccc-111111111111',
   'email-marketing',
   TRUE,
   'I agree to receive job opportunities and staffing news via email.',
   '1.0',
   'web-form',
   '/apply'),

  ('33333333-aaaa-bbbb-cccc-333333333333',
   'storm-alerts',
   TRUE,
   'I agree to receive storm deployment opportunity alerts.',
   '1.0',
   'web-form',
   '/storm-center/register');

-- === SYSTEM SETTINGS ===

INSERT INTO system_settings (key, value, description, category) VALUES
  ('job_board_page_size', '15', 'Number of jobs displayed per page', 'job_board'),
  ('availability_reconfirmation_days', '30', 'Days between storm worker availability reconfirmation', 'storm_center'),
  ('max_concurrent_applications', '5', 'Maximum active applications per candidate', 'applications'),
  ('integration_retry_max_attempts', '5', 'Maximum retry attempts for failed integrations', 'integrations');

-- Development seed complete
-- Remember: This is FICTIONAL data for testing only
