import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Briefcase, Users, TrendingUp, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Recruiting Services | Specialized Talent Acquisition',
  description: 'Find professionals for skilled office, technical, and management positions. Expert recruiting for accounting, HR, IT, engineering, and more.',
  keywords: ['professional recruiting', 'white collar staffing', 'office professionals', 'technical recruiting', 'management recruiting'],
};

const benefits = [
  'Specialized recruiters for professional disciplines',
  'Access to passive candidate networks',
  'Thorough skills and cultural fit assessment',
  'Confidential searches when needed',
  'Fast placement for critical positions',
  'Competitive fee structure',
  'Replacement guarantee included',
  'Temp, temp-to-hire, and direct hire options',
];

const professions = [
  {
    title: 'Accounting & Finance',
    roles: ['Accountants', 'Controllers', 'Financial Analysts', 'Bookkeepers', 'Payroll Specialists'],
    icon: TrendingUp,
  },
  {
    title: 'Human Resources',
    roles: ['HR Managers', 'Recruiters', 'Benefits Administrators', 'Training Coordinators', 'Compliance Officers'],
    icon: Users,
  },
  {
    title: 'Office & Administrative',
    roles: ['Office Managers', 'Executive Assistants', 'Customer Service', 'Data Entry', 'Receptionists'],
    icon: Briefcase,
  },
];

export default function ProfessionalRecruitingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Recruiting Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find top professionals for accounting, HR, office administration, IT, engineering, and other skilled positions. Expert recruiters who understand your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Professionals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Browse Professional Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Professional Recruiting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Specialized Recruiting for Professional Roles
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Professional recruiting focuses on finding candidates for skilled office, technical, and management positions that require specialized education, certifications, or expertise. Unlike general staffing, professional recruiting involves deeper candidate assessment including technical skills validation, cultural fit evaluation, and often confidential searches.
              </p>
              <p>
                Our professional recruiters specialize in specific disciplines—accounting and finance, human resources, IT and technology, engineering, and office administration. This specialization allows us to better understand your requirements, speak your industry's language, and identify candidates with the right combination of technical skills and soft skills.
              </p>
              <p>
                We offer flexible engagement models: temporary for short-term project support, temp-to-hire to evaluate before committing, or direct hire for permanent placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Disciplines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Professional Disciplines We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {professions.map((profession, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <profession.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg mb-3">{profession.title}</CardTitle>
                    <CardDescription>
                      <ul className="space-y-1 text-sm">
                        {profession.roles.map((role, i) => (
                          <li key={i}>• {role}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Disciplines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Information Technology & Systems',
                  'Engineering & Technical',
                  'Sales & Marketing',
                  'Customer Service & Support',
                  'Legal & Compliance',
                  'Healthcare Administration',
                ].map((discipline, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{discipline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Professional Recruiting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Professional Recruiting Approach
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'In-Depth Discovery',
                  description: 'We take time to understand your company culture, team dynamics, technical requirements, and long-term goals.',
                },
                {
                  step: 2,
                  title: 'Targeted Sourcing',
                  description: 'We leverage industry networks, professional associations, and passive candidate databases to find the right talent.',
                },
                {
                  step: 3,
                  title: 'Rigorous Screening',
                  description: 'Candidates undergo skills assessments, behavioral interviews, reference checks, and background verification.',
                },
                {
                  step: 4,
                  title: 'Cultural Fit Assessment',
                  description: 'We evaluate alignment with your values, work style, and team dynamics—not just technical skills.',
                },
                {
                  step: 5,
                  title: 'Curated Presentations',
                  description: 'You receive detailed candidate profiles with our assessment notes and recommendations.',
                },
                {
                  step: 6,
                  title: 'Placement Support',
                  description: 'We coordinate interviews, facilitate negotiations, and support successful onboarding.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Flexible Engagement Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Temporary</h3>
                <p className="text-gray-700 text-sm">
                  Short-term project support, seasonal workload, or filling absences. Professionals remain on our payroll.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Temp-to-Hire</h3>
                <p className="text-gray-700 text-sm">
                  Evaluate professionals on the job before making a permanent hire. Reduces risk and ensures fit.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Hire</h3>
                <p className="text-gray-700 text-sm">
                  Permanent placement for key positions. Candidates join your payroll from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Hire Top Professionals?"
        description="Connect with experienced recruiters who understand your industry and can find the right talent for your team."
        primaryCTA={{
          label: 'Request Professionals',
          href: '/employers/request-workers',
        }}
        secondaryCTA={{
          label: 'Contact Us',
          href: '/contact',
        }}
        variant="gradient"
      />
    </>
  );
}
