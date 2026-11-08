import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Warehouse & Logistics Staffing | Distribution Center Workers',
  description: 'Find warehouse workers, forklift operators, pickers, packers, and logistics staff. Fast placement for distribution centers and fulfillment operations.',
  keywords: ['warehouse staffing', 'logistics workers', 'forklift operators', 'pickers packers', 'distribution center jobs'],
};

const commonPositions = [
  { title: 'Forklift Operators', icon: Package },
  { title: 'Order Pickers', icon: Package },
  { title: 'Packers & Shippers', icon: Package },
  { title: 'Warehouse Associates', icon: Package },
  { title: 'Receiving Clerks', icon: Package },
  { title: 'Inventory Specialists', icon: Package },
  { title: 'Shipping Coordinators', icon: Truck },
  { title: 'Material Handlers', icon: Package },
  { title: 'Quality Control Inspectors', icon: Package },
  { title: 'Warehouse Supervisors', icon: Package },
  { title: 'Dock Workers', icon: Truck },
  { title: 'RF Scanner Operators', icon: Package },
];

const benefits = [
  'Pre-screened with warehouse experience',
  'Forklift certifications verified',
  'RF scanner and WMS experience validated',
  'Safety training confirmed (OSHA, etc.)',
  'Background checks and drug screening',
  'Fast placement for seasonal surges',
  'Flexible staffing for peak periods',
  'Replace workers at no additional charge',
];

export default function WarehouseLogisticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Warehouse & Logistics Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find reliable warehouse workers, forklift operators, and logistics staff to keep your distribution center running smoothly. Scale up fast for peak seasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Warehouse Jobs</Link>
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
              Warehouse Positions We Fill
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
              Warehouse Staffing Solutions
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

      {/* Peak Season Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Peak Season & Holiday Surge Staffing
            </h2>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <p className="text-gray-700 mb-4">
                Don\'t let seasonal surges slow you down. We specialize in rapid warehouse staffing for peak periods:
              </p>
              <ul className="space-y-2">
                {[
                  'Holiday season fulfillment (Q4 surge)',
                  'Back-to-school peak periods',
                  'Prime Day and major sale events',
                  'New warehouse openings and ramp-ups',
                  'Inventory counts and cycle counts',
                  'Temporary capacity increases',
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

      {/* Experience with WMS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experienced with Leading WMS Platforms
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our warehouse workers have experience with popular warehouse management systems including Manhattan, SAP, Oracle, Blue Yonder, and more.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Manhattan WMS', 'SAP EWM', 'Oracle WMS', 'Blue Yonder', 'HighJump', 'Infor', 'NetSuite', 'RF Scanner Systems'].map((wms, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">{wms}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Scale Your Warehouse Operations"
        description="From order pickers to forklift operators, get the warehouse workers you need to meet demand and hit your shipping deadlines."
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
