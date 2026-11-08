# Skilled Trades Workforce - Launch Checklist

## Pre-Launch Verification

### Phase 1: Foundation (Current Status)

#### Environment & Configuration
- [ ] All environment variables configured in `.env.local`
- [ ] Supabase project created and credentials added
- [ ] Database migrations run successfully
- [ ] RLS policies tested and verified
- [ ] Service role key secured (server-side only)

#### Business Information
- [ ] Logo files added to `/public/images/`
- [ ] Brand colors updated in `lib/config.ts`
- [ ] Company phone number set
- [ ] Company email set
- [ ] Physical address and service area defined
- [ ] Legal entity name confirmed
- [ ] Business hours set

#### Integrations
- [ ] HubSpot account connected
- [ ] HubSpot portal ID configured
- [ ] HubSpot access token secured
- [ ] Postmark account created
- [ ] Postmark sender domain verified
- [ ] Postmark server token configured
- [ ] n8n instance deployed
- [ ] n8n webhook URLs configured

#### Content
- [ ] Privacy policy drafted and approved
- [ ] Terms of service drafted and approved
- [ ] Accessibility statement created
- [ ] SMS consent language reviewed by legal
- [ ] Email templates created in Postmark
- [ ] At least 3 real job listings ready (optional but recommended)

#### Testing
- [ ] Employer request form submits successfully
- [ ] Confirmation email received
- [ ] HubSpot lead created
- [ ] n8n workflow triggered
- [ ] Candidate registration works
- [ ] Storm worker registration works
- [ ] Crew registration works
- [ ] Job board displays correctly
- [ ] Job application submission works
- [ ] Mobile responsiveness verified
- [ ] Keyboard navigation tested
- [ ] Screen reader compatibility verified

#### Security
- [ ] No hardcoded secrets in code
- [ ] Service role key never exposed to client
- [ ] RLS policies prevent unauthorized access
- [ ] File uploads restricted and scanned
- [ ] Rate limiting configured
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CORS settings verified

#### Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] Image optimization enabled
- [ ] Database queries optimized
- [ ] Caching configured appropriately

#### SEO
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Open Graph tags configured
- [ ] XML sitemap generated
- [ ] robots.txt configured
- [ ] Canonical tags set
- [ ] Structured data added for jobs
- [ ] Google Search Console connected
- [ ] Google Analytics configured (privacy-safe)

#### Deployment
- [ ] Coolify project created
- [ ] GitHub repository connected
- [ ] Environment variables set in Coolify
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Health check endpoint responding
- [ ] Successful production build
- [ ] Production deployment tested
- [ ] Rollback procedure documented

### Phase 2: Operations (30-60 Days)

#### Authentication
- [ ] Recruiter accounts created
- [ ] Email verification working
- [ ] Password reset flow tested
- [ ] Role-based access verified

#### Dashboard
- [ ] Lead management functional
- [ ] Candidate search working
- [ ] Job posting workflow tested
- [ ] Application tracking functional
- [ ] Task assignment working
- [ ] Notes system functional

#### Portals
- [ ] Candidate portal accessible
- [ ] Employer portal accessible
- [ ] Profile updates working
- [ ] Application status visible
- [ ] Document uploads functional

### Phase 3: Scale (60-90 Days)

#### Advanced Features
- [ ] AI matching tested
- [ ] Matching explanations clear
- [ ] Human review workflow established
- [ ] Bias evaluation completed

#### Integrations
- [ ] Timesheet system connected
- [ ] Billing system integrated
- [ ] Payroll integration tested
- [ ] Two-way sync verified

#### Analytics
- [ ] Conversion funnel tracked
- [ ] KPIs dashboards live
- [ ] A/B testing framework active
- [ ] User feedback collected

---

## Launch Day Checklist

### Morning of Launch
1. [ ] Final database backup
2. [ ] All integrations verified
3. [ ] Test all forms one more time
4. [ ] Verify email confirmations working
5. [ ] Check HubSpot sync
6. [ ] Verify job board displays correctly
7. [ ] Test mobile experience
8. [ ] Confirm analytics tracking
9. [ ] Review error monitoring setup
10. [ ] Team briefed on launch

### Launch
1. [ ] Enable production mode
2. [ ] Remove "Coming Soon" notices
3. [ ] Publish site to production domain
4. [ ] Verify DNS propagation
5. [ ] Test live site thoroughly
6. [ ] Submit sitemap to Google
7. [ ] Announce launch

### Post-Launch (First 24 Hours)
1. [ ] Monitor error logs
2. [ ] Check form submission rate
3. [ ] Verify all emails sending
4. [ ] Monitor HubSpot sync
5. [ ] Check analytics for anomalies
6. [ ] Respond to any support requests
7. [ ] Document any issues

### First Week
1. [ ] Review conversion rates
2. [ ] Analyze user behavior
3. [ ] Identify pain points
4. [ ] Gather feedback
5. [ ] Plan improvements
6. [ ] Update documentation
7. [ ] Optimize based on data

---

## Critical Issues - STOP Launch If:

- ❌ Forms not submitting data
- ❌ Confirmation emails not sending
- ❌ HubSpot not syncing leads
- ❌ Private data exposed publicly
- ❌ RLS policies not enforced
- ❌ Service role key in client code
- ❌ HTTPS not working
- ❌ Major accessibility issues
- ❌ Mobile site broken
- ❌ Job board not loading

---

## Support Contacts

**Technical Issues:**
- Development Team: [TO BE PROVIDED]
- Supabase Support: [support@supabase.io](mailto:support@supabase.io)
- Coolify Support: [TO BE PROVIDED]

**Business Issues:**
- Legal Review: [TO BE PROVIDED]
- Compliance: [TO BE PROVIDED]
- Marketing: [TO BE PROVIDED]

**Integration Support:**
- HubSpot: [support@hubspot.com](mailto:support@hubspot.com)
- Postmark: [support@postmarkapp.com](mailto:support@postmarkapp.com)
- n8n: [TO BE PROVIDED]

---

**Last Updated:** November 5, 2026
**Version:** 1.0
**Status:** Phase 1 - Foundation Complete
