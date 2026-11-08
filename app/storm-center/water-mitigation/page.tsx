import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, CheckCircle, ArrowRight, ArrowLeft, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Water Damage & Mitigation Services | Storm Center',
  description: 'Emergency water extraction, drying, and mitigation services for flood and storm water damage.',
  keywords: ['water damage', 'flood cleanup', 'water extraction', 'water mitigation'],
};

const services = [
  'Emergency water extraction',
  'Structural drying and dehumidification',
  'Moisture detection and monitoring',
  'Mold prevention and remediation',
  'Carpet and upholstery cleaning',
  'Content drying and restoration',
  'Document and electronics recovery',
  'Insurance documentation support',
];

const responsePhases = [
  { phase: '0-4 hours', title: 'Emergency Response', description: 'Initial water extraction and damage containment' },
  { phase: '4-48 hours', title: 'Structural Drying', description: 'Industrial dehumidifiers and air movers deployed' },
  { phase: '2-7 days', title: 'Monitoring', description: 'Daily moisture readings and equipment adjustment' },
  { phase: '7+ days', title: 'Restoration', description: 'Final cleanup and restoration coordination' },
];

export default function WaterMitigationPage() {
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

      <section className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Damage & Mitigation Services
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Rapid water extraction, structural drying, and complete mitigation services for flood and storm water damage.
            </p>
            <Button size="lg" variant="default" className="bg-white text-cyan-700 hover:bg-cyan-50" asChild>
              <Link href="/storm-center/crew-deployment">
                Request Water Mitigation Crews
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Water Mitigation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Time is critical when dealing with water damage. Every hour of delay increases the risk of mold growth and structural damage. Our certified water mitigation specialists respond immediately with industrial equipment and proven processes.
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Response Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {responsePhases.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-5 w-5 text-cyan-600" />
                      <span className="font-bold text-cyan-600">{item.phase}</span>
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IICRC Certified Technicians</h3>
              <p className="text-gray-700 mb-4">
                All water mitigation contractors hold IICRC (Institute of Inspection, Cleaning and Restoration Certification) certifications in water damage restoration. We follow industry best practices and ANSI/IICRC S500 standards.
              </p>
              <p className="text-gray-700">
                We provide complete documentation for insurance claims including photos, moisture readings, and daily progress reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Water Damage Mitigation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Immediate response for flood and water damage - every minute counts
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
