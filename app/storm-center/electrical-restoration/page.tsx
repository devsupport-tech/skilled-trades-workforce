import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, CheckCircle, ArrowRight, ArrowLeft, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electrical Restoration Services | Storm Center',
  description: 'Emergency electrical restoration crews, power restoration, and temporary generator services after storm damage.',
  keywords: ['electrical restoration', 'power restoration', 'emergency electricians', 'storm electrical'],
};

const services = [
  'Emergency electrical assessments',
  'Temporary power and generator setup',
  'Service panel repairs and replacement',
  'Electrical system damage evaluation',
  'Power line coordination with utilities',
  'Licensed master electricians',
  'Commercial and residential capabilities',
  'Code compliance and permitting',
];

const capabilities = [
  { title: 'Licensed Electricians', description: 'State-licensed, insured electrical contractors' },
  { title: 'Emergency Generators', description: 'Temporary power solutions and generator setup' },
  { title: 'Service Restoration', description: 'Main panel and service entrance repairs' },
  { title: 'Safety Inspections', description: 'Comprehensive electrical safety assessments' },
];

export default function ElectricalRestorationPage() {
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

      <section className="bg-gradient-to-br from-yellow-600 to-yellow-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Electrical Restoration Services
            </h1>
            <p className="text-xl text-yellow-100 mb-8">
              Licensed electricians for emergency power restoration, electrical system repairs, and temporary power solutions after storm damage.
            </p>
            <Button size="lg" variant="default" className="bg-white text-yellow-700 hover:bg-yellow-50" asChild>
              <Link href="/storm-center/crew-deployment">
                Request Electrical Crews
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Electrical Restoration Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Storm damage to electrical systems can be dangerous and requires immediate professional attention. Our licensed electrical contractors provide emergency assessments, repairs, and power restoration services.
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {capabilities.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="h-5 w-5 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
                  <p className="text-gray-700 mb-3">
                    Never attempt electrical repairs after storm damage. Water and electricity are a dangerous combination. Our licensed electricians are trained in storm damage electrical safety.
                  </p>
                  <p className="text-gray-700">
                    All work meets NEC code requirements and local permitting standards. We coordinate with utility companies for safe power restoration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Emergency Electrical Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Licensed electricians available 24/7 for storm damage electrical restoration
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
