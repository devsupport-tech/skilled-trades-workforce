/**
 * Business Constants
 *
 * Enums, static lists, and business rules that don't require configuration.
 */

// === Employment Types ===
export const EMPLOYMENT_TYPES = {
  TEMPORARY: 'temporary',
  TEMP_TO_HIRE: 'temp-to-hire',
  DIRECT_HIRE: 'direct-hire',
  CONTRACT: 'contract',
  REMOTE: 'remote',
} as const;

export type EmploymentType = typeof EMPLOYMENT_TYPES[keyof typeof EMPLOYMENT_TYPES];

// === Shift Preferences ===
export const SHIFTS = {
  DAY: 'day',
  NIGHT: 'night',
  SWING: 'swing',
  ROTATING: 'rotating',
  FLEXIBLE: 'flexible',
  WEEKENDS: 'weekends',
} as const;

export type Shift = typeof SHIFTS[keyof typeof SHIFTS];

// === Urgency Levels ===
export const URGENCY_LEVELS = {
  IMMEDIATE: 'immediate',
  WITHIN_WEEK: 'within-week',
  WITHIN_MONTH: 'within-month',
  FLEXIBLE: 'flexible',
} as const;

export type UrgencyLevel = typeof URGENCY_LEVELS[keyof typeof URGENCY_LEVELS];

// === Mobilization Windows (Storm) ===
export const MOBILIZATION_WINDOWS = {
  IMMEDIATE: 'immediately',
  WITHIN_24H: '24-hours',
  WITHIN_48H: '48-hours',
  WITHIN_72H: '72-hours',
  WITHIN_WEEK: 'one-week',
  OTHER: 'other',
} as const;

export type MobilizationWindow = typeof MOBILIZATION_WINDOWS[keyof typeof MOBILIZATION_WINDOWS];

// === Deployment Durations ===
export const DEPLOYMENT_DURATIONS = {
  ONE_WEEK: '1-week',
  TWO_WEEKS: '2-weeks',
  ONE_MONTH: '1-month',
  TWO_MONTHS: '2-months',
  THREE_PLUS_MONTHS: '3-plus-months',
  FLEXIBLE: 'flexible',
} as const;

export type DeploymentDuration = typeof DEPLOYMENT_DURATIONS[keyof typeof DEPLOYMENT_DURATIONS];

// === Lead/Application Statuses ===
export const LEAD_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUALIFIED: 'qualified',
  PROPOSAL_SENT: 'proposal-sent',
  NEGOTIATING: 'negotiating',
  WON: 'won',
  LOST: 'lost',
  ON_HOLD: 'on-hold',
} as const;

export type LeadStatus = typeof LEAD_STATUS[keyof typeof LEAD_STATUS];

// === Candidate Statuses ===
export const CANDIDATE_STATUS = {
  NEW: 'new',
  SCREENING: 'screening',
  QUALIFIED: 'qualified',
  AVAILABLE: 'available',
  INTERVIEWING: 'interviewing',
  PLACED: 'placed',
  INACTIVE: 'inactive',
} as const;

export type CandidateStatus = typeof CANDIDATE_STATUS[keyof typeof CANDIDATE_STATUS];

// === Storm Worker Statuses ===
export const STORM_WORKER_STATUS = {
  REGISTERED: 'registered',
  SCREENING: 'screening',
  QUALIFIED: 'qualified',
  AVAILABLE: 'available',
  DEPLOYED: 'deployed',
  UNAVAILABLE: 'unavailable',
  INACTIVE: 'inactive',
} as const;

export type StormWorkerStatus = typeof STORM_WORKER_STATUS[keyof typeof STORM_WORKER_STATUS];

// === Crew Statuses ===
export const CREW_STATUS = {
  REGISTERED: 'registered',
  VERIFICATION_PENDING: 'verification-pending',
  QUALIFIED: 'qualified',
  AVAILABLE: 'available',
  DEPLOYED: 'deployed',
  UNAVAILABLE: 'unavailable',
  INACTIVE: 'inactive',
} as const;

export type CrewStatus = typeof CREW_STATUS[keyof typeof CREW_STATUS];

