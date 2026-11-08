import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import {
  Wrench,
  Building,
  Factory,
  Package,
  FileText,
  Truck,
  Calculator,
  Users,
  Headphones,
  Heart,
  ArrowRight
} from 'lucide-react';
import { jobCategories } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Industries We Serve | Staffing Solutions by Industry',
  description: 'Specialized staffing solutions for construction, manufacturing, warehousing, administrative, and more. Expert recruiters for every industry.',
  keywords: ['industry staffing', 'specialized recruiting', 'construction staffing', 'manufacturing staffing', 'warehouse staffing'],
};

const industries = [
  {
    title: 'Construction & Skilled Trades',
    description: 'Carpenters, electricians, plumbers, HVAC, welders, and construction workers',
    href: '/industries/construction-skilled-trades',
    icon: Wrench,
    color: 'blue',
  },
  {
    title: 'Restoration & Disaster Recovery',
    description: 'Water damage, fire restoration, mold remediation, emergency response teams',
    href: '/industries/restoration-disaster-recovery',
    icon: Building,
    color: 'orange',
  },
  {
    title: 'Manufacturing & Production',
    description: 'Machine operators, assemblers, quality control, production workers',
    href: '/industries/manufacturing-production',
    icon: Factory,
    color: 'indigo',
  },
  {
    title: 'Warehouse & Logistics',
    description: 'Forklift operators, pickers, packers, shipping, receiving, inventory',
    href: '/industries/warehouse-logistics',
    icon: Package,
    color: 'purple',
  },
  {
    title: 'Administrative & Clerical',
    description: 'Receptionists, administrative assistants, data entry, office support',
    href: '/industries/administrative-clerical',
    icon: FileText,
    color: 'teal',
  },
  {
    title: 'Transportation & Logistics',
    description: 'CDL drivers, dispatchers, fleet coordinators, delivery drivers',
    href: '/industries/transportation-logistics',
    icon: Truck,
    color: 'red',
  },
  {
    title: 'Accounting & Finance',
    description: 'Accountants, bookkeepers, financial analysts, payroll specialists',
    href: '/industries/accounting-finance',
    icon: Calculator,
    color: 'green',
  },
  {
    title: 'Human Resources',
    description: 'HR managers, recruiters, benefits administrators, training coordinators',
    href: '/industries/human-resources',
    icon: Users,
    color: 'pink',
  },
  {
    title: 'Customer Service',
    description: 'Call center agents, customer support, technical support, help desk',
    href: '/industries/customer-service',
    icon: Headphones,
    color: 'cyan',
  },
  {
    title: 'Healthcare Support',
    description: 'Medical office staff, medical billing, healthcare administration',
    href: '/industries/healthcare-support',
    icon: Heart,
    color: 'rose',
  },
];

const whySpecialized = [
  'Industry-specific recruiters who understand your needs',
  'Networks of candidates with relevant experience',
  'Knowledge of industry certifications and requirements',
  'Understanding of seasonal and project-based demands',
  'Familiarity with industry-specific safety regulations',
  'Experience with union and prevailing wage requirements',
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Specialized Staffing for Every Industry
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Industry-focused recruiters who understand your unique staffing challenges and have the networks to find qualified candidates fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Browse All Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              From construction sites to corporate offices, we provide specialized staffing solutions tailored to your industry\'s unique needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <industry.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={industry.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Specialized */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Industry Specialization Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whySpecialized.map((reason, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Don't See Your Industry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don\'t See Your Industry Listed?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We work with businesses across many industries beyond those listed. Contact us to discuss your specific staffing needs and we\'ll create a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/employers/request-workers">Request Workers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Find Qualified Workers for Your Industry?"
        description="Work with recruiters who understand your industry and have the networks to find the right talent fast."
        primaryCTA={{
          label: 'Request Workers',
          href: '/employers/request-workers',
        }}
        secondaryCTA={{
          label: 'Browse Job Categories',
          href: '/jobs',
        }}
        variant="gradient"
      />
    </>
  );
}
