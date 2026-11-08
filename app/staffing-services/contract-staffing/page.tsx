import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Briefcase, DollarSign, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contract Staffing Services | Project-Based Talent',
  description: 'Hire skilled contractors for project-based work. Flexible terms, specialized expertise, and no benefits overhead.',
  keywords: ['contract staffing', '1099 contractors', 'project staffing', 'independent contractors', 'contract workers'],
};

const benefits = [
  'Access specialized expertise for specific projects',
  'Flexible contract lengths from weeks to years',
  'No benefits or overhead costs',
  'Scale team up or down based on project needs',
  'Avoid permanent headcount increases',
  'Faster onboarding than permanent hires',
  'Replace contractors quickly if needed',
  'Pay only for work delivered',
];

const idealFor = [
  {
    title: 'Project-Based Work',
    description: 'Staff specific projects with defined scopes and timelines',
    icon: Briefcase,
  },
  {
    title: 'Budget Flexibility',
    description: 'Control costs with no benefits or permanent commitments',
    icon: DollarSign,
  },
  {
    title: 'Seasonal Projects',
    description: 'Hire for busy seasons without year-round payroll',
    icon: Calendar,
  },
];

export default function ContractStaffingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contract Staffing Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Access specialized talent for project-based work without permanent commitments. Flexible contracts, expert skills, no overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Contract Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Contract Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Contract Staffing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Contract Staffing?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Contract staffing provides skilled professionals for project-based work with defined scopes, deliverables, and timelines. Contract workers are engaged for specific projects or time periods, bringing specialized expertise without the commitment of permanent employment.
              </p>
              <p>
                Unlike temporary staffing where workers fill immediate gaps, contract staffing is typically used for longer-term projects (weeks to months, sometimes years) that require specialized skills. Contractors may work on-site or remotely depending on project requirements.
              </p>
              <p>
                Contract arrangements offer flexibility for both employers and workers—you get the expertise you need when you need it, without benefits overhead or permanent headcount increases.
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
              Benefits of Contract Staffing
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
              Contract Staffing is Ideal For
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

      {/* Common Contract Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Common Contract Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Project Managers',
                'Construction Foremen',
                'Skilled Tradespeople',
                'IT Specialists',
                'Engineers & Technicians',
                'Restoration Specialists',
                'Safety Coordinators',
                'Quality Control Inspectors',
                'Administrative Specialists',
              ].map((position, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">{position}</p>
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
              How Contract Staffing Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Define Your Project',
                  description: 'Share project scope, timeline, required skills, and deliverables.',
                },
                {
                  step: 2,
                  title: 'Contractor Sourcing',
                  description: 'We identify qualified contractors with the specialized expertise you need.',
                },
                {
                  step: 3,
                  title: 'Review & Select',
                  description: 'Review contractor profiles and select the best fit for your project.',
                },
                {
                  step: 4,
                  title: 'Project Kickoff',
                  description: 'Contractor starts on agreed date. We handle contracts and administrative details.',
                },
                {
                  step: 5,
                  title: 'Ongoing Support',
                  description: 'We manage the relationship and can replace or extend contracts as needed.',
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

      {/* Contract vs Temp */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Contract vs. Temporary Staffing
            </h2>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contract Staffing</h3>
                  <p className="text-gray-700">
                    Best for project-based work requiring specialized skills. Longer engagements (weeks to months/years) with defined deliverables. Focus on expertise and project completion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Temporary Staffing</h3>
                  <p className="text-gray-700">
                    Best for filling immediate gaps and handling workload fluctuations. Shorter engagements (days to months) focused on covering operational needs. Focus on availability and fast placement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Staff Your Next Project?"
        description="Access specialized contractors for your project-based work. Flexible terms, expert skills, no overhead."
        primaryCTA={{
          label: 'Request Contract Workers',
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
