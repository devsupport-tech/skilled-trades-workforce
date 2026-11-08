import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Globe, Clock, DollarSign, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Remote Staffing Services | Work-From-Anywhere Talent',
  description: 'Hire remote workers and build distributed teams. Access talent nationwide without geographic limitations. Remote, hybrid, and work-from-home positions.',
  keywords: ['remote staffing', 'remote workers', 'work from home', 'distributed teams', 'virtual employees', 'remote hiring'],
};

const benefits = [
  'Access talent nationwide, not just locally',
  'Lower overhead with remote workforce',
  'Increased productivity and employee satisfaction',
  'Diverse candidate pool with varied expertise',
  'Flexible work arrangements attract top talent',
  'Reduce office space and equipment costs',
  'Business continuity with distributed teams',
  'Support for remote, hybrid, or work-from-home models',
];

const idealFor = [
  {
    title: 'Geographic Flexibility',
    description: 'Hire the best talent regardless of location',
    icon: Globe,
  },
  {
    title: 'Cost Savings',
    description: 'Reduce overhead while maintaining quality',
    icon: DollarSign,
  },
  {
    title: 'Extended Hours',
    description: 'Coverage across time zones for customer support',
    icon: Clock,
  },
];

const remoteRoles = [
  {
    category: 'Customer Service & Support',
    positions: ['Customer Service Representatives', 'Technical Support Specialists', 'Help Desk Technicians'],
  },
  {
    category: 'Administrative & Clerical',
    positions: ['Virtual Assistants', 'Data Entry Specialists', 'Scheduling Coordinators'],
  },
  {
    category: 'Accounting & Finance',
    positions: ['Bookkeepers', 'Accountants', 'Accounts Payable/Receivable'],
  },
  {
    category: 'IT & Technology',
    positions: ['Software Developers', 'IT Support', 'System Administrators'],
  },
  {
    category: 'Sales & Marketing',
    positions: ['Inside Sales Reps', 'Marketing Coordinators', 'Content Writers'],
  },
  {
    category: 'Human Resources',
    positions: ['HR Coordinators', 'Recruiters', 'Benefits Administrators'],
  },
];

export default function RemoteStaffingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Remote Staffing Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Build your distributed team with top remote talent. Access qualified professionals nationwide without geographic limitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Remote Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Remote Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Remote Staffing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Future of Work is Remote
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Remote staffing connects employers with talented professionals who work from home or other remote locations. This flexible arrangement has become increasingly popular, offering benefits for both employers and workers—reduced overhead costs, access to a nationwide talent pool, improved work-life balance, and increased productivity.
              </p>
              <p>
                Our remote staffing services help you build and manage distributed teams effectively. We recruit workers who thrive in remote environments, have the necessary technology and workspace, and possess strong communication and self-management skills.
              </p>
              <p>
                Whether you need full-time remote employees, part-time support, or project-based contractors, we can help you build a successful remote workforce. We support fully remote, hybrid, and work-from-home arrangements across a wide range of professional disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Remote Staffing
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

      {/* Ideal For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Remote Staffing is Ideal For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {idealFor.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remote Roles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Common Remote Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remoteRoles.map((role, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg mb-3">{role.category}</CardTitle>
                    <CardDescription>
                      <ul className="space-y-1 text-sm">
                        {role.positions.map((position, i) => (
                          <li key={i}>• {position}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remote Worker Vetting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How We Vet Remote Workers
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Remote Work Experience',
                  description: 'We prioritize candidates with proven track records of successful remote work and self-management.',
                },
                {
                  title: 'Technology Setup',
                  description: 'Candidates must have reliable internet, appropriate workspace, and necessary equipment.',
                },
                {
                  title: 'Communication Skills',
                  description: 'Strong written and verbal communication is essential for distributed teams.',
                },
                {
                  title: 'Time Management',
                  description: 'We assess ability to work independently, meet deadlines, and manage time effectively.',
                },
                {
                  title: 'Technical Proficiency',
                  description: 'Candidates are comfortable with collaboration tools like video conferencing, project management software, and cloud platforms.',
                },
                {
                  title: 'Cultural Fit',
                  description: 'We evaluate alignment with your company values and team dynamics, even in a remote setting.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remote Management Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              We Support Your Remote Team
            </h2>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <p className="text-gray-700 mb-4">
                Building a successful remote workforce requires more than just hiring good people. We provide ongoing support to help you manage distributed teams effectively, including:
              </p>
              <ul className="space-y-2">
                {[
                  'Best practices for remote team management',
                  'Technology recommendations for collaboration',
                  'Performance monitoring and accountability frameworks',
                  'Communication protocols and expectations',
                  'Time zone coordination for distributed teams',
                  'Remote onboarding and training support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Build Your Remote Team?"
        description="Access top talent nationwide and unlock the benefits of a distributed workforce. Let us help you find remote workers who will thrive in your organization."
        primaryCTA={{
          label: 'Request Remote Workers',
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
