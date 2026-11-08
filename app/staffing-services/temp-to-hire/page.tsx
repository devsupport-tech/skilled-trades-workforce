import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, UserCheck, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { company } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Temp-to-Hire Staffing | Try Before You Hire',
  description: 'Evaluate employees on the job before making a permanent hire. Reduce hiring risk with our temp-to-hire staffing solutions.',
  keywords: ['temp to hire', 'contract to hire', 'try before you hire', 'probationary staffing', 'temp to perm'],
};

const benefits = [
  'Evaluate performance before permanent commitment',
  'Reduce hiring risk and turnover costs',
  'Assess cultural fit in real work environment',
  'Convert to permanent hire when ready',
  'Flexible evaluation period (typically 90 days)',
  'We handle temp payroll until conversion',
  'One-time conversion fee replaces large placement fee',
  'No obligation to convert if not the right fit',
];

const idealFor = [
  {
    title: 'High-Stakes Positions',
    description: 'Validate fit before committing to critical roles',
    icon: UserCheck,
  },
  {
    title: 'Uncertain Workload',
    description: 'Start as temp, convert if demand sustains',
    icon: TrendingUp,
  },
  {
    title: 'Risk Mitigation',
    description: 'Reduce risk of bad hires and costly turnover',
    icon: Shield,
  },
];

export default function TempToHirePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Temp-to-Hire Staffing Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Evaluate employees on the job before making a permanent hiring commitment. Reduce risk and ensure the right fit for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Temp-to-Hire Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Browse Temp-to-Hire Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Temp-to-Hire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Temp-to-Hire Staffing?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Temp-to-hire (also called contract-to-hire or temp-to-perm) is a staffing arrangement that allows you to evaluate an employee in your actual work environment before making a permanent hiring decision. Workers start as temporary employees of {company.name}, giving you the opportunity to assess their skills, work ethic, and cultural fit on the job.
              </p>
              <p>
                After a predetermined evaluation period—typically 90 days but flexible based on your needs—you can choose to hire the worker permanently onto your own payroll. If the worker isn't the right fit, there's no obligation to convert them to permanent status.
              </p>
              <p>
                This "try before you buy" approach significantly reduces hiring risk and turnover costs, especially for positions where it's difficult to assess suitability through interviews alone.
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
              Benefits of Temp-to-Hire
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
              Temp-to-Hire is Ideal For
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

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How Temp-to-Hire Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Define Your Needs',
                  description: 'Share job requirements, desired evaluation period, and conversion terms.',
                },
                {
                  step: 2,
                  title: 'Candidate Placement',
                  description: 'We present qualified candidates for your review and approval.',
                },
                {
                  step: 3,
                  title: 'Evaluation Period',
                  description: 'Worker starts as our temp employee. You evaluate performance on the job while we handle payroll and admin.',
                },
                {
                  step: 4,
                  title: 'Conversion Decision',
                  description: 'At end of trial period, decide to convert to permanent employee or extend/end assignment.',
                },
                {
                  step: 5,
                  title: 'Permanent Hire',
                  description: 'If converting, pay one-time conversion fee and worker transfers to your payroll.',
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

      {/* Conversion Fee vs Traditional Placement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Cost-Effective Hiring
            </h2>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lower Risk, Lower Cost
              </h3>
              <p className="text-gray-700 mb-4">
                Temp-to-hire offers a more cost-effective path to permanent hiring compared to traditional direct placement fees. Our conversion fee structure is transparent and significantly lower than typical recruitment agency fees, while giving you the added benefit of on-the-job evaluation.
              </p>
              <p className="text-gray-700">
                If the worker doesn't work out during the trial period, you pay nothing beyond the temp payroll costs—no large placement fee wasted on a bad hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Try Temp-to-Hire?"
        description="Reduce hiring risk and find the perfect fit for your team with our temp-to-hire solutions."
        primaryCTA={{
          label: 'Request Temp-to-Hire Workers',
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
