# Skilled Trades Workforce

Production-ready staffing and recruiting website serving Greater Houston with integrated National Storm Response Workforce Center.

**Brand**: Skilled Trades Workforce
**Parent Ecosystem**: Skilled Trades to Success
**Positioning**: *Connecting Talent. Building Businesses. Creating Opportunities.*

## Overview

Full-service staffing platform connecting employers with talent across:
- **Local Staffing (Houston Metro)**: Temporary, temp-to-hire, direct-hire, contract, professional, and remote staffing
- **National Storm Response**: Individual worker and complete crew deployment for disaster recovery

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL + Auth + Storage)
- **Integrations**: HubSpot CRM, Postmark Email, n8n Automation
- **Deployment**: Docker + Coolify

## Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm
- Supabase account (or local Supabase via Docker)

### Installation

```bash
# Clone and install dependencies
git clone <repository-url>
cd skilled-trades-workforce
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual credentials
```

### Environment Variables

See `.env.example` for all required variables. Minimum required:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Database Setup

```bash
# Initialize Supabase locally (optional)
npx supabase init
npx supabase start

# Run migrations
npx supabase db push

# Seed development data
npm run db:seed
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Docker Deployment

```bash
# Build image
docker build -t skilled-trades-workforce .

# Run container
docker run -p 3000:3000 --env-file .env.local skilled-trades-workforce
```

## Project Structure

```
skilled-trades-workforce/
├── app/                    # Next.js App Router pages and API
│   ├── (public)/          # Public-facing pages
│   ├── (legal)/           # Legal pages
│   ├── (dashboard)/       # Protected recruiter dashboard (Phase 2)
│   ├── actions/           # Server Actions
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── jobs/             # Job-related components
├── lib/                  # Core utilities and services
│   ├── supabase/         # Supabase clients
│   ├── integrations/     # External API adapters
│   ├── repositories/     # Data access layer
│   ├── services/         # Business logic
│   ├── validations/      # Zod schemas
│   ├── config.ts         # Centralized configuration
│   ├── constants.ts      # Business constants
│   ├── utils.ts          # Helper functions
│   └── analytics.ts      # Privacy-safe tracking
├── supabase/
│   └── migrations/       # Database migrations
├── tests/                # Automated tests
└── public/               # Static assets
```

## Core Features

### Phase 1 (Current - Launch Ready)
- ✅ Responsive homepage with conversion sections
- ✅ Service and industry pages
- ✅ Employer worker request form
- ✅ Candidate registration form
- ✅ Storm worker registration form
- ✅ Crew leader registration form
- ✅ Job board with filters
- ✅ Supabase database with RLS
- ✅ Integration outbox pattern
- ✅ Email confirmations (Postmark)
- ✅ CRM sync (HubSpot)
- ✅ Workflow automation (n8n)

### Phase 2 (30-60 days)
- ⏳ Recruiter authentication
- ⏳ Dashboard and lead management
- ⏳ Job posting workflow
- ⏳ Application tracking
- ⏳ Candidate/employer portals

### Phase 3 (60-90 days)
- ⏳ AI-assisted matching
- ⏳ Advanced deployment workflows
- ⏳ Timesheet/billing integration
- ⏳ Enhanced analytics

## Key Conversion Paths

1. **Employer Request**: `/employers/request-workers`
2. **Job Application**: `/jobs` → `/jobs/[slug]` → `/apply`
3. **Candidate Registration**: `/apply`
4. **Storm Worker**: `/storm-center/register`
5. **Crew Registration**: `/storm-center/register-crew`
6. **Storm Employer**: `/storm-center/request-crews`

## Development Guidelines

### Code Style
- TypeScript strict mode
- Functional components with hooks
- Server Components by default
- Client Components only when needed
- Zod for all form validation

### Security
- All user inputs validated server-side
- RLS enforced on all tables
- No service role key in client code
- Private document storage with signed URLs
- Audit logging for sensitive operations

### Testing
```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## Database

Schema managed via Supabase migrations in `supabase/migrations/`.

Key tables:
- `employer_leads` - Employer request submissions
- `candidates` - Job seeker profiles
- `storm_profiles` - Storm worker details
- `crews` - Crew registrations
- `jobs` - Published job openings
- `applications` - Job applications
- `integration_outbox` - Async integration queue

### Generating Types

```bash
npx supabase gen types typescript --local > lib/supabase/types.ts
```

## Integrations

### HubSpot
- Employer leads → Companies & Deals
- Deduplication by email
- Source tracking

### Postmark
- Confirmation emails
- Status updates
- Template-based

### n8n
- Lead routing
- Recruiter notifications
- Follow-up workflows
- Integration retry logic

## Deployment

### Coolify Setup
1. Connect GitHub repository
2. Configure environment variables
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Configure domain
6. Enable auto-deploy from `main` branch

### Health Check
```
GET /api/health
```

### Monitoring
- Error tracking: Sentry (optional)
- Analytics: Privacy-focused provider
- Uptime monitoring: Configured in Coolify

## Documentation

- **Architecture**: See `ARCHITECTURE.md`
- **API Documentation**: See `/docs/api.md` (to be created)
- **Launch Checklist**: See `LAUNCH_CHECKLIST.md` (to be created)

## Support

For issues or questions:
- GitHub Issues: [repository-url]/issues
- Internal: Contact development team

## License

Private - All rights reserved.

---

**Status**: Phase 1 - In Development
**Last Updated**: November 5, 2026
