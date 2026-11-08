/**
 * Centralized Configuration
 *
 * All environment variables and business configuration in one place.
 * Uses placeholders where values are not yet provided by business owner.
 */

// Environment variable validation
function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  if (!value && !defaultValue) {
    console.warn(`Missing environment variable: ${key}`);
    return `[${key}_NOT_SET]`;
  }
  return value;
}

function getPublicEnvVar(key: string, defaultValue?: string): string {
  if (typeof window !== 'undefined') {
    // Client-side
    return (window as any).ENV?.[key] || process.env[key] || defaultValue || `[${key}_NOT_SET]`;
  }
  // Server-side
  return process.env[key] || defaultValue || `[${key}_NOT_SET]`;
}

// === Database Configuration ===
export const database = {
  supabaseUrl: getPublicEnvVar('NEXT_PUBLIC_SUPABASE_URL', ''),
  supabaseAnonKey: getPublicEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY', ''),
  supabaseServiceRoleKey: getEnvVar('SUPABASE_SERVICE_ROLE_KEY', ''),
  databaseUrl: getEnvVar('DATABASE_URL', ''),
} as const;

// === Integration Configuration ===
export const integrations = {
  hubspot: {
    accessToken: getEnvVar('HUBSPOT_ACCESS_TOKEN', ''),
    portalId: getEnvVar('HUBSPOT_PORTAL_ID', ''),
  },
  postmark: {
    serverToken: getEnvVar('POSTMARK_SERVER_TOKEN', ''),
    fromEmail: getEnvVar('POSTMARK_FROM_EMAIL', 'no-reply@example.com'),
  },
  n8n: {
    webhookUrl: getEnvVar('N8N_WEBHOOK_URL', ''),
    apiKey: getEnvVar('N8N_API_KEY', ''),
  },
} as const;

// === Security Configuration ===
export const security = {
  turnstile: {
    siteKey: getPublicEnvVar('TURNSTILE_SITE_KEY', ''),
    secretKey: getEnvVar('TURNSTILE_SECRET_KEY', ''),
  },
  sessionSecret: getEnvVar('SESSION_SECRET', ''),
} as const;

// === Company Information ===
// TO BE PROVIDED by business owner
export const company = {
  name: 'Skilled Trades Workforce',
  legalName: '[LEGAL_ENTITY_NAME - TO BE PROVIDED]',
  tagline: 'Connecting Talent. Building Businesses. Creating Opportunities.',

  // Contact information
  email: getPublicEnvVar('NEXT_PUBLIC_COMPANY_EMAIL', '[CONTACT_EMAIL - TO BE PROVIDED]'),
  phone: getPublicEnvVar('NEXT_PUBLIC_COMPANY_PHONE', '[PHONE_NUMBER - TO BE PROVIDED]'),
  address: {
    street: '[STREET_ADDRESS - TO BE PROVIDED]',
    city: 'Houston',
    state: 'TX',
    zip: '[ZIP_CODE - TO BE PROVIDED]',
    full: getPublicEnvVar('NEXT_PUBLIC_COMPANY_ADDRESS', 'Houston, TX'),
  },

  // Business hours
  hours: {
    weekday: 'Monday - Friday: 8:00 AM - 6:00 PM CT',
    weekend: 'Saturday - Sunday: Closed',
    holidays: 'Closed on major holidays',
  },

  // Social media (optional)
  social: {
    linkedin: '[LINKEDIN_URL - TO BE PROVIDED]',
    facebook: '[FACEBOOK_URL - TO BE PROVIDED]',
    twitter: '[TWITTER_URL - TO BE PROVIDED]',
  },
} as const;

// === Brand Configuration ===
// TO BE PROVIDED by business owner
export const brand = {
  colors: {
    primary: '[PRIMARY_COLOR - TO BE PROVIDED]',
    secondary: '[SECONDARY_COLOR - TO BE PROVIDED]',
    accent: '[ACCENT_COLOR - TO BE PROVIDED]',
  },
  logo: {
    light: '/images/logo.svg',
    dark: '/images/logo-dark.svg',
    icon: '/images/icon.svg',
  },
} as const;

// === Application Configuration ===
export const app = {
  name: 'Skilled Trades Workforce',
  description: 'Staffing and recruiting solutions for Greater Houston businesses, with opportunities for skilled trades, office professionals, industrial teams, and more.',
  siteUrl: getPublicEnvVar('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000'),
  environment: getEnvVar('NODE_ENV', 'development'),
} as const;

// === Geographic Service Areas ===
export const serviceAreas = {
  primary: 'Greater Houston',
  cities: [
    'Houston',
    'Spring',
    'The Woodlands',
    'Conroe',
    'Katy',
    'Cypress',
    'Humble',
    'Tomball',
    'Pasadena',
    'Baytown',
    'Sugar Land',
    'Pearland',
    'Beaumont',
  ],
  stateCode: 'TX',
  stateName: 'Texas',
  nationalService: 'Storm Response Workforce Center only',
} as const;

// === Business Models ===
export const services = {
  staffing: [
    {
      id: 'temporary-staffing',
      name: 'Temporary Staffing',
      slug: 'temporary-staffing',
      description: 'Short-term workforce solutions for seasonal demands, special projects, and coverage needs.',
    },
    {
      id: 'temp-to-hire',
      name: 'Temp-to-Hire',
      slug: 'temp-to-hire',
      description: 'Evaluate candidates on the job before making a permanent hiring decision.',
    },
    {
      id: 'direct-hire',
      name: 'Direct Hire',
      slug: 'direct-hire',
      description: 'Professional recruiting services for permanent position placements.',
    },
    {
      id: 'contract-staffing',
      name: 'Contract Staffing',
      slug: 'contract-staffing',
      description: 'Project-based talent for defined scopes of work and timelines.',
    },
    {
      id: 'professional-recruiting',
      name: 'Professional Recruiting',
      slug: 'professional-recruiting',
      description: 'Specialized recruitment for office, management, and professional roles.',
    },
    {
      id: 'remote-staffing',
      name: 'Remote Staffing',
      slug: 'remote-staffing',
      description: 'Virtual and remote-capable talent for distributed teams.',
    },
  ],
  storm: {
    enabled: true,
    name: 'National Storm Response Workforce Center',
    description: 'Connecting individual workers and complete crews with disaster response opportunities nationwide.',
  },
} as const;

