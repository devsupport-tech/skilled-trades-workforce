import { z } from 'zod';
import {
  EMPLOYMENT_TYPES,
  SHIFTS,
  URGENCY_LEVELS,
  VALIDATION_RULES
} from '@/lib/constants';

/**
 * Employer Worker Request Form Validation Schema
 *
 * Maps to employer_leads table in database
 * Used for /employers/request-workers form
 */

const phoneRegex = /^[\d\s\-\(\)\.+]+$/;

const employerRequestBaseSchema = z.object({
  // Contact Information
  contactName: z.string()
    .min(VALIDATION_RULES.NAME_MIN_LENGTH, 'Contact name must be at least 2 characters')
    .max(VALIDATION_RULES.NAME_MAX_LENGTH, 'Contact name must be less than 100 characters')
    .trim(),

  contactEmail: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),

  contactPhone: z.string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .trim(),

  // Company Information
  companyName: z.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(255, 'Company name must be less than 255 characters')
    .trim(),

  companyWebsite: z.string()
    .url('Please enter a valid website URL')
    .max(255, 'Website URL must be less than 255 characters')
    .optional()
    .or(z.literal('')),

  industry: z.string()
    .min(1, 'Please select an industry')
    .max(100, 'Industry must be less than 100 characters'),

  // Position Details
  positionTitle: z.string()
    .min(2, 'Position title must be at least 2 characters')
    .max(200, 'Position title must be less than 200 characters')
    .trim(),

  numberOfPositions: z.coerce.number()
    .int('Number of positions must be a whole number')
    .min(1, 'Must request at least 1 position')
    .max(1000, 'Cannot request more than 1000 positions at once'),

  employmentType: z.enum([
    EMPLOYMENT_TYPES.TEMPORARY,
    EMPLOYMENT_TYPES.TEMP_TO_HIRE,
    EMPLOYMENT_TYPES.DIRECT_HIRE,
    EMPLOYMENT_TYPES.CONTRACT,
    EMPLOYMENT_TYPES.REMOTE,
  ] as const),

  shift: z.enum([
    SHIFTS.DAY,
    SHIFTS.NIGHT,
    SHIFTS.SWING,
    SHIFTS.ROTATING,
    SHIFTS.FLEXIBLE,
  ] as const).optional(),

  // Compensation
  payRateMin: z.coerce.number()
    .min(0, 'Minimum pay rate must be at least 0')
    .max(1000, 'Minimum pay rate must be less than $1000/hour')
    .optional(),

  payRateMax: z.coerce.number()
    .min(0, 'Maximum pay rate must be at least 0')
    .max(1000, 'Maximum pay rate must be less than $1000/hour')
    .optional(),

  payRateType: z.enum(['hourly', 'salary', 'project'] as const).optional(),

  // Timeline
  startDate: z.string()
    .min(1, 'Please select a start date')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Start date cannot be in the past'),

  urgency: z.enum([
    URGENCY_LEVELS.IMMEDIATE,
    URGENCY_LEVELS.WITHIN_WEEK,
    URGENCY_LEVELS.WITHIN_MONTH,
    URGENCY_LEVELS.FLEXIBLE,
  ] as const),

  // Location
  workLocation: z.string()
    .min(5, 'Work location must be at least 5 characters')
    .max(500, 'Work location must be less than 500 characters')
    .trim(),

  workCity: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must be less than 100 characters')
    .trim(),

  workState: z.string()
    .length(2, 'State must be 2-letter code (e.g., TX)')
    .toUpperCase()
    .trim(),

  workZip: z.string()
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code')
    .trim(),

  // Job Details
  jobDescription: z.string()
    .min(20, 'Job description must be at least 20 characters')
    .max(5000, 'Job description must be less than 5000 characters')
    .trim(),

  requiredSkills: z.array(z.string())
    .min(1, 'Please add at least one required skill')
    .max(20, 'Cannot add more than 20 required skills'),

  preferredSkills: z.array(z.string())
    .max(20, 'Cannot add more than 20 preferred skills')
    .optional()
    .default([]),

  certifications: z.array(z.string())
    .max(20, 'Cannot add more than 20 certifications')
    .optional()
    .default([]),

  // Additional Information
  specialRequirements: z.string()
    .max(2000, 'Special requirements must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  // Marketing
  source: z.string()
    .max(100, 'Source must be less than 100 characters')
    .optional()
    .default('website'),

  // Consent
  consent: z.boolean()
    .refine((val) => val === true, 'You must agree to be contacted'),

});

export const employerRequestSchema = employerRequestBaseSchema.refine((data) => {
  // If both min and max pay rates are provided, max must be >= min
  if (data.payRateMin !== undefined && data.payRateMax !== undefined) {
    return data.payRateMax >= data.payRateMin;
  }
  return true;
}, {
  message: 'Maximum pay rate must be greater than or equal to minimum pay rate',
  path: ['payRateMax'],
});

export type EmployerRequestFormData = z.infer<typeof employerRequestSchema>;

/**
 * Partial schema for step-by-step forms
 */
export const employerRequestStepSchemas = {
  contactInfo: employerRequestBaseSchema.pick({
    contactName: true,
    contactEmail: true,
    contactPhone: true,
    companyName: true,
    companyWebsite: true,
    industry: true,
  }),

  positionDetails: employerRequestBaseSchema.pick({
    positionTitle: true,
    numberOfPositions: true,
    employmentType: true,
    shift: true,
    jobDescription: true,
  }),

  compensation: employerRequestBaseSchema.pick({
    payRateMin: true,
    payRateMax: true,
    payRateType: true,
  }),

  timeline: employerRequestBaseSchema.pick({
    startDate: true,
    urgency: true,
  }),

  location: employerRequestBaseSchema.pick({
    workLocation: true,
    workCity: true,
    workState: true,
    workZip: true,
  }),

  requirements: employerRequestBaseSchema.pick({
    requiredSkills: true,
    preferredSkills: true,
    certifications: true,
    specialRequirements: true,
  }),
};
