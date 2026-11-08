import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { company } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Temporary Staffing Services | Flexible Workforce Solutions',
  description: 'Find qualified temporary workers for short-term projects, seasonal needs, and workload fluctuations. Fast placement, vetted candidates, and flexible terms.',
  keywords: ['temporary staffing', 'temp workers', 'short-term employees', 'seasonal staffing', 'flexible workforce'],
};

const benefits = [
  'Quick placement for urgent staffing needs',
  'Pre-screened, qualified candidates',
  'Flexible staffing levels based on demand',
  'Reduced hiring and onboarding costs',
  'No long-term employment commitments',
  'Payroll and workers\' comp handled for you',
  'Replace workers at no additional charge',
  'Scale up or down as needed',
];

const idealFor = [
  {
    title: 'Seasonal Workload',
    description: 'Handle peak seasons without permanent headcount increases',
    icon: TrendingUp,
  },
  {
    title: 'Project-Based Work',
    description: 'Staff short-term projects with specialized skills',
    icon: Clock,
  },
  {
    title: 'Employee Absences',
    description: 'Fill in for vacations, medical leave, or unexpected absences',
    icon: Users,
  },
];

const industries = [
  'Construction & Skilled Trades',
  'Restoration & Disaster Recovery',
  'Manufacturing & Production',
  'Warehousing & Distribution',
  'Logistics & Transportation',
  'Office & Administrative',
];

export default function TemporaryStaffingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Temporary Staffing Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Fill short-term positions quickly with pre-screened, qualified workers ready to start immediately. Flexible terms, no long-term commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Temp Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Browse Temp Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Temporary Staffing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Temporary Staffing?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Temporary staffing provides qualified workers for short-term assignments ranging from a single day to several months. Temp workers remain employees of {company.name}, allowing you to adjust your workforce quickly without the administrative burden of hiring and managing payroll.
              </p>
              <p>
                Our temporary staffing services are ideal for businesses that need to scale their workforce up or down based on seasonal demand, project needs, or unexpected absences. We handle all aspects of employment including recruiting, screening, payroll, benefits, workers' compensation, and unemployment insurance.
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
              Benefits of Temporary Staffing
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
              Temporary Staffing is Ideal For
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

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How Temporary Staffing Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Submit Your Request',
                  description: 'Tell us about your staffing needs, including position requirements, timeline, and number of workers needed.',
                },
                {
                  step: 2,
                  title: 'We Find Qualified Candidates',
                  description: 'Our recruiters tap into our network of pre-screened candidates to find workers who match your specific requirements.',
                },
                {
                  step: 3,
                  title: 'Interview and Approve',
                  description: 'Review candidate profiles and conduct interviews. You have final approval before placement.',
                },
                {
                  step: 4,
                  title: 'Workers Start',
                  description: 'Approved workers start on your preferred date. We handle all payroll, workers\' comp, and administrative tasks.',
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

      {/* CTA Band */}
      <CTABand
        title="Ready to Get Started with Temporary Staffing?"
        description="Request qualified temporary workers today and get started filling your staffing needs within 24-48 hours."
        primaryCTA={{
          label: 'Request Temp Workers',
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