// === Job Categories ===
export const jobCategories = [
  {
    id: 'construction-skilled-trades',
    name: 'Construction and Skilled Trades',
    slug: 'construction-skilled-trades',
    examples: 'Carpenters, electricians, plumbers, HVAC technicians, painters, drywall installers, welders, construction laborers',
  },
  {
    id: 'restoration-disaster-recovery',
    name: 'Restoration and Disaster Recovery',
    slug: 'restoration-disaster-recovery',
    examples: 'Water mitigation technicians, packout crews, contents technicians, demolition labor, fire restoration technicians',
  },
  {
    id: 'administrative-clerical',
    name: 'Administrative and Clerical',
    slug: 'administrative-clerical',
    examples: 'Administrative assistants, receptionists, executive assistants, data entry clerks, office coordinators',
  },
  {
    id: 'office-management',
    name: 'Office Management and Operations',
    slug: 'office-management',
    examples: 'Office managers, operations coordinators, branch managers, project coordinators',
  },
  {
    id: 'accounting-finance',
    name: 'Accounting and Finance',
    slug: 'accounting-finance',
    examples: 'Bookkeepers, AP/AR clerks, payroll specialists, billing coordinators',
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    slug: 'human-resources',
    examples: 'HR assistants, recruiters, onboarding specialists, HR generalists',
  },
  {
    id: 'customer-service-sales',
    name: 'Customer Service and Sales',
    slug: 'customer-service-sales',
    examples: 'Customer service representatives, call center staff, dispatchers, sales representatives, account managers',
  },
  {
    id: 'industrial-manufacturing',
    name: 'Industrial and Manufacturing',
    slug: 'industrial-manufacturing',
    examples: 'Machine operators, production associates, quality inspectors, maintenance technicians',
  },
  {
    id: 'warehouse-logistics',
    name: 'Warehouse and Logistics',
    slug: 'warehouse-logistics',
    examples: 'Warehouse associates, forklift operators, inventory clerks, shipping/receiving staff',
  },
  {
    id: 'construction-office-support',
    name: 'Construction Office Support',
    slug: 'construction-office-support',
    examples: 'Estimators, permit coordinators, project administrators, project managers',
  },
  {
    id: 'remote-virtual',
    name: 'Remote and Virtual',
    slug: 'remote-virtual',
    examples: 'Virtual assistants, remote administrative assistants, customer support, remote bookkeeping',
  },
] as const;

// === Storm Specialties ===
export const stormSpecialties = [
  'Water Extraction',
  'Structural Drying',
  'Demolition',
  'Debris Removal',
  'Roofing',
  'Carpentry',
  'Drywall',
  'Painting',
  'Contents Packout and Inventory',
  'Fire/Soot Cleaning',
  'Equipment Operators',
  'Drivers',
  'Logistics',
  'Field Supervisors',
  'Project Managers',
  'Claims Coordinators',
  'Dispatchers',
] as const;

// === Form Configuration ===
export const forms = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedFileTypes: ['.pdf', '.doc', '.docx'],
  rateLimit: {
    maxSubmissions: 5,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
} as const;

// === Feature Flags ===
export const features = {
  enableAuthentication: false, // Phase 2
  enableJobBoard: true,
  enableStormCenter: true,
  enableDashboard: false, // Phase 2
  enableAIMatching: false, // Phase 3
  enableSMSNotifications: false, // Future
} as const;

// === SEO Configuration ===
export const seo = {
  defaultTitle: 'Skilled Trades Workforce | Staffing & Recruiting in Greater Houston',
  titleTemplate: '%s | Skilled Trades Workforce',
  defaultDescription: 'Professional staffing and recruiting solutions for construction, industrial, office, and disaster response positions in Greater Houston and nationwide storm deployment.',
  keywords: [
    'Houston staffing agency',
    'temporary staffing Houston',
    'construction staffing Houston',
    'warehouse staffing Houston',
    'administrative staffing Houston',
    'storm restoration jobs',
    'disaster response jobs',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Skilled Trades Workforce',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skilled Trades Workforce',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@skilledtrades',
  },
} as const;

// Helper to check if integration is configured
export function isIntegrationConfigured(integration: 'hubspot' | 'postmark' | 'n8n'): boolean {
  switch (integration) {
    case 'hubspot':
      return !!(integrations.hubspot.accessToken && !integrations.hubspot.accessToken.includes('NOT_SET'));
    case 'postmark':
      return !!(integrations.postmark.serverToken && !integrations.postmark.serverToken.includes('NOT_SET'));
    case 'n8n':
      return !!(integrations.n8n.webhookUrl && !integrations.n8n.webhookUrl.includes('NOT_SET'));
    default:
      return false;
  }
}

// Helper to check if we're in production
export const isProduction = app.environment === 'production';
export const isDevelopment = app.environment === 'development';

export default {
  app,
  database,
  integrations,
  security,
  company,
  brand,
  serviceAreas,
  services,
  jobCategories,
  stormSpecialties,
  forms,
  features,
  seo,
  isIntegrationConfigured,
  isProduction,
  isDevelopment,
};
