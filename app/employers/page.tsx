import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import {
  CheckCircle,
  Clock,
  Users,
  Shield,
  DollarSign,
  HeadphonesIcon,
  ArrowRight,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Staffing Solutions for Employers | Flexible Workforce Options',
  description: 'Find qualified workers fast with our temporary, temp-to-hire, and direct hire staffing solutions. Pre-screened candidates, flexible terms, dedicated support.',
  keywords: ['employer staffing', 'hire workers', 'staffing agency', 'temporary employees', 'direct hire'],
};

const benefits = [
  {
    title: 'Fast Placement',
    description: 'Get qualified candidates within 24-48 hours for many positions',
    icon: Clock,
  },
  {
    title: 'Pre-Screened Workers',
    description: 'All candidates undergo thorough screening, skills assessment, and background checks',
    icon: Shield,
  },
  {
    title: 'Flexible Arrangements',
    description: 'Choose from temporary, temp-to-hire, direct hire, contract, or remote staffing',
    icon: Users,
  },
  {
    title: 'Cost-Effective',
    description: 'Reduce recruiting costs, minimize bad hires, and control payroll expenses',
    icon: DollarSign,
  },
  {
    title: 'Dedicated Support',
    description: 'Work with an experienced recruiter who understands your business and industry',
    icon: HeadphonesIcon,
  },
  {
    title: 'Risk Mitigation',
    description: 'We handle workers\' comp, payroll, unemployment, and compliance for temp staff',
    icon: FileText,
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Tell Us Your Needs',
    description: 'Complete a quick request form or call us. Share job requirements, timeline, and number of workers needed.',
  },
  {
    step: 2,
    title: 'We Source Candidates',
    description: 'Our recruiters tap into our network of pre-screened candidates and find workers who match your criteria.',
  },
  {
    step: 3,
    title: 'Review & Approve',
    description: 'We present qualified candidates for your review. You interview and approve before placement.',
  },
  {
    step: 4,
    title: 'Workers Start',
    description: 'Approved workers begin on your preferred start date. We handle all payroll and admin for temp placements.',
  },
];

const industries = [
  'Construction & Skilled Trades',
  'Restoration & Disaster Recovery',
  'Manufacturing & Production',
  'Warehouse & Logistics',
  'Transportation',
  'Administrative & Clerical',
  'Accounting & Finance',
  'Human Resources',
  'Customer Service',
  'Healthcare Support',
  'And Many More...',
];

export default function EmployersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Staffing Solutions for Employers
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find qualified workers fast. From one-day assignments to permanent hires, we deliver the talent you need, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Workers Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/employers/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Employers Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            <div className="space-y-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/employers/how-it-works">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Flexible Staffing Options
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Choose the staffing arrangement that best fits your needs—or combine multiple options
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Temporary Staffing</CardTitle>
                  <CardDescription>
                    Short-term workers for immediate needs, seasonal demand, or project-based work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/staffing-services/temporary-staffing">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Temp-to-Hire</CardTitle>
                  <CardDescription>
                    Try before you hire - evaluate workers on the job before making permanent offers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/staffing-services/temp-to-hire">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Direct Hire</CardTitle>
                  <CardDescription>
                    Permanent placement recruiting for skilled positions and leadership roles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/staffing-services/direct-hire">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Link href="/staffing-services" className="text-blue-600 font-semibold hover:text-blue-700">
                View All Staffing Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p className="font-medium text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/industries" className="text-blue-600 font-semibold hover:text-blue-700">
                View All Industries →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Get Started?"
        description="Request workers today and we'll start finding qualified candidates within 24 hours."
        primaryCTA={{
          label: 'Request Workers',
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
