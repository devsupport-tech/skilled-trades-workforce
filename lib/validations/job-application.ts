import { z } from 'zod';
import { VALIDATION_RULES } from '@/lib/constants';

/**
 * Job Application Form Validation Schema
 *
 * Maps to applications table in database
 * Used for /jobs/[slug]/apply for applying to specific jobs
 */

const phoneRegex = /^[\d\s\-\(\)\.+]+$/;
const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9_-]+\/?$/;

export const jobApplicationSchema = z.object({
  // Job Reference (populated automatically)
  jobId: z.string().uuid('Invalid job ID'),

  // Personal Information
  firstName: z.string()
    .min(VALIDATION_RULES.NAME_MIN_LENGTH, 'First name must be at least 2 characters')
    .max(VALIDATION_RULES.NAME_MAX_LENGTH, 'First name must be less than 100 characters')
    .trim(),

  lastName: z.string()
    .min(VALIDATION_RULES.NAME_MIN_LENGTH, 'Last name must be at least 2 characters')
    .max(VALIDATION_RULES.NAME_MAX_LENGTH, 'Last name must be less than 100 characters')
    .trim(),

  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),

  phone: z.string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .trim(),

  // Location
  city: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must be less than 100 characters')
    .trim(),

  state: z.string()
    .length(2, 'State must be 2-letter code (e.g., TX)')
    .toUpperCase()
    .trim(),

  zipCode: z.string()
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code')
    .trim(),

  // Professional Information
  yearsExperience: z.coerce.number()
    .int('Years of experience must be a whole number')
    .min(0, 'Years of experience cannot be negative')
    .max(75, 'Years of experience must be less than 75'),

  currentJobTitle: z.string()
    .max(200, 'Job title must be less than 200 characters')
    .optional()
    .or(z.literal('')),

  currentEmployer: z.string()
    .max(200, 'Employer must be less than 200 characters')
    .optional()
    .or(z.literal('')),

  // Resume & Cover Letter
  resume: z.instanceof(File)
    .refine((file) => file.size <= VALIDATION_RULES.MAX_FILE_SIZE_BYTES, 'Resume must be less than 5MB')
    .refine((file) => VALIDATION_RULES.ALLOWED_DOCUMENT_TYPES.includes(file.type), 'Resume must be PDF, DOC, or DOCX'),

  coverLetter: z.string()
    .max(5000, 'Cover letter must be less than 5000 characters')
    .optional()
    .or(z.literal('')),

  // Qualifications
  relevantSkills: z.array(z.string())
    .min(1, 'Please add at least one relevant skill')
    .max(20, 'Cannot add more than 20 skills'),

  certifications: z.array(z.string())
    .max(20, 'Cannot add more than 20 certifications')
    .optional()
    .default([]),

  hasRequiredLicenses: z.boolean()
    .refine((val) => val === true, 'You must confirm you have the required licenses'),

  licenseDetails: z.string()
    .max(1000, 'License details must be less than 1000 characters')
    .optional()
    .or(z.literal('')),

  // Availability
  availableStartDate: z.string()
    .min(1, 'Please select an availability start date')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Start date cannot be in the past'),

  // Compensation
  desiredSalary: z.coerce.number()
    .min(0, 'Desired salary must be at least 0')
    .max(10000000, 'Desired salary must be less than $10,000,000')
    .optional(),

  // Transportation
  hasDriversLicense: z.boolean().default(false),

  hasReliableTransportation: z.boolean().default(false),

  willingToTravel: z.boolean().default(false),

  travelPercentageAcceptable: z.coerce.number()
    .int('Travel percentage must be a whole number')
    .min(0, 'Cannot be negative')
    .max(100, 'Cannot exceed 100%')
    .optional(),

  // Work Authorization
  isAuthorizedToWork: z.boolean()
    .refine((val) => val === true, 'You must be authorized to work in the United States'),

  requiresSponsorship: z.boolean().default(false),

  // Background
  hasConvictions: z.boolean().default(false),

  convictionDetails: z.string()
    .max(2000, 'Conviction details must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  canPassBackgroundCheck: z.boolean().default(true),

  canPassDrugScreening: z.boolean().default(true),

  // References
  references: z.array(z.object({
    name: z.string().max(200),
    company: z.string().max(200),
    title: z.string().max(100),
    phone: z.string().regex(phoneRegex).max(20),
    email: z.string().email().max(255),
    relationship: z.string().max(100),
  }))
    .min(2, 'Please provide at least 2 references')
    .max(5, 'Cannot add more than 5 references'),

  // Social/Professional Links
  linkedInUrl: z.string()
    .regex(linkedInRegex, 'Please enter a valid LinkedIn profile URL')
    .max(255, 'LinkedIn URL must be less than 255 characters')
    .optional()
    .or(z.literal('')),

  portfolioUrl: z.string()
    .url('Please enter a valid portfolio URL')
    .max(255, 'Portfolio URL must be less than 255 characters')
    .optional()
    .or(z.literal('')),

  // Additional Information
  whyGoodFit: z.string()
    .min(50, 'Please explain why you would be a good fit (at least 50 characters)')
    .max(2000, 'Response must be less than 2000 characters')
    .trim(),

  additionalInfo: z.string()
    .max(2000, 'Additional information must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  // How did you hear about us?
  source: z.string()
    .max(100, 'Source must be less than 100 characters')
    .optional()
    .default('website'),

  // Consent
  consent: z.boolean()
    .refine((val) => val === true, 'You must agree to the terms and conditions'),

}).refine((data) => {
  // If has convictions, details must be provided
  if (data.hasConvictions && !data.convictionDetails) {
    return false;
  }
  return true;
}, {
  message: 'Please provide details about convictions',
  path: ['convictionDetails'],
});

export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;

/**
 * Partial schema for step-by-step forms
 */
export const jobApplicationStepSchemas = {
  personalInfo: jobApplicationSchema.pick({
    jobId: true,
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    city: true,
    state: true,
    zipCode: true,
  }),

  professional: jobApplicationSchema.pick({
    yearsExperience: true,
    currentJobTitle: true,
    currentEmployer: true,
    relevantSkills: true,
    certifications: true,
    hasRequiredLicenses: true,
    licenseDetails: true,
  }),

  documents: jobApplicationSchema.pick({
    resume: true,
    coverLetter: true,
    linkedInUrl: true,
    portfolioUrl: true,
  }),

  availability: jobApplicationSchema.pick({
    availableStartDate: true,
    desiredSalary: true,
  }),

  transportation: jobApplicationSchema.pick({
    hasDriversLicense: true,
    hasReliableTransportation: true,
    willingToTravel: true,
    travelPercentageAcceptable: true,
  }),

  authorization: jobApplicationSchema.pick({
    isAuthorizedToWork: true,
    requiresSponsorship: true,
  }),

  background: jobApplicationSchema.pick({
    hasConvictions: true,
    convictionDetails: true,
    canPassBackgroundCheck: true,
    canPassDrugScreening: true,
  }),

  references: jobApplicationSchema.pick({
    references: true,
  }),

  final: jobApplicationSchema.pick({
    whyGoodFit: true,
    additionalInfo: true,
    source: true,
    consent: true,
  }),
};
