import { z } from 'zod';
import {
  MOBILIZATION_WINDOWS,
  VALIDATION_RULES,
} from '@/lib/constants';

/**
 * Crew Registration Form Validation Schema
 *
 * Maps to crews and crew_memberships tables in database
 * Used for /storm-center/register-crew for crew leaders
 */

const phoneRegex = /^[\d\s\-\(\)\.+]+$/;

export const crewRegistrationSchema = z.object({
  // Crew Information
  crewName: z.string()
    .min(2, 'Crew name must be at least 2 characters')
    .max(200, 'Crew name must be less than 200 characters')
    .trim(),

  crewSize: z.coerce.number()
    .int('Crew size must be a whole number')
    .min(2, 'Crew must have at least 2 members')
    .max(500, 'Crew size must be less than 500 members'),

  yearsWorkingTogether: z.coerce.number()
    .int('Years must be a whole number')
    .min(0, 'Years cannot be negative')
    .max(75, 'Years must be less than 75')
    .optional(),

  // Crew Leader Information
  leaderFirstName: z.string()
    .min(VALIDATION_RULES.NAME_MIN_LENGTH, 'First name must be at least 2 characters')
    .max(VALIDATION_RULES.NAME_MAX_LENGTH, 'First name must be less than 100 characters')
    .trim(),

  leaderLastName: z.string()
    .min(VALIDATION_RULES.NAME_MIN_LENGTH, 'Last name must be at least 2 characters')
    .max(VALIDATION_RULES.NAME_MAX_LENGTH, 'Last name must be less than 100 characters')
    .trim(),

  leaderEmail: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),

  leaderPhone: z.string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .trim(),

  leaderAlternatePhone: z.string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),

  // Current Location (crew's home base)
  baseCity: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must be less than 100 characters')
    .trim(),

  baseState: z.string()
    .length(2, 'State must be 2-letter code (e.g., TX)')
    .toUpperCase()
    .trim(),

  baseZipCode: z.string()
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code')
    .trim(),

  // Business Information (if applicable)
  companyName: z.string()
    .max(255, 'Company name must be less than 255 characters')
    .optional()
    .or(z.literal('')),

  companyEIN: z.string()
    .regex(/^\d{2}-?\d{7}$/, 'EIN must be in format XX-XXXXXXX')
    .optional()
    .or(z.literal('')),

  hasGeneralLiability: z.boolean().default(false),

  generalLiabilityAmount: z.coerce.number()
    .int('Liability amount must be a whole number')
    .min(0, 'Amount cannot be negative')
    .optional(),

  hasWorkersComp: z.boolean().default(false),

  // Storm Response Experience
  yearsStormExperience: z.coerce.number()
    .int('Years of storm experience must be a whole number')
    .min(0, 'Years of experience cannot be negative')
    .max(75, 'Years of experience must be less than 75'),

  crewSpecialties: z.array(z.string())
    .min(1, 'Please select at least one crew specialty')
    .max(20, 'Cannot select more than 20 specialties'),

  pastStormResponses: z.array(z.object({
    eventName: z.string().max(200),
    location: z.string().max(200),
    year: z.coerce.number().int().min(1900).max(new Date().getFullYear()),
    crewSize: z.coerce.number().int().min(1).max(1000),
  }))
    .max(20, 'Cannot add more than 20 past storm responses')
    .optional()
    .default([]),

  // Crew Capabilities
  primaryServices: z.array(z.string())
    .min(1, 'Please select at least one primary service')
    .max(20, 'Cannot select more than 20 services'),

  crewSkills: z.array(z.string())
    .min(1, 'Please add at least one crew skill')
    .max(50, 'Cannot add more than 50 skills'),

  certifications: z.array(z.string())
    .max(30, 'Cannot add more than 30 certifications')
    .optional()
    .default([]),

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
  ] as const, {
    message: 'Please select mobilization window',
  }),

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

  canSplitCrew: z.boolean().default(false),

  minimumCrewSize: z.coerce.number()
    .int('Minimum crew size must be a whole number')
    .min(1, 'Minimum size must be at least 1')
    .optional(),

  // Compensation
  desiredDailyRatePerPerson: z.coerce.number()
    .min(0, 'Daily rate must be at least 0')
    .max(10000, 'Daily rate must be less than $10,000/day per person')
    .optional(),

  requiresPerDiem: z.boolean().default(false),

  requiresHousing: z.boolean().default(false),

  requiresTransportation: z.boolean().default(false),

  // Equipment & Resources
  hasOwnTools: z.boolean().default(false),

  hasOwnVehicles: z.boolean().default(false),

  numberOfVehicles: z.coerce.number()
    .int('Number of vehicles must be a whole number')
    .min(0, 'Cannot be negative')
    .max(100, 'Must be less than 100')
    .optional(),

  vehicleTypes: z.array(z.string())
    .max(20, 'Cannot add more than 20 vehicle types')
    .optional()
    .default([]),

  hasOwnEquipment: z.boolean().default(false),

  equipmentList: z.array(z.string())
    .max(100, 'Cannot add more than 100 equipment items')
    .optional()
    .default([]),

  canProvideHousing: z.boolean().default(false),

  housingCapacity: z.coerce.number()
    .int('Housing capacity must be a whole number')
    .min(0, 'Cannot be negative')
    .max(1000, 'Must be less than 1000')
    .optional(),

  // Crew Member Information
  memberConsent: z.boolean()
    .refine((val) => val === true, 'You must confirm that all crew members have consented to be included'),

  // Will collect individual member details later in the process
  // This is just to register the crew initially

  // Additional Information
  languagesSpoken: z.array(z.string())
    .max(20, 'Cannot add more than 20 languages')
    .optional()
    .default(['English']),

  additionalInfo: z.string()
    .max(5000, 'Additional information must be less than 5000 characters')
    .optional()
    .or(z.literal('')),

  references: z.array(z.object({
    name: z.string().max(200),
    company: z.string().max(200),
    phone: z.string().regex(phoneRegex).max(20),
    email: z.string().email().max(255).optional(),
  }))
    .max(10, 'Cannot add more than 10 references')
    .optional()
    .default([]),

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
}).refine((data) => {
  // If crew can be split, minimum crew size must be specified and less than total crew size
  if (data.canSplitCrew && data.minimumCrewSize !== undefined) {
    return data.minimumCrewSize <= data.crewSize;
  }
  return true;
}, {
  message: 'Minimum crew size must be less than or equal to total crew size',
  path: ['minimumCrewSize'],
});

