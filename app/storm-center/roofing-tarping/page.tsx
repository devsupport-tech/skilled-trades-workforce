import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, CheckCircle, ArrowRight, ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Emergency Roofing & Tarping Services | Storm Center',
  description: 'Emergency roof repairs, tarping, and storm damage roof restoration crews available 24/7.',
  keywords: ['emergency roofing', 'roof tarping', 'storm roof repair', 'hurricane roof damage'],
};

const services = [
  'Emergency roof inspections and assessments',
  'Blue tarp installation and securing',
  'Temporary roof patches and repairs',
  'Debris removal from roofs',
  'Permanent roof replacement coordination',
  'Licensed roofing contractors',
  'Insurance documentation support',
  'Multi-story and commercial capabilities',
];

const capabilities = [
  { title: 'Residential Roofing', description: 'Single-family homes, townhomes, and condos' },
  { title: 'Commercial Roofing', description: 'Warehouses, offices, and retail buildings' },
  { title: 'Multi-Family', description: 'Apartment complexes and multi-unit properties' },
  { title: 'Industrial', description: 'Factories, plants, and large structures' },
];

export default function RoofingTarpingPage() {
  return (
    <>
      {/* Breadcrumb */}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Roofing & Tarping Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Rapid deployment of licensed roofing contractors for emergency repairs, tarping, and full roof restoration after storm damage.
            </p>
            <Button size="lg" variant="default" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
              <Link href="/storm-center/crew-deployment">
                Request Roofing Crews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Roofing Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After a storm, protecting your property from further water damage is critical. Our emergency roofing crews provide rapid response for tarping, temporary repairs, and permanent roof restoration.
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Types We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {capabilities.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensed & Insured Contractors</h3>
              <p className="text-gray-700 mb-4">
                All roofing contractors in our network are fully licensed, insured, and experienced in emergency storm response. We verify credentials, insurance coverage, and safety certifications before deployment.
              </p>
              <p className="text-gray-700">
                We provide documentation and photos for insurance claims, and coordinate with adjusters to ensure proper coverage for your roof damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Emergency Roofing Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get licensed roofing contractors deployed to your property quickly
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
