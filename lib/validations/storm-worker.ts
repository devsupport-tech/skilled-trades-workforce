import { z } from 'zod';
import {
  MOBILIZATION_WINDOWS,
  VALIDATION_RULES,
} from '@/lib/constants';

/**
 * Storm Worker Registration Form Validation Schema
 *
 * Maps to storm_profiles table in database
 * Used for /storm-center/register individual worker registration
 */

const phoneRegex = /^[\d\s\-\(\)\.+]+$/;

export const stormWorkerRegistrationSchema = z.object({
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

  // Current Location
  currentCity: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must be less than 100 characters')
    .trim(),

  currentState: z.string()
    .length(2, 'State must be 2-letter code (e.g., TX)')
    .toUpperCase()
    .trim(),

  currentZipCode: z.string()
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code')
    .trim(),

  // Storm Response Experience
  yearsStormExperience: z.coerce.number()
    .int('Years of storm experience must be a whole number')
    .min(0, 'Years of experience cannot be negative')
    .max(75, 'Years of experience must be less than 75'),

  stormSpecialties: z.array(z.string())
    .min(1, 'Please select at least one storm specialty')
    .max(20, 'Cannot select more than 20 specialties'),

  pastStormResponses: z.array(z.object({
    eventName: z.string().max(200),
    location: z.string().max(200),
    year: z.coerce.number().int().min(1900).max(new Date().getFullYear()),
    role: z.string().max(200),
  }))
    .max(20, 'Cannot add more than 20 past storm responses')
    .optional()
    .default([]),

  // Skills & Certifications
  primaryTrade: z.string()
    .min(2, 'Primary trade must be at least 2 characters')
    .max(100, 'Primary trade must be less than 100 characters'),

  skills: z.array(z.string())
    .min(1, 'Please add at least one skill')
    .max(50, 'Cannot add more than 50 skills'),

  certifications: z.array(z.string())
    .max(30, 'Cannot add more than 30 certifications')
    .optional()
    .default([]),

  licenseNumber: z.string()
    .max(100, 'License number must be less than 100 characters')
    .optional()
    .or(z.literal('')),

  licenseState: z.string()
    .length(2, 'State must be 2-letter code (e.g., TX)')
    .toUpperCase()
    .optional()
    .or(z.literal('')),

  // Deployment Preferences
  willingToDeployNationally: z.boolean().default(false),

  preferredDeploymentRegions: z.array(z.string())
    .max(10, 'Cannot select more than 10 preferred regions')
    .optional()
    .default([]),

  excludedStates: z.array(z.string())
    .max(50, 'Cannot exclude more than 50 states')
    .optional()
    .default([]),

  mobilizationWindow: z.enum([
    MOBILIZATION_WINDOWS.IMMEDIATE,
    MOBILIZATION_WINDOWS.WITHIN_24H,
    MOBILIZATION_WINDOWS.WITHIN_48H,
    MOBILIZATION_WINDOWS.WITHIN_72H,
    MOBILIZATION_WINDOWS.WITHIN_WEEK,
  ] as const),

  minimumAssignmentDuration: z.coerce.number()
    .int('Minimum assignment duration must be a whole number')
    .min(1, 'Minimum duration must be at least 1 day')
    .max(365, 'Minimum duration must be less than 365 days')
    .optional(),

  maximumAssignmentDuration: z.coerce.number()
    .int('Maximum assignment duration must be a whole number')
    .min(1, 'Maximum duration must be at least 1 day')
    .max(365, 'Maximum duration must be less than 365 days')
    .optional(),

  // Compensation
  desiredDailyRate: z.coerce.number()
    .min(0, 'Daily rate must be at least 0')
    .max(10000, 'Daily rate must be less than $10,000/day')
    .optional(),

  requiresPerDiem: z.boolean().default(false),

  requiresHousing: z.boolean().default(false),

  requiresTransportation: z.boolean().default(false),

  // Equipment & Resources
  hasOwnTools: z.boolean().default(false),

  hasOwnVehicle: z.boolean().default(false),

  vehicleType: z.string()
    .max(100, 'Vehicle type must be less than 100 characters')
    .optional()
    .or(z.literal('')),

  hasOwnEquipment: z.boolean().default(false),

  equipmentList: z.array(z.string())
    .max(50, 'Cannot add more than 50 equipment items')
    .optional()
    .default([]),

  // Eligibility
  isAuthorizedToWork: z.boolean()
    .refine((val) => val === true, 'You must be authorized to work in the United States'),

  hasDriversLicense: z.boolean().default(false),

  hasPassport: z.boolean().default(false),

  hasOSHACertification: z.boolean().default(false),

  hasBackgroundCheck: z.boolean().default(false),

  backgroundCheckDate: z.string()
    .optional()
    .or(z.literal('')),

  hasDrugScreening: z.boolean().default(false),

  drugScreeningDate: z.string()
    .optional()
    .or(z.literal('')),

  // Emergency Contact
  emergencyContactName: z.string()
    .min(2, 'Emergency contact name must be at least 2 characters')
    .max(200, 'Emergency contact name must be less than 200 characters')
    .trim(),

  emergencyContactPhone: z.string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .trim(),

  emergencyContactRelationship: z.string()
    .min(2, 'Relationship must be at least 2 characters')
    .max(100, 'Relationship must be less than 100 characters')
    .trim(),

  // Additional Information
  languagesSpoken: z.array(z.string())
    .max(10, 'Cannot add more than 10 languages')
    .optional()
    .default(['English']),

  additionalInfo: z.string()
    .max(2000, 'Additional information must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  // Documents (optional at registration)
  resume: z.instanceof(File)
    .refine((file) => file.size <= VALIDATION_RULES.MAX_FILE_SIZE_BYTES, 'Resume must be less than 5MB')
    .refine((file) => VALIDATION_RULES.ALLOWED_DOCUMENT_TYPES.includes(file.type as (typeof VALIDATION_RULES.ALLOWED_DOCUMENT_TYPES)[number]), 'Resume must be PDF, DOC, or DOCX')
    .optional(),

  // Consent
  consent: z.boolean()
    .refine((val) => val === true, 'You must agree to the terms and conditions'),

  deploymentTermsConsent: z.boolean()
    .refine((val) => val === true, 'You must acknowledge the deployment terms'),

  marketingConsent: z.boolean().default(false),

}).refine((data) => {
  // If both min and max assignment durations are provided, max must be >= min
  if (data.minimumAssignmentDuration !== undefined && data.maximumAssignmentDuration !== undefined) {
    return data.maximumAssignmentDuration >= data.minimumAssignmentDuration;
  }
  return true;
}, {
  message: 'Maximum assignment duration must be greater than or equal to minimum',
  path: ['maximumAssignmentDuration'],
});

export type StormWorkerRegistrationFormData = z.infer<typeof stormWorkerRegistrationSchema>;

/**
 * Partial schema for step-by-step forms
 */
export const stormWorkerStepSchemas = {
  personalInfo: stormWorkerRegistrationSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    alternatePhone: true,
    currentCity: true,
    currentState: true,
    currentZipCode: true,
  }),

  experience: stormWorkerRegistrationSchema.pick({
    yearsStormExperience: true,
    stormSpecialties: true,
    pastStormResponses: true,
  }),

  skills: stormWorkerRegistrationSchema.pick({
    primaryTrade: true,
    skills: true,
    certifications: true,
    licenseNumber: true,
    licenseState: true,
  }),

  deployment: stormWorkerRegistrationSchema.pick({
    willingToDeployNationally: true,
    preferredDeploymentRegions: true,
    excludedStates: true,
    mobilizationWindow: true,
    minimumAssignmentDuration: true,
    maximumAssignmentDuration: true,
  }),

  compensation: stormWorkerRegistrationSchema.pick({
    desiredDailyRate: true,
    requiresPerDiem: true,
    requiresHousing: true,
    requiresTransportation: true,
  }),

  equipment: stormWorkerRegistrationSchema.pick({
    hasOwnTools: true,
    hasOwnVehicle: true,
    vehicleType: true,
    hasOwnEquipment: true,
    equipmentList: true,
  }),

  eligibility: stormWorkerRegistrationSchema.pick({
    isAuthorizedToWork: true,
    hasDriversLicense: true,
    hasPassport: true,
    hasOSHACertification: true,
    hasBackgroundCheck: true,
    backgroundCheckDate: true,
    hasDrugScreening: true,
    drugScreeningDate: true,
  }),

  emergency: stormWorkerRegistrationSchema.pick({
    emergencyContactName: true,
    emergencyContactPhone: true,
    emergencyContactRelationship: true,
  }),
};