export type CrewRegistrationFormData = z.infer<typeof crewRegistrationSchema>;

/**
 * Partial schema for step-by-step forms
 */
export const crewRegistrationStepSchemas = {
  crewInfo: crewRegistrationSchema.pick({
    crewName: true,
    crewSize: true,
    yearsWorkingTogether: true,
  }),

  leaderInfo: crewRegistrationSchema.pick({
    leaderFirstName: true,
    leaderLastName: true,
    leaderEmail: true,
    leaderPhone: true,
    leaderAlternatePhone: true,
  }),

  location: crewRegistrationSchema.pick({
    baseCity: true,
    baseState: true,
    baseZipCode: true,
  }),

  business: crewRegistrationSchema.pick({
    companyName: true,
    companyEIN: true,
    hasGeneralLiability: true,
    generalLiabilityAmount: true,
    hasWorkersComp: true,
  }),

  experience: crewRegistrationSchema.pick({
    yearsStormExperience: true,
    crewSpecialties: true,
    pastStormResponses: true,
  }),

  capabilities: crewRegistrationSchema.pick({
    primaryServices: true,
    crewSkills: true,
    certifications: true,
  }),

  deployment: crewRegistrationSchema.pick({
    willingToDeployNationally: true,
    preferredDeploymentRegions: true,
    excludedStates: true,
    mobilizationWindow: true,
    minimumAssignmentDuration: true,
    maximumAssignmentDuration: true,
    canSplitCrew: true,
    minimumCrewSize: true,
  }),

  compensation: crewRegistrationSchema.pick({
    desiredDailyRatePerPerson: true,
    requiresPerDiem: true,
    requiresHousing: true,
    requiresTransportation: true,
  }),

  equipment: crewRegistrationSchema.pick({
    hasOwnTools: true,
    hasOwnVehicles: true,
    numberOfVehicles: true,
    vehicleTypes: true,
    hasOwnEquipment: true,
    equipmentList: true,
    canProvideHousing: true,
    housingCapacity: true,
  }),
};
