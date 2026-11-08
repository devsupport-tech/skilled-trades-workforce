# Skilled Trades Workforce - Architecture Summary

## Project Overview

Production-ready staffing and recruiting website serving Greater Houston with integrated **National Storm Response Workforce Center**. Built to convert employers, job seekers, storm workers, and crews through secure data capture and CRM integration.

**Brand**: Skilled Trades Workforce
**Parent Ecosystem**: Skilled Trades to Success
**Positioning**: *Connecting Talent. Building Businesses. Creating Opportunities.*

## Core Business Models

1. **Local Staffing (Houston Metro)**
   - Temporary staffing
   - Temp-to-hire
   - Direct-hire recruiting
   - Contract staffing
   - Professional recruiting
   - Remote staffing

2. **National Storm Response**
   - Individual worker deployment
   - Complete crew deployment
   - Disaster response employer solutions

## Technical Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: Custom design system with shadcn/ui patterns
- **Form Validation**: Zod schemas
- **Icons**: Lucide React

### Backend & Database
- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth (future phase)
- **Storage**: Supabase Storage (private documents, resumes)
- **Row-Level Security**: Enforced for all sensitive data
- **Migrations**: SQL migrations with version control

### Integrations
- **CRM**: HubSpot (employer leads, companies, deals)
- **Email**: Postmark (transactional confirmations)
- **Automation**: n8n (workflows, notifications, routing)
- **Analytics**: Privacy-safe conversion tracking

### Infrastructure
- **Deployment**: Coolify on existing infrastructure
- **CDN/Security**: Cloudflare
- **Monitoring**: Error tracking and health checks
- **Docker**: Production-ready containers

## Architecture Patterns

### 1. **Durable Integration Outbox**
```
User Submit → Supabase Insert → Integration Outbox → Background Worker → External API
```
- Submissions succeed even if HubSpot/n8n are down
- Async retry with exponential backoff
- Idempotency keys prevent duplicates
- Dead-letter queue for failed retries

### 2. **Security-First Data Access**
```
Public Forms → Server Actions (validated) → Supabase RLS → Private Storage
```
- No direct client writes to sensitive tables
- Service role keys never exposed to browser
- Resume/credential uploads go to private buckets with signed URLs
- Audit logging for sensitive record access

### 3. **Repository Pattern**
```
UI → Server Actions → Domain Services → Repository Layer → Supabase
```
- Clean separation of concerns
- Testable business logic
- Swappable data sources
- Type-safe contracts

### 4. **Form Processing Flow**
```
Client Validation → Server Action → Zod Validation → DB Insert →
Outbox Event → Confirmation Email → CRM Sync → Internal Notification
```

## Data Model (Simplified)

### Core Entities
- **profiles**: Authenticated users and their roles
- **organizations**: Employer companies and crew businesses
- **employer_leads**: Contact submissions from request forms
- **job_orders**: Internal staffing requests from employers
- **jobs**: Published job openings (public)
- **candidates**: Job seeker and storm worker profiles
- **applications**: Job applications and matches
- **storm_profiles**: Extended deployment preferences
- **crews**: Crew leader registrations and metadata
- **crew_memberships**: Individual crew member consent tracking

### Integration & Operational
- **integration_outbox**: Durable event queue for external APIs
- **communications**: Email/SMS metadata and consent tracking
- **consent_records**: GDPR/compliance consent management
- **activity_events**: Audit trail for recruiting actions
- **admin_tasks**: Follow-up and verification tasks

## Information Architecture

### Public Routes
```
/ (homepage)
/about
/contact
/staffing-services/* (6 service pages)
/industries/* (11 industry pages)
/employers/request-workers (primary conversion)
/employers/how-it-works
/employers/faq
/job-seekers
/jobs (board with filters)
/jobs/[slug] (detail pages)
/apply (general registration)
/job-seekers/faq
/storm-center
/storm-center/register (individual worker)
/storm-center/register-crew (crew leader)
/storm-center/request-crews (employer)
/storm-center/jobs
/storm-center/deployment-readiness
/storm-center/employer-solutions
/storm-center/faq
/locations/* (13 Houston metro location pages)
/resources (future content hub)
/privacy, /terms, /accessibility
```

### Protected Routes (Phase 2)
```
/dashboard (recruiter)
/dashboard/leads
/dashboard/candidates
/dashboard/jobs
/dashboard/applications
/dashboard/storm
/dashboard/crews
```

