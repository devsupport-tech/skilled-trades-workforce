import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, ArrowRight, ArrowLeft, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Emergency Restoration Services | Storm Center',
  description: 'Immediate emergency restoration crews for damage assessment, debris removal, and temporary repairs after disasters.',
  keywords: ['emergency restoration', 'disaster recovery', 'damage assessment', 'emergency repairs'],
};

const services = [
  'Emergency damage assessment',
  'Structural stabilization',
  'Emergency board-up and securing',
  'Temporary roof repairs and tarping',
  'Debris removal and site clearing',
  'Water extraction and drying',
  'Temporary power and utilities',
  'Hazard mitigation',
  'Documentation for insurance claims',
  'Coordination with adjusters and inspectors',
];

const responseTime = [
  { time: '0-4 hours', description: 'Initial contact and assessment coordination' },
  { time: '4-24 hours', description: 'Crew mobilization and travel to site' },
  { time: '24-48 hours', description: 'Full crews on-site and working' },
];

export default function EmergencyRestorationPage() {
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
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Restoration Services
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Rapid response crews for immediate damage assessment, stabilization, and temporary repairs following disasters.
            </p>
            <Button size="lg" variant="default" className="bg-white text-orange-700 hover:bg-orange-50" asChild>
              <Link href="/storm-center/crew-deployment">
                Request Emergency Crews
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Response Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When disaster strikes, immediate action is critical to prevent further damage and begin the recovery process. Our Emergency Restoration crews specialize in rapid response, damage assessment, and temporary stabilization.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {responseTime.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-6 w-6 text-orange-600" />
                      <CardTitle className="text-2xl font-bold text-orange-600">{item.time}</CardTitle>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Emergency Coordination</h3>
              <p className="text-gray-700 mb-4">
                Our emergency coordination center operates around the clock during disaster events. We maintain a database of pre-vetted emergency restoration contractors ready for immediate deployment.
              </p>
              <p className="text-gray-700">
                All emergency response crews are licensed, insured, and trained in safety protocols for disaster environments. We coordinate housing, equipment, and logistics so crews can focus on restoration work.
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
              Need Emergency Restoration Crews?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our 24/7 emergency line for immediate assistance
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
