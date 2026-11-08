import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import {
  Clock,
  UserCheck,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { services } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Staffing Services | Temporary, Temp-to-Hire & Direct Hire Solutions',
  description: 'Comprehensive staffing solutions for businesses across Houston and beyond. Temporary, temp-to-hire, direct hire, contract, professional, and remote staffing services.',
  keywords: ['staffing services', 'employment agency', 'temporary staffing', 'direct hire', 'temp to hire', 'contract staffing'],
};

const staffingServices = [
  {
    title: services.staffing['temporary-staffing'].name,
    description: services.staffing['temporary-staffing'].description,
    href: '/staffing-services/temporary-staffing',
    icon: Clock,
    benefits: [
      'Quick placement for urgent needs',
      'Flexible terms with no long-term commitment',
      'We handle payroll and workers\' comp',
    ],
  },
  {
    title: services.staffing['temp-to-hire'].name,
    description: services.staffing['temp-to-hire'].description,
    href: '/staffing-services/temp-to-hire',
    icon: UserCheck,
    benefits: [
      'Try before you hire',
      'Reduce hiring risk',
      'Lower cost than traditional placement',
    ],
  },
  {
    title: services.staffing['direct-hire'].name,
    description: services.staffing['direct-hire'].description,
    href: '/staffing-services/direct-hire',
    icon: Users,
    benefits: [
      'Access to passive candidates',
      'Comprehensive screening',
      'Replacement guarantee included',
    ],
  },
  {
    title: services.staffing['contract-staffing'].name,
    description: services.staffing['contract-staffing'].description,
    href: '/staffing-services/contract-staffing',
    icon: Briefcase,
    benefits: [
      'Specialized expertise for projects',
      'No benefits overhead',
      'Flexible contract lengths',
    ],
  },
  {
    title: services.staffing['professional-recruiting'].name,
    description: services.staffing['professional-recruiting'].description,
    href: '/staffing-services/professional-recruiting',
    icon: GraduationCap,
    benefits: [
      'Specialized industry recruiters',
      'Professional & technical roles',
      'Confidential searches available',
    ],
  },
  {
    title: services.staffing['remote-staffing'].name,
    description: services.staffing['remote-staffing'].description,
    href: '/staffing-services/remote-staffing',
    icon: Globe,
    benefits: [
      'Access talent nationwide',
      'Lower overhead costs',
      'Flexible work arrangements',
    ],
  },
];

const whyChooseUs = [
  'Pre-screened, qualified candidates',
  'Fast placement for urgent needs',
  'Dedicated recruiter support',
  'Flexible terms and arrangements',
  'Workers\' compensation handled',
  'Payroll administration included',
  'Replace workers at no charge',
  'Industry-specific expertise',
];

export default function StaffingServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Staffing Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From temporary workers to permanent hires, we provide flexible staffing solutions tailored to your business needs. Find the right talent, when you need it, with the arrangement that works best for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Workers Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Staffing Services
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Choose the staffing arrangement that best fits your needs—or combine multiple services for a comprehensive workforce solution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffingServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={service.href}>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Staffing Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
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
              How Our Staffing Services Work
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Tell Us Your Needs',
                  description: 'Share details about your staffing requirements—position, skills, timeline, and preferred arrangement.',
                },
                {
                  step: 2,
                  title: 'We Find Qualified Candidates',
                  description: 'Our recruiters source candidates from our network of pre-screened talent, matching your specific needs.',
                },
                {
                  step: 3,
                  title: 'You Review and Select',
                  description: 'We present candidate profiles for your review. You have final approval before placement.',
                },
                {
                  step: 4,
                  title: 'Workers Start',
                  description: 'Approved workers begin on your preferred date. We handle ongoing admin, payroll, and support.',
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

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Construction & Skilled Trades',
                'Restoration & Disaster Recovery',
                'Manufacturing & Production',
                'Warehousing & Distribution',
                'Logistics & Transportation',
                'Office & Administrative',
                'Accounting & Finance',
                'Human Resources',
                'Information Technology',
                'Customer Service',
                'Healthcare Support',
                'And Many More...',
              ].map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Find the Right Staffing Solution?"
        description="Whether you need temporary workers, permanent hires, or something in between, we're here to help."
        primaryCTA={{
          label: 'Request Workers',
          href: '/employers/request-workers',
        }}
        secondaryCTA={{
          label: 'Browse All Services',
          href: '#services',
        }}
        variant="gradient"
      />
    </>
  );
}