// === Application Stages ===
export const APPLICATION_STAGE = {
  SUBMITTED: 'submitted',
  REVIEWING: 'reviewing',
  SHORTLISTED: 'shortlisted',
  INTERVIEWING: 'interviewing',
  OFFER_EXTENDED: 'offer-extended',
  HIRED: 'hired',
  REJECTED: 'rejected',
  WITHDRAWN: 'withdrawn',
} as const;

export type ApplicationStage = typeof APPLICATION_STAGE[keyof typeof APPLICATION_STAGE];

// === Pay Ranges ===
export const PAY_RANGES = [
  { label: 'Under $15/hr', value: '0-15' },
  { label: '$15-$20/hr', value: '15-20' },
  { label: '$20-$25/hr', value: '20-25' },
  { label: '$25-$30/hr', value: '25-30' },
  { label: '$30-$40/hr', value: '30-40' },
  { label: '$40-$50/hr', value: '40-50' },
  { label: '$50+/hr', value: '50-plus' },
  { label: 'Salary (Annual)', value: 'salary' },
] as const;

// === Experience Levels ===
export const EXPERIENCE_LEVELS = [
  { label: 'Entry Level (0-2 years)', value: '0-2' },
  { label: 'Mid-Level (2-5 years)', value: '2-5' },
  { label: 'Senior (5-10 years)', value: '5-10' },
  { label: 'Expert (10+ years)', value: '10-plus' },
] as const;

// === Travel Willingness ===
export const TRAVEL_WILLINGNESS = {
  NONE: 'no-travel',
  LOCAL: 'local-only',
  REGIONAL: 'regional',
  STATEWIDE: 'statewide',
  NATIONWIDE: 'nationwide',
  INTERNATIONAL: 'international',
} as const;

export type TravelWillingness = typeof TRAVEL_WILLINGNESS[keyof typeof TRAVEL_WILLINGNESS];

// === Credential Types ===
export const CREDENTIAL_TYPES = {
  LICENSE: 'license',
  CERTIFICATION: 'certification',
  PERMIT: 'permit',
  CARD: 'card',
  OTHER: 'other',
} as const;

export type CredentialType = typeof CREDENTIAL_TYPES[keyof typeof CREDENTIAL_TYPES];

// === Document Types ===
export const DOCUMENT_TYPES = {
  RESUME: 'resume',
  COVER_LETTER: 'cover-letter',
  CERTIFICATION: 'certification',
  LICENSE: 'license',
  REFERENCE: 'reference',
  OTHER: 'other',
} as const;

export type DocumentType = typeof DOCUMENT_TYPES[keyof typeof DOCUMENT_TYPES];

// === Communication Consent Types ===
export const CONSENT_TYPES = {
  EMAIL_MARKETING: 'email-marketing',
  SMS_MARKETING: 'sms-marketing',
  PHONE_CALLS: 'phone-calls',
  JOB_ALERTS: 'job-alerts',
  STORM_ALERTS: 'storm-alerts',
  DATA_PROCESSING: 'data-processing',
  TERMS_OF_SERVICE: 'terms-of-service',
  PRIVACY_POLICY: 'privacy-policy',
} as const;

export type ConsentType = typeof CONSENT_TYPES[keyof typeof CONSENT_TYPES];

// === Integration Event Types ===
export const INTEGRATION_EVENT_TYPES = {
  EMPLOYER_LEAD_CREATED: 'employer.lead.created',
  CANDIDATE_REGISTERED: 'candidate.registered',
  STORM_WORKER_REGISTERED: 'storm_worker.registered',
  CREW_REGISTERED: 'crew.registered',
  APPLICATION_SUBMITTED: 'application.submitted',
  STORM_REQUEST_CREATED: 'storm_request.created',
  LEAD_STATUS_CHANGED: 'lead.status_changed',
  CANDIDATE_STATUS_CHANGED: 'candidate.status_changed',
} as const;

export type IntegrationEventType = typeof INTEGRATION_EVENT_TYPES[keyof typeof INTEGRATION_EVENT_TYPES];

// === Activity Event Types ===
export const ACTIVITY_EVENT_TYPES = {
  CREATED: 'created',
  UPDATED: 'updated',
  STATUS_CHANGED: 'status_changed',
  CONTACTED: 'contacted',
  NOTE_ADDED: 'note_added',
  DOCUMENT_UPLOADED: 'document_uploaded',
  INTERVIEW_SCHEDULED: 'interview_scheduled',
  ASSIGNMENT_CREATED: 'assignment_created',
  DEPLOYMENT_STARTED: 'deployment_started',
  DEPLOYMENT_COMPLETED: 'deployment_completed',
} as const;