## Key Conversion Flows

### 1. Employer Worker Request
**Entry**: Multiple CTAs across service/industry pages
**Form**: Company details, position needs, budget, timeline
**Processing**: Save to DB → Email confirmation → HubSpot deal → Task creation
**Follow-up**: Sales notification, automated reminders

### 2. Job Seeker Registration
**Entry**: Apply to job or join talent network
**Form**: Contact, skills, preferences, resume upload (optional)
**Processing**: Save candidate → Email confirmation → Recruiter review queue
**Follow-up**: Skills classification, matching suggestions

### 3. Storm Worker Registration
**Entry**: Storm Center homepage or national marketing
**Form**: All candidate fields + deployment preferences, travel, mobilization time
**Processing**: Save with availability timestamp → Specialty tagging → Verification task
**Follow-up**: Availability reconfirmation workflow

### 4. Crew Registration
**Entry**: Storm Center crew leader path
**Form**: Leader info, crew details, equipment, insurance
**Processing**: Save crew metadata → Verification task → Member invitation workflow
**Privacy**: NO personal member data until individual consent

### 5. Storm Employer Request
**Entry**: Storm Center employer solutions
**Form**: Deployment location, specialties, crew/individual preference, logistics
**Processing**: Urgent alert → Human review → Shortlist creation → Worker contact

## Security & Compliance

### Data Protection
- Server-side validation on all inputs
- Rate limiting and anti-spam (Cloudflare Turnstile)
- File scanning/quarantine for uploads
- CSP headers and HTTPS enforcement
- Secret management via environment variables
- Encrypted data at rest (Supabase)

### Access Control
- **Public**: Submit intake forms only (server-validated)
- **Candidates**: View/update own profile (Phase 2)
- **Employers**: View own organization data (Phase 2)
- **Recruiters**: Full CRM access with audit logging
- **Admins**: System configuration and user management

### Consent Management
- Explicit opt-in for marketing communications
- Separate consent for SMS
- Version tracking and timestamps
- Opt-out handling
- GDPR-ready data retention policies

## AI Integration Guardrails

AI may be used for:
- ✅ Extracting job-related skills from resumes
- ✅ Summarizing candidate profiles for recruiters
- ✅ Suggesting job-candidate matches with explainability
- ✅ Drafting recruitment communications

AI must NOT:
- ❌ Automatically reject candidates
- ❌ Make final hiring decisions
- ❌ Infer protected characteristics (race, age, religion, etc.)
- ❌ Score candidates on non-job-related personal information

Human review required for all placement decisions. Evaluate for bias and accessibility.

## SEO Strategy

### Primary Keywords (Houston Local)
- Houston staffing agency
- Temporary staffing Houston
- Construction staffing Houston
- Warehouse staffing Houston
- Administrative staffing Houston
- Office management recruiting Houston
- Restoration staffing Houston

### National Keywords (Storm)
- Storm restoration jobs
- Disaster response jobs
- Traveling restoration workers
- Storm cleanup crews
- Disaster recovery labor staffing

### Technical SEO
- Unique title/meta for every page
- Organization and EmploymentAgency structured data
- JobPosting schema for real jobs only
- XML sitemap with appropriate priorities
- Canonical tags
- Internal linking structure
- Location pages only where service exists

## Development Phases

### **Phase 1: Launch-Ready Public Website** (Current)
Priority: Working lead capture and data foundation

- [ ] Brand foundation and responsive layout
- [ ] Homepage with all conversion sections
- [ ] Service and industry pages
- [ ] Employer request form with validation
- [ ] General candidate registration form
- [ ] Storm worker registration form
- [ ] Crew leader registration form
- [ ] Storm employer request form
- [ ] Job board with honest empty state
- [ ] Supabase schema, migrations, RLS
- [ ] Integration outbox and retry logic
- [ ] Postmark confirmation emails
- [ ] HubSpot employer lead sync
- [ ] n8n notification workflows
- [ ] SEO metadata and sitemap
- [ ] Analytics and conversion tracking
- [ ] Coolify deployment configuration

### **Phase 2: Recruiting Operations** (30-60 days)
Priority: Internal workflow and job management

- [ ] Recruiter authentication and dashboard
- [ ] Lead management and notes
- [ ] Candidate search and filters
- [ ] Job order CRUD
- [ ] Public job publishing workflow
- [ ] Application management
- [ ] Storm worker verification
- [ ] Crew member consent tracking
- [ ] Task assignment and follow-up

