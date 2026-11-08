/**
 * Form Validation Schemas
 *
 * All Zod validation schemas for forms throughout the application
 * Import from this central index file for consistency
 */

// Employer Request
export {
  employerRequestSchema,
  employerRequestStepSchemas,
  type EmployerRequestFormData,
} from './employer-request';

// Candidate Registration
export {
  candidateRegistrationSchema,
  candidateRegistrationStepSchemas,
  quickApplySchema,
  type CandidateRegistrationFormData,
  type QuickApplyFormData,
} from './candidate-registration';

// Storm Worker Registration
export {
  stormWorkerRegistrationSchema,
  stormWorkerStepSchemas,
  type StormWorkerRegistrationFormData,
} from './storm-worker';

// Crew Registration
export {
  crewRegistrationSchema,
  crewRegistrationStepSchemas,
  type CrewRegistrationFormData,
} from './crew-registration';

// Storm Employer Request
export {
  stormEmployerRequestSchema,
  stormEmployerRequestStepSchemas,
  type StormEmployerRequestFormData,
} from './storm-employer-request';

// Job Application
export {
  jobApplicationSchema,
  jobApplicationStepSchemas,
  type JobApplicationFormData,
} from './job-application';
