import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ValuePropositions } from '@/components/sections/ValuePropositions';
import { IndustryCards } from '@/components/sections/IndustryCards';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { StormCenterFeature } from '@/components/sections/StormCenterFeature';
import { CTABand } from '@/components/sections/CTABand';
import { FAQSection } from '@/components/sections/FAQSection';

const homepageFAQs = [
  {
    question: 'How quickly can you fill a staffing request?',
    answer: 'Turnaround time depends on the position requirements and current candidate availability. For many positions, we can present qualified candidates within 24-48 hours. For specialized roles or larger teams, we work with you to establish a realistic timeline.',
  },
  {
    question: 'Do you handle payroll and workers\' compensation?',
    answer: 'Yes, for temporary and temp-to-hire placements, we handle all payroll administration, tax withholding, and workers\' compensation insurance. For direct-hire placements, the employee joins your company payroll directly.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including construction, skilled trades, restoration, manufacturing, warehousing, logistics, office administration, accounting, human resources, customer service, and more. If you don\'t see your industry listed, contact us to discuss your needs.',
  },
  {
    question: 'Is there a cost to register as a job seeker?',
    answer: 'No, registration is completely free for job seekers. We are paid by the employers who hire our candidates. You will never be charged a fee to register, apply for jobs, or be placed in a position.',
  },
  {
    question: 'How does the Storm Response Center work?',
    answer: 'The Storm Response Workforce Center connects individual workers and complete crews with disaster response opportunities nationwide. Workers and crews register their skills, availability, and deployment preferences. When storm response needs arise, we match qualified workers with opportunities and coordinate deployment logistics.',
  },
  {
    question: 'What is the difference between temporary, temp-to-hire, and direct hire?',
    answer: 'Temporary staffing is for short-term needs where workers remain our employees. Temp-to-hire allows you to evaluate a worker on the job before making a permanent hiring decision. Direct hire is traditional recruiting where we find candidates for your permanent positions and they join your payroll immediately upon hire.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ValuePropositions />
      <IndustryCards />
      <HowItWorks />
      <StormCenterFeature />
      <FAQSection faqs={homepageFAQs} />
      <CTABand
        title="Ready to Get Started?"
        description="Whether you're an employer looking for talent or a job seeker exploring opportunities, we're here to help."
        primaryCTA={{
          label: 'Request Employees',
          href: '/employers/request-workers',
        }}
        secondaryCTA={{
          label: 'Find Jobs & Apply',
          href: '/jobs',
        }}
        variant="gradient"
      />
    </>
  );
}
