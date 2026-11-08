import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tree Service & Debris Removal | Storm Center',
  description: 'Emergency tree removal, debris clearing, and site cleanup crews for storm damage response.',
  keywords: ['tree removal', 'debris removal', 'storm cleanup', 'fallen tree service'],
};

const services = [
  'Emergency tree removal (fallen or dangerous trees)',
  'Limb and branch removal from structures',
  'Debris hauling and disposal',
  'Site clearing and cleanup',
  'Stump grinding and removal',
  'Right-of-way clearing',
  'Commercial and residential capabilities',
  'Licensed and insured arborists',
];

const equipment = [
  { name: 'Cranes & Lifts', description: 'For large tree removal and hard-to-reach areas' },
  { name: 'Chippers & Grinders', description: 'On-site debris processing' },
  { name: 'Dump Trucks', description: 'Debris hauling and disposal' },
  { name: 'Safety Equipment', description: 'Full safety gear and fall protection' },
];

export default function TreeDebrisPage() {
  return (
    <>
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/storm-center"
            className="inline-flex items-center text-red-700 hover:text-red-800 text-sm font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Storm Center
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tree Service & Debris Removal
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Professional tree removal and debris clearing crews for storm damage cleanup and site restoration.
            </p>
            <Button size="lg" variant="default" className="bg-white text-green-700 hover:bg-green-50" asChild>
              <Link href="/storm-center/crew-deployment">
                Request Tree Service Crews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tree & Debris Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Storm damage often results in fallen trees, broken limbs, and massive debris piles. Our professional tree service crews handle emergency removals and complete site cleanup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {equipment.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <Wrench className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensed Arborists & Safety</h3>
              <p className="text-gray-700 mb-4">
                All tree service contractors are licensed, insured, and trained in safe tree removal procedures. We follow ANSI Z133 safety standards and OSHA regulations.
              </p>
              <p className="text-gray-700">
                Large-scale debris removal is coordinated with local municipalities for proper disposal and recycling where possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Tree Removal & Debris Cleanup?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional tree service crews available for emergency storm response
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/storm-center/crew-deployment">
                  Request Crews Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Storm Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
