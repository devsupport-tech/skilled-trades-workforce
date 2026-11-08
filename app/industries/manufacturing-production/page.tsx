import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Factory, Settings, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manufacturing & Production Staffing | Factory & Assembly Workers',
  description: 'Find skilled manufacturing workers, machine operators, assemblers, and production staff. Flexible staffing for production facilities.',
  keywords: ['manufacturing staffing', 'production workers', 'machine operators', 'assembly workers', 'factory jobs'],
};

const commonPositions = [
  { title: 'Machine Operators', icon: Settings },
  { title: 'CNC Operators', icon: Settings },
  { title: 'Assembly Line Workers', icon: Factory },
  { title: 'Quality Control Inspectors', icon: Factory },
  { title: 'Production Supervisors', icon: Factory },
  { title: 'Forklift Operators', icon: Settings },
  { title: 'Welders & Fabricators', icon: Settings },
  { title: 'Maintenance Technicians', icon: Settings },
  { title: 'Packaging Workers', icon: Factory },
  { title: 'Material Handlers', icon: Factory },
  { title: 'Production Planners', icon: Factory },
  { title: 'Inventory Control', icon: Factory },
];

const benefits = [
  'Pre-screened for manufacturing experience',
  'Safety certifications verified (OSHA, etc.)',
  'Skills assessments for technical positions',
  'Background checks and drug screening',
  'Forklift and equipment certifications validated',
  'Fast placement for production ramp-ups',
  'Flexible staffing for seasonal demand',
  'Replace workers at no charge',
];

export default function ManufacturingProductionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Manufacturing & Production Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find experienced machine operators, assemblers, quality inspectors, and production workers to keep your facility running at peak efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Manufacturing Jobs</Link>
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
              Manufacturing Positions We Fill
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Manufacturing Staffing Solutions
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Production Ramp-Ups</h3>
                <p className="text-gray-600 text-sm">Scale your workforce quickly for new contracts, product launches, or increased demand</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seasonal Demand</h3>
                <p className="text-gray-600 text-sm">Add workers during peak seasons without permanent headcount increases</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Absentee Coverage</h3>
                <p className="text-gray-600 text-sm">Fill in for vacations, medical leave, or unexpected absences to maintain production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Keep Your Production Line Moving"
        description="Access qualified manufacturing workers who are ready to start and help you meet production goals."
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
