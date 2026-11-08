import { z } from 'zod';
import {
  URGENCY_LEVELS,
  MOBILIZATION_WINDOWS,
  VALIDATION_RULES,
} from '@/lib/constants';

/**
 * Storm Employer Request Form Validation Schema
 *
 * Maps to storm_requests table in database
 * Used for /storm-center/request-crews for employers requesting storm response workers/crews
 */

const phoneRegex = /^[\d\s\-\(\)\.+]+$/;

export const stormEmployerRequestSchema = z.object({
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

  contactTitle: z.string()
    .max(100, 'Title must be less than 100 characters')
    .optional()
    .or(z.literal('')),

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

  companyType: z.enum([
    'insurance_carrier',
    'tpa',
    'restoration_contractor',
    'general_contractor',
    'public_adjuster',
    'government_agency',
    'property_management',
    'other',
  ] as const, {
    message: 'Please select company type',
  }),

  // Event Information
  eventType: z.enum([
    'hurricane',
    'tornado',
    'flood',
    'wildfire',
    'winter_storm',
    'earthquake',
    'hail',
    'wind',
    'other_catastrophe',
  ] as const, {
    message: 'Please select event type',
  }),

  eventName: z.string()
    .max(200, 'Event name must be less than 200 characters')
    .optional()
    .or(z.literal('')),

  femaDisasterNumber: z.string()
    .max(100, 'FEMA disaster number must be less than 100 characters')
    .optional()
    .or(z.literal('')),

  // Location Information
  impactedArea: z.string()
    .min(5, 'Impacted area must be at least 5 characters')
    .max(500, 'Impacted area must be less than 500 characters')
    .trim(),

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

  multipleLocations: z.boolean().default(false),

  additionalLocations: z.array(z.object({
    city: z.string().max(100),
    state: z.string().length(2),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/),
  }))
    .max(50, 'Cannot add more than 50 additional locations')
    .optional()
    .default([]),

  // Request Details
  requestType: z.enum(['individuals', 'complete_crew', 'either'] as const, {
    message: 'Please select request type',
  }),

  numberOfWorkersNeeded: z.coerce.number()
    .int('Number of workers must be a whole number')
    .min(1, 'Must request at least 1 worker')
    .max(10000, 'Cannot request more than 10,000 workers at once'),

  numberOfCrewsNeeded: z.coerce.number()
    .int('Number of crews must be a whole number')
    .min(0, 'Cannot be negative')
    .max(500, 'Cannot request more than 500 crews')
    .optional(),

  preferredCrewSize: z.coerce.number()
    .int('Preferred crew size must be a whole number')
    .min(2, 'Crew size must be at least 2')
    .max(100, 'Crew size must be less than 100')
    .optional(),

  // Services Needed
  servicesNeeded: z.array(z.string())
    .min(1, 'Please select at least one service')
    .max(30, 'Cannot select more than 30 services'),

  scopeOfWork: z.string()
    .min(20, 'Scope of work must be at least 20 characters')
    .max(10000, 'Scope of work must be less than 10,000 characters')
    .trim(),

  requiredSkills: z.array(z.string())
    .min(1, 'Please add at least one required skill')
    .max(50, 'Cannot add more than 50 required skills'),

  requiredCertifications: z.array(z.string())
    .max(30, 'Cannot add more than 30 required certifications')
    .optional()
    .default([]),

  // Timeline
  startDate: z.string()
    .min(1, 'Please select a start date')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Start date cannot be in the past'),

  estimatedDuration: z.coerce.number()
    .int('Duration must be a whole number')
    .min(1, 'Duration must be at least 1 day')
    .max(365, 'Duration must be less than 365 days'),

  mobilizationNeeded: z.enum([
    MOBILIZATION_WINDOWS.IMMEDIATE,
    MOBILIZATION_WINDOWS.WITHIN_24H,
    MOBILIZATION_WINDOWS.WITHIN_48H,
    MOBILIZATION_WINDOWS.WITHIN_72H,
    MOBILIZATION_WINDOWS.WITHIN_WEEK,
  ] as const),

  urgency: z.enum([
    URGENCY_LEVELS.IMMEDIATE,
    URGENCY_LEVELS.WITHIN_WEEK,
    URGENCY_LEVELS.WITHIN_MONTH,
    URGENCY_LEVELS.FLEXIBLE,
  ] as const),

  // Compensation & Benefits
  payRateMin: z.coerce.number()
    .min(0, 'Minimum pay rate must be at least 0')
    .max(10000, 'Minimum pay rate must be less than $10,000/day'),

  payRateMax: z.coerce.number()
    .min(0, 'Maximum pay rate must be at least 0')
    .max(10000, 'Maximum pay rate must be less than $10,000/day')
    .optional(),

  payRateType: z.enum(['hourly', 'daily', 'project'] as const),

  providesPerDiem: z.boolean().default(false),

  perDiemAmount: z.coerce.number()
    .min(0, 'Per diem amount must be at least 0')
    .max(500, 'Per diem amount must be less than $500/day')
    .optional(),

  providesHousing: z.boolean().default(false),

  housingType: z.enum(['hotel', 'temporary_housing', 'rv_sites', 'other'] as const)
    .optional(),

  providesTransportation: z.boolean().default(false),

  transportationDetails: z.string()
    .max(1000, 'Transportation details must be less than 1000 characters')
    .optional()
    .or(z.literal('')),

  providesMeals: z.boolean().default(false),

  // Site Conditions
  siteAccessible: z.boolean().default(true),

  siteConditions: z.string()
    .max(2000, 'Site conditions must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  safetyRequirements: z.string()
    .max(2000, 'Safety requirements must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  requiresOSHA: z.boolean().default(false),

  requiresBackgroundCheck: z.boolean().default(false),

  requiresDrugScreening: z.boolean().default(false),

  // Equipment
  toolsProvided: z.boolean().default(false),

  equipmentProvided: z.boolean().default(false),

  equipmentList: z.array(z.string())
    .max(100, 'Cannot add more than 100 equipment items')
    .optional()
    .default([]),

  // Additional Information
  specialRequirements: z.string()
    .max(5000, 'Special requirements must be less than 5000 characters')
    .optional()
    .or(z.literal('')),

  insuranceRequirements: z.string()
    .max(2000, 'Insurance requirements must be less than 2000 characters')
    .optional()
    .or(z.literal('')),

  // Consent
  consent: z.boolean()
    .refine((val) => val === true, 'You must agree to be contacted'),

}).refine((data) => {
  // If both min and max pay rates are provided, max must be >= min
  if (data.payRateMax !== undefined) {
    return data.payRateMax >= data.payRateMin;
  }
  return true;
}, {
  message: 'Maximum pay rate must be greater than or equal to minimum pay rate',
  path: ['payRateMax'],
});

export type StormEmployerRequestFormData = z.infer<typeof stormEmployerRequestSchema>;

/**
 * Partial schema for step-by-step forms
 */
export const stormEmployerRequestStepSchemas = {
  contactInfo: stormEmployerRequestSchema.pick({
    contactName: true,
    contactEmail: true,
    contactPhone: true,
    contactTitle: true,
    companyName: true,
    companyWebsite: true,
    companyType: true,
  }),

  eventInfo: stormEmployerRequestSchema.pick({
    eventType: true,
    eventName: true,
    femaDisasterNumber: true,
  }),

  location: stormEmployerRequestSchema.pick({
    impactedArea: true,
    city: true,
    state: true,
    zipCode: true,
    multipleLocations: true,
    additionalLocations: true,
  }),

  requestDetails: stormEmployerRequestSchema.pick({
    requestType: true,
    numberOfWorkersNeeded: true,
    numberOfCrewsNeeded: true,
    preferredCrewSize: true,
    servicesNeeded: true,
    scopeOfWork: true,
    requiredSkills: true,
    requiredCertifications: true,
  }),

  timeline: stormEmployerRequestSchema.pick({
    startDate: true,
    estimatedDuration: true,
    mobilizationNeeded: true,
    urgency: true,
  }),

  compensation: stormEmployerRequestSchema.pick({
    payRateMin: true,
    payRateMax: true,
    payRateType: true,
    providesPerDiem: true,
    perDiemAmount: true,
    providesHousing: true,
    housingType: true,
    providesTransportation: true,
    transportationDetails: true,
    providesMeals: true,
  }),

  site: stormEmployerRequestSchema.pick({
    siteAccessible: true,
    siteConditions: true,
    safetyRequirements: true,
    requiresOSHA: true,
    requiresBackgroundCheck: true,
    requiresDrugScreening: true,
  }),

  equipment: stormEmployerRequestSchema.pick({
    toolsProvided: true,
    equipmentProvided: true,
    equipmentList: true,
  }),
};
