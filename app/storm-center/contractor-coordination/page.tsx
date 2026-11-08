import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contractor Coordination Services | Storm Center',
  description: 'General contractor coordination and project management for large-scale storm restoration projects.',
  keywords: ['contractor coordination', 'project management', 'general contractors', 'restoration coordination'],
};

const services = [
  'General contractor sourcing and vetting',
  'Multi-trade project coordination',
  'Scope of work development',
  'Bid collection and comparison',
  'Progress monitoring and quality control',
  'Change order management',
  'Schedule coordination',
  'Final inspection and closeout',
];

const projectTypes = [
  { title: 'Residential Restoration', description: 'Single and multi-family property reconstruction' },
  { title: 'Commercial Recovery', description: 'Business and retail facility restoration' },
  { title: 'Multi-Site Projects', description: 'Portfolio and franchise location coordination' },
  { title: 'Large-Scale Disasters', description: 'Community-wide restoration efforts' },
];

export default function ContractorCoordinationPage() {
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

      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contractor Coordination Services
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Comprehensive general contractor coordination and project management for complex storm restoration projects.
            </p>
            <Button size="lg" variant="default" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
              <Link href="/storm-center/crew-deployment">
                Request Coordination Services
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contractor Coordination Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Large-scale storm restoration requires coordination of multiple contractors, trades, and timelines. Our contractor coordination services handle the complexity so you can focus on your business or property.
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {projectTypes.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Use Our Coordination Services</h3>
              <p className="text-gray-700 mb-4">
                We maintain relationships with hundreds of licensed general contractors across the Gulf Coast. We can source qualified GCs quickly, compare bids, and manage the project from start to finish.
              </p>
              <p className="text-gray-700">
                All contractors are pre-vetted for licensing, insurance, safety compliance, and financial stability. We monitor quality and progress throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Contractor Coordination?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us manage your storm restoration project from start to finish
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/storm-center/crew-deployment">
                  Request Services
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
