import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Truck, Package, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transportation & Logistics Staffing | CDL Drivers & Dispatchers',
  description: 'Find CDL drivers, dispatchers, fleet coordinators, and logistics professionals. Temporary and direct hire transportation staffing solutions.',
  keywords: ['CDL drivers', 'transportation staffing', 'logistics jobs', 'dispatcher jobs', 'fleet coordinator', 'delivery drivers'],
};

const commonPositions = [
  { title: 'CDL Class A Drivers', icon: Truck },
  { title: 'CDL Class B Drivers', icon: Truck },
  { title: 'Delivery Drivers', icon: Truck },
  { title: 'Dispatchers', icon: Package },
  { title: 'Fleet Coordinators', icon: Package },
  { title: 'Logistics Coordinators', icon: Package },
  { title: 'Route Planners', icon: Package },
  { title: 'Transportation Managers', icon: Truck },
  { title: 'DOT Compliance Officers', icon: Package },
  { title: 'Freight Brokers', icon: Package },
  { title: 'Warehouse Supervisors', icon: Package },
  { title: 'Yard Jockeys', icon: Truck },
];

const requirements = [
  'Valid CDL license verification (Class A, B, or C)',
  'Clean driving record (MVR) checks',
  'DOT medical certification validation',
  'Drug and alcohol screening compliance',
  'Background checks and employment verification',
  'HAZMAT endorsements when required',
  'TWIC cards for port operations',
  'Experience with ELD systems and GPS tracking',
];

const benefits = [
  'Access to qualified CDL drivers quickly',
  'All licenses and certifications verified',
  'DOT-compliant hiring process',
  'Drug screening and background checks included',
  'MVR and CSA score verification',
  'Fast placement for urgent needs',
  'Flexible staffing for seasonal demand',
  'Reduce recruiting and onboarding costs',
];

export default function TransportationLogisticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transportation & Logistics Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find qualified CDL drivers, dispatchers, and logistics professionals to keep your fleet moving. All drivers pre-screened with DOT-compliant hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Drivers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Driving Jobs</Link>
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
              Transportation Positions We Fill
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

      {/* CDL & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              DOT-Compliant Screening & Verification
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              All transportation candidates undergo comprehensive DOT-compliant screening
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Transportation Staffing Solutions
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

      {/* Common Needs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Common Staffing Scenarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Peak Season Support</h3>
                <p className="text-gray-600 text-sm">Add drivers during holiday shipping, Q4 surge, or seasonal demand increases</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Route Expansion</h3>
                <p className="text-gray-600 text-sm">Quickly scale your fleet when adding new routes or service areas</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Coverage & Absences</h3>
                <p className="text-gray-600 text-sm">Fill in for vacations, medical leave, or unexpected driver shortages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transportation Solutions for Every Industry
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide transportation staffing across LTL, FTL, last-mile delivery, freight brokerage, 3PL operations, and specialized hauling.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['LTL/FTL Carriers', 'Last-Mile Delivery', 'Freight Brokers', '3PL & Warehousing', 'Refrigerated Transport', 'Flatbed & Specialized', 'Intermodal Operations', 'Dedicated Contract Carriers'].map((type, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Keep Your Fleet Moving"
        description="From CDL drivers to dispatchers, get the transportation professionals you need to meet delivery deadlines and service commitments."
        primaryCTA={{
          label: 'Request Drivers',
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