export type ActivityEventType = typeof ACTIVITY_EVENT_TYPES[keyof typeof ACTIVITY_EVENT_TYPES];

// === CRM Sync Statuses ===
export const CRM_SYNC_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  SUCCESS: 'success',
  FAILED: 'failed',
  SKIPPED: 'skipped',
} as const;

export type CRMSyncStatus = typeof CRM_SYNC_STATUS[keyof typeof CRM_SYNC_STATUS];

// === Notification Channels ===
export const NOTIFICATION_CHANNELS = {
  EMAIL: 'email',
  SMS: 'sms',
  INTERNAL: 'internal',
  WEBHOOK: 'webhook',
} as const;

export type NotificationChannel = typeof NOTIFICATION_CHANNELS[keyof typeof NOTIFICATION_CHANNELS];

// === Email Templates ===
export const EMAIL_TEMPLATES = {
  EMPLOYER_REQUEST_CONFIRMATION: 'employer-request-confirmation',
  CANDIDATE_REGISTRATION_CONFIRMATION: 'candidate-registration-confirmation',
  STORM_WORKER_CONFIRMATION: 'storm-worker-confirmation',
  CREW_REGISTRATION_CONFIRMATION: 'crew-registration-confirmation',
  APPLICATION_CONFIRMATION: 'application-confirmation',
  APPLICATION_STATUS_UPDATE: 'application-status-update',
  STORM_DEPLOYMENT_OFFER: 'storm-deployment-offer',
  CREW_MEMBER_INVITATION: 'crew-member-invitation',
  AVAILABILITY_RECONFIRMATION: 'availability-reconfirmation',
  INTERNAL_LEAD_NOTIFICATION: 'internal-lead-notification',
} as const;

export type EmailTemplate = typeof EMAIL_TEMPLATES[keyof typeof EMAIL_TEMPLATES];

// === Validation Rules ===
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  MAX_FILE_SIZE_BYTES: 10 * 1024 * 1024, // 10MB
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  phone: {
    pattern: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
    message: 'Please enter a valid phone number',
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  zip: {
    pattern: /^\d{5}(-\d{4})?$/,
    message: 'Please enter a valid ZIP code',
  },
  website: {
    pattern: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    message: 'Please enter a valid URL',
  },
} as const;

// === Error Messages ===
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  FILE_TOO_LARGE: 'File size must be less than 10MB',
  INVALID_FILE_TYPE: 'Only PDF, DOC, and DOCX files are allowed',
  SUBMISSION_FAILED: 'We encountered an error processing your submission. Please try again.',
  RATE_LIMIT_EXCEEDED: 'Too many submissions. Please try again later.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  GENERIC_ERROR: 'An unexpected error occurred. Please contact us directly if this persists.',
} as const;

// === Success Messages ===
export const SUCCESS_MESSAGES = {
  EMPLOYER_REQUEST_SUBMITTED: 'Thank you! We\'ve received your request and will contact you shortly.',
  CANDIDATE_REGISTERED: 'Registration successful! Check your email for confirmation.',
  STORM_WORKER_REGISTERED: 'You\'re registered for storm deployment opportunities. We\'ll be in touch!',
  CREW_REGISTERED: 'Crew registration received. We\'ll verify details and reach out soon.',
  APPLICATION_SUBMITTED: 'Your application has been submitted successfully.',
} as const;

// === Navigation Items ===
export const MAIN_NAV_ITEMS = [
  { label: 'Staffing Services', href: '/staffing-services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Employers', href: '/employers' },
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Storm Center', href: '/storm-center' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// === Call-to-Action Priorities ===
export const CTA_PRIORITIES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

// === Pagination ===
export const PAGINATION = {
  defaultPageSize: 20,
  maxPageSize: 100,
  jobBoardPageSize: 15,
  dashboardPageSize: 25,
} as const;

// === Cache TTL (seconds) ===
export const CACHE_TTL = {
  staticPage: 3600, // 1 hour
  jobListing: 300, // 5 minutes
  jobDetail: 600, // 10 minutes
  industryPage: 3600, // 1 hour
  locationPage: 3600, // 1 hour
} as const;
