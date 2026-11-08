import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building, Users, CheckCircle } from 'lucide-react';

const employerBenefits = [
  'Fill positions across field, warehouse, and office operations',
  'Pre-screened, qualified candidates ready to start',
  'Flexible staffing arrangements from temporary to direct hire',
  'Quick turnaround on urgent staffing needs',
  'Dedicated recruiter support throughout the process',
  'Workers\' compensation and payroll administration handled',
];

const candidateBenefits = [
  'Access to diverse job opportunities across multiple industries',
  'Opportunities for temporary, temp-to-hire, and permanent positions',
  'Resume and career development support',
  'Prompt interview scheduling and feedback',
  'Ongoing job matching based on your skills and preferences',
  'Weekly pay and benefits for qualifying positions',
];

export function ValuePropositions() {
  return (
    <>
      {/* Employer Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Staffing Solutions for Growing Businesses
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you need one person for a day or an entire team for a long-term project, we deliver qualified talent when and where you need them.
              </p>
              <ul className="space-y-3 mb-8">
                {employerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link href="/employers/request-workers">Request Workers Now</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
              <blockquote className="text-lg text-gray-700 mb-4">
                "Having a reliable staffing partner has been crucial for our growth. They understand our needs and consistently deliver quality candidates."
              </blockquote>
              <div className="text-sm text-gray-600">
                — Business owner testimonial placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Seeker Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 lg:p-12">
              <blockquote className="text-lg text-gray-700 mb-4">
                "The team helped me find a position that matched my skills and schedule. Within a week of registering, I was interviewing for multiple opportunities."
              </blockquote>
              <div className="text-sm text-gray-600">
                — Candidate testimonial placeholder
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Your Next Opportunity
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're seeking your next career move or exploring new opportunities, we connect you with employers who value your skills and experience.
              </p>
              <ul className="space-y-3 mb-8">
                {candidateBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/jobs">Browse Jobs</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/apply">Join Talent Network</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
