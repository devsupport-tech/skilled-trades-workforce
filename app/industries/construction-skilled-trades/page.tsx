import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Wrench, HardHat, Ruler, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction & Skilled Trades Staffing | Carpenters, Electricians, Plumbers',
  description: 'Find qualified construction workers and skilled tradespeople. Carpenters, electricians, plumbers, HVAC technicians, welders, and more. Temporary, temp-to-hire, and direct hire.',
  keywords: ['construction staffing', 'skilled trades', 'carpenter jobs', 'electrician jobs', 'plumber jobs', 'HVAC', 'welders', 'construction workers'],
};

const commonPositions = [
  { title: 'Carpenters', icon: Wrench },
  { title: 'Electricians', icon: Wrench },
  { title: 'Plumbers', icon: Wrench },
  { title: 'HVAC Technicians', icon: Wrench },
  { title: 'Welders', icon: Wrench },
  { title: 'Pipefitters', icon: Wrench },
  { title: 'Heavy Equipment Operators', icon: HardHat },
  { title: 'Construction Laborers', icon: HardHat },
  { title: 'Concrete Workers', icon: HardHat },
  { title: 'Masons', icon: Ruler },
  { title: 'Roofers', icon: HardHat },
  { title: 'Painters', icon: Ruler },
];

const staffingSolutions = [
  {
    title: 'Temporary Staffing',
    description: 'Fill immediate gaps for project ramp-ups, seasonal work, or unexpected absences.',
  },
  {
    title: 'Temp-to-Hire',
    description: 'Evaluate skilled tradespeople on the job before making a permanent hire.',
  },
  {
    title: 'Direct Hire',
    description: 'Find experienced supervisors, foremen, and specialized tradespeople for permanent positions.',
  },
  {
    title: 'Project Staffing',
    description: 'Staff entire crews for specific construction projects with defined timelines.',
  },
];

const benefits = [
  'Pre-screened candidates with verified skills',
  'Certifications and licenses validated',
  'OSHA safety training confirmed',
  'Background checks and drug screening',
  'Workers\' comp and liability insurance handled',
  'Replace workers at no additional charge',
  'Fast placement for urgent needs',
  'Experienced construction recruiters',
];

export default function ConstructionSkilledTradesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction & Skilled Trades Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with experienced carpenters, electricians, plumbers, welders, and other skilled tradespeople ready to get to work. Flexible staffing for projects of any size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Skilled Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Construction Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Positions We Fill
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-base">{position.title}</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Construction Staffing Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {staffingSolutions.map((solution, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Construction Companies Choose Us
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

      {/* Safety & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Safety & Compliance Focus
            </h2>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <p className="text-gray-700 mb-4">
                Safety is paramount in construction and skilled trades. All our workers undergo thorough screening to ensure they meet industry safety standards:
              </p>
              <ul className="space-y-2">
                {[
                  'OSHA 10/30 Hour Training verification',
                  'Safety certifications confirmed',
                  'Drug screening and background checks',
                  'License and certification validation',
                  'Workers\' compensation insurance',
                  'General liability coverage',
                  'Ongoing safety compliance monitoring',
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
        title="Ready to Build Your Construction Team?"
        description="Access skilled tradespeople when you need them. From single workers to complete crews, we've got you covered."
        primaryCTA={{
          label: 'Request Workers',
          href: '/employers/request-workers',
        }}
        secondaryCTA={{
          label: 'View Open Positions',
          href: '/jobs',
        }}
        variant="gradient"
      />
    </>
  );
}
