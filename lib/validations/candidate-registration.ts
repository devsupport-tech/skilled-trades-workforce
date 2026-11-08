import { z } from 'zod';
import {
  EMPLOYMENT_TYPES,
  SHIFTS,
  MOBILIZATION_WINDOWS,
  VALIDATION_RULES,
} from '@/lib/constants';

/**
 * Candidate Registration Form Validation Schema
 *
 * Maps to candidates, candidate_preferences, candidate_skills, candidate_credentials tables
 * Used for /apply candidate registration form
 */

const phoneRegex = /^[\d\s\-\(\)\.+]+$/;
const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9_-]+\/?$/;

export const candidateRegistrationSchema = z.object({
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

  alternatePhone: z.string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),

  // Address Information
  addressLine1: z.string()
    .min(5, 'Address must be at least 5 characters')
    .max(255, 'Address must be less than 255 characters')
    .trim(),

  addressLine2: z.string()
    .max(255, 'Address line 2 must be less than 255 characters')
    .optional()
    .or(z.literal('')),

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

  primaryJobCategory: z.string()
    .min(1, 'Please select a primary job category')
    .max(100, 'Job category must be less than 100 characters'),

  jobTitle: z.string()
    .min(2, 'Job title must be at least 2 characters')
    .max(200, 'Job title must be less than 200 characters')
    .trim(),

  skills: z.array(z.string())
    .min(1, 'Please add at least one skill')
    .max(50, 'Cannot add more than 50 skills'),

  certifications: z.array(z.string())
    .max(30, 'Cannot add more than 30 certifications')
    .optional()
    .default([]),

  // Work Preferences
  employmentTypes: z.array(z.enum([
    EMPLOYMENT_TYPES.TEMPORARY,
    EMPLOYMENT_TYPES.TEMP_TO_HIRE,
    EMPLOYMENT_TYPES.DIRECT_HIRE,
    EMPLOYMENT_TYPES.CONTRACT,
    EMPLOYMENT_TYPES.REMOTE,
  ] as const))
    .min(1, 'Please select at least one employment type')
    .max(5, 'Cannot select more than 5 employment types'),

  shifts: z.array(z.enum([
    SHIFTS.DAY,
    SHIFTS.NIGHT,
    SHIFTS.SWING,
    SHIFTS.ROTATING,
    SHIFTS.FLEXIBLE,
  ] as const))
    .min(1, 'Please select at least one shift preference')
    .max(5, 'Cannot select more than 5 shift preferences'),

  desiredPayRateMin: z.coerce.number()
    .min(0, 'Minimum pay rate must be at least 0')
    .max(1000, 'Minimum pay rate must be less than $1000/hour')
    .optional(),

  desiredPayRateMax: z.coerce.number()
    .min(0, 'Maximum pay rate must be at least 0')
    .max(1000, 'Maximum pay rate must be less than $1000/hour')
    .optional(),

  willingToRelocate: z.boolean().default(false),

  maxCommuteMinutes: z.coerce.number()
    .int('Commute time must be a whole number')
    .min(0, 'Commute time cannot be negative')
    .max(300, 'Commute time must be less than 300 minutes')
    .optional(),

  preferredLocations: z.array(z.string())
    .max(10, 'Cannot add more than 10 preferred locations')
    .optional()
    .default([]),

  // Availability
  availableStartDate: z.string()
    .min(1, 'Please select an availability start date')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Start date cannot be in the past'),

  // Documents (optional at registration, can be uploaded later)
  resume: z.instanceof(File)
    .refine((file) => file.size <= VALIDATION_RULES.MAX_FILE_SIZE_BYTES, 'Resume must be less than 5MB')
    .refine((file) => VALIDATION_RULES.ALLOWED_DOCUMENT_TYPES.includes(file.type), 'Resume must be PDF, DOC, or DOCX')
    .optional(),

  // Social/Professional Links
  linkedInUrl: z.string()
    .regex(linkedInRegex, 'Please enter a valid LinkedIn profile URL')
    .max(255, 'LinkedIn URL must be less than 255 characters')
    .optional()
    .or(z.literal('')),

  // Background & Eligibility
  hasDriversLicense: z.boolean().default(false),

  hasReliableTransportation: z.boolean().default(false),

  isAuthorizedToWork: z.boolean()
    .refine((val) => val === true, 'You must be authorized to work in the United States'),

  hasBackgroundCheck: z.boolean().default(false),

  hasDrugScreening: z.boolean().default(false),

  // Additional Information
  specializations: z.array(z.string())
    .max(20, 'Cannot add more than 20 specializations')
    .optional()
    .default([]),

  languagesSpoken: z.array(z.string())
    .max(10, 'Cannot add more than 10 languages')
    .optional()
    .default(['English']),

  additionalInfo: z.string()
    .max(2000, 'Additional information must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  // Marketing
  source: z.string()
    .max(100, 'Source must be less than 100 characters')
    .optional()
    .default('website'),

  // Consent
  consent: z.boolean()
    .refine((val) => val === true, 'You must agree to the terms and conditions'),

  marketingConsent: z.boolean().default(false),

}).refine((data) => {
  // If both min and max pay rates are provided, max must be >= min
  if (data.desiredPayRateMin !== undefined && data.desiredPayRateMax !== undefined) {
    return data.desiredPayRateMax >= data.desiredPayRateMin;
  }
  return true;
}, {
  message: 'Maximum pay rate must be greater than or equal to minimum pay rate',
  path: ['desiredPayRateMax'],
});

export type CandidateRegistrationFormData = z.infer<typeof candidateRegistrationSchema>;

/**
 * Partial schema for step-by-step forms
 */
export const candidateRegistrationStepSchemas = {
  personalInfo: candidateRegistrationSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    alternatePhone: true,
  }),

  address: candidateRegistrationSchema.pick({
    addressLine1: true,
    addressLine2: true,
    city: true,
    state: true,
    zipCode: true,
  }),

  professional: candidateRegistrationSchema.pick({
    yearsExperience: true,
    primaryJobCategory: true,
    jobTitle: true,
    skills: true,
    certifications: true,
    linkedInUrl: true,
  }),

  preferences: candidateRegistrationSchema.pick({
    employmentTypes: true,
    shifts: true,
    desiredPayRateMin: true,
    desiredPayRateMax: true,
    willingToRelocate: true,
    maxCommuteMinutes: true,
    preferredLocations: true,
  }),

  availability: candidateRegistrationSchema.pick({
    availableStartDate: true,
  }),

  background: candidateRegistrationSchema.pick({
    hasDriversLicense: true,
    hasReliableTransportation: true,
    isAuthorizedToWork: true,
    hasBackgroundCheck: true,
    hasDrugScreening: true,
  }),

  additional: candidateRegistrationSchema.pick({
    specializations: true,
    languagesSpoken: true,
    additionalInfo: true,
    resume: true,
  }),
};

/**
 * Quick apply schema (minimal required fields)
 */
export const quickApplySchema = candidateRegistrationSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  primaryJobCategory: true,
  yearsExperience: true,
  consent: true,
});

export type QuickApplyFormData = z.infer<typeof quickApplySchema>;