### **Phase 3: Automation and Scale** (60-90 days)
Priority: Advanced matching and portals

- [ ] Human-reviewed AI matching suggestions
- [ ] Employer portal (job posting, candidate review)
- [ ] Candidate portal (profile updates, application status)
- [ ] Advanced deployment workflows
- [ ] Timesheet and billing integration
- [ ] Availability reconfirmation automation
- [ ] Enhanced analytics and reporting
- [ ] A/B testing framework

## File Structure

```
skilled-trades-workforce/
├── app/                          # Next.js App Router
│   ├── (public)/                # Public routes group
│   │   ├── page.tsx             # Homepage
│   │   ├── about/
│   │   ├── contact/
│   │   ├── staffing-services/
│   │   ├── industries/
│   │   ├── employers/
│   │   ├── job-seekers/
│   │   ├── jobs/
│   │   ├── storm-center/
│   │   ├── locations/
│   │   └── resources/
│   ├── (legal)/                 # Legal pages group
│   │   ├── privacy/
│   │   ├── terms/
│   │   └── accessibility/
│   ├── (dashboard)/             # Protected routes (Phase 2)
│   │   └── dashboard/
│   ├── api/                     # API routes
│   │   ├── forms/              # Form submission endpoints
│   │   ├── jobs/               # Job data API
│   │   ├── integrations/       # Webhook receivers
│   │   └── health/             # Health check
│   ├── actions/                 # Server Actions
│   │   ├── employer-actions.ts
│   │   ├── candidate-actions.ts
│   │   ├── storm-actions.ts
│   │   └── job-actions.ts
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   └── not-found.tsx           # 404 page
├── components/                  # React components
│   ├── ui/                     # Base UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── forms/                  # Form components
│   │   ├── EmployerRequestForm.tsx
│   │   ├── CandidateRegistrationForm.tsx
│   │   ├── StormWorkerForm.tsx
│   │   ├── CrewRegistrationForm.tsx
│   │   └── FormField.tsx
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Breadcrumbs.tsx
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── IndustryCards.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CTABand.tsx
│   │   └── FAQSection.tsx
│   └── jobs/                   # Job-related components
│       ├── JobCard.tsx
│       ├── JobFilters.tsx
│       ├── JobBoard.tsx
│       └── JobDetail.tsx
├── lib/                        # Core utilities
│   ├── supabase/
│   │   ├── client.ts           # Browser client
│   │   ├── server.ts           # Server client
│   │   ├── admin.ts            # Service role client
│   │   └── types.ts            # Database types
│   ├── integrations/
│   │   ├── hubspot.ts          # HubSpot adapter
│   │   ├── postmark.ts         # Postmark adapter
│   │   ├── n8n.ts              # n8n webhook triggers
│   │   └── outbox.ts           # Integration outbox worker
│   ├── repositories/
│   │   ├── employer-repository.ts
│   │   ├── candidate-repository.ts
│   │   ├── storm-repository.ts
│   │   ├── job-repository.ts
│   │   └── crew-repository.ts
│   ├── services/
│   │   ├── employer-service.ts
│   │   ├── candidate-service.ts
│   │   ├── storm-service.ts
│   │   └── job-service.ts
│   ├── validations/
│   │   ├── employer-schema.ts
│   │   ├── candidate-schema.ts
│   │   ├── storm-schema.ts
│   │   └── job-schema.ts
│   ├── config.ts               # Centralized configuration
│   ├── constants.ts            # Business constants
│   ├── utils.ts                # Helper functions
│   └── analytics.ts            # Privacy-safe tracking
├── supabase/
│   ├── migrations/             # Database migrations
│   │   ├── 001_initial_schema.sql
│   │   ├── 002_add_storm_tables.sql
│   │   ├── 003_add_rls_policies.sql
│   │   └── ...
│   ├── seed.sql                # Development seed data
│   ├── config.toml             # Supabase configuration
│   └── functions/              # Edge functions (if needed)
├── public/                     # Static assets
│   ├── images/
│   │   ├── logo.svg           # Placeholder
│   │   ├── hero/
│   │   └── industries/
│   ├── fonts/                  # If custom fonts needed
│   └── favicon.ico
├── tests/                      # Automated tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example                # Environment variable template
├── .env.local                  # Local development (gitignored)
├── .gitignore
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
├── Dockerfile                  # Production container
├── docker-compose.yml          # Local development stack
├── coolify.json                # Coolify deployment config
├── README.md                   # Setup and deployment docs
├── ARCHITECTURE.md             # This file
└── LAUNCH_CHECKLIST.md         # Pre-launch verification
```

## Environment Variables Required

### Database
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)
- `DATABASE_URL` (for migrations)

### Integrations
- `HUBSPOT_ACCESS_TOKEN`
- `HUBSPOT_PORTAL_ID`
- `POSTMARK_SERVER_TOKEN`
- `POSTMARK_FROM_EMAIL`
- `N8N_WEBHOOK_URL`
- `N8N_API_KEY`

### Application
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_COMPANY_NAME="Skilled Trades Workforce"`
- `NEXT_PUBLIC_COMPANY_EMAIL` (to be provided)
- `NEXT_PUBLIC_COMPANY_PHONE` (to be provided)
- `NEXT_PUBLIC_COMPANY_ADDRESS` (to be provided)

### Analytics & Monitoring
- `NEXT_PUBLIC_ANALYTICS_ID` (privacy-safe provider)
- `SENTRY_DSN` (error monitoring, optional)

### Security
- `TURNSTILE_SITE_KEY` (Cloudflare anti-spam)
- `TURNSTILE_SECRET_KEY`
- `SESSION_SECRET` (future auth)

## Deployment Process

### Development
```bash
npm install
npm run dev
# Runs on http://localhost:3000
```

### Database Setup
```bash
npx supabase init
npx supabase start
npx supabase db push
npm run db:seed
```

### Production Build
```bash
npm run build
npm start
# or
docker build -t skilled-trades-workforce .
docker run -p 3000:3000 skilled-trades-workforce
```

### Coolify Deployment
1. Connect GitHub repository
2. Set environment variables in Coolify UI
3. Deploy from `main` branch
4. Configure custom domain
5. Enable automatic deployments

## Success Metrics

### Phase 1 (Launch)
- ✅ Employer can submit worker request
- ✅ Candidate can register successfully
- ✅ Storm worker can register with deployment preferences
- ✅ Crew leader can register without exposing member data
- ✅ All submissions stored securely in Supabase
- ✅ Confirmation emails sent via Postmark
- ✅ Employer leads sync to HubSpot
- ✅ Internal notifications trigger via n8n
- ✅ No unauthorized data access possible
- ✅ Mobile-responsive and accessible
- ✅ SEO metadata complete and accurate

### Phase 2 (Operations)
- Staff can review and update lead status
- Recruiters can publish real jobs
- Job applications tracked end-to-end
- Crew verification workflow functional
- Dashboard shows actionable metrics

### Phase 3 (Scale)
- AI matching suggestions with human review
- Employer and candidate portals live
- Integration with payroll/billing systems
- Conversion rate optimization framework

## Known Limitations & Future Work

### Current Scope (Phase 1)
- No authentication/login (forms only)
- No candidate/employer portals
- Basic job board (no advanced matching)
- Manual crew verification
- No timesheet/billing integration
- Limited analytics dashboard

### Future Enhancements
- Two-way SMS communication
- Video interview scheduling
- Credential verification automation
- Geolocation for deployment tracking
- Predictive availability scoring
- Multi-language support
- Mobile apps for workers/recruiters

## Business Inputs Needed Before Launch

**Blocked on these for production:**
- [ ] Final domain name and DNS access
- [ ] Logo files (SVG preferred)
- [ ] Brand color palette (hex codes)
- [ ] Licensed photography or image guidelines
- [ ] Public phone number
- [ ] Public email address
- [ ] Physical address and service area wording
- [ ] Legal entity name for footer
- [ ] Approved privacy policy
- [ ] Approved terms of service
- [ ] SMS consent language (legal review)
- [ ] HubSpot credentials
- [ ] Supabase production project
- [ ] Postmark account and verified sender domain
- [ ] n8n instance URL
- [ ] Coolify deployment access

**Nice to have at launch:**
- [ ] 2-3 real job listings
- [ ] Employer testimonials (with permission)
- [ ] Staffing contract templates
- [ ] Initial content for Resources section

---

**Document Version**: 1.0
**Last Updated**: November 5, 2026
**Status**: Architecture approved, implementation in progress
