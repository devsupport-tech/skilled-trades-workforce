import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, CheckCircle, ArrowRight, ArrowLeft, Clock, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hurricane Response Workforce | Storm Center',
  description: 'Comprehensive hurricane response workforce mobilization for pre-storm preparation and post-storm restoration.',
  keywords: ['hurricane response', 'hurricane workforce', 'storm preparation', 'hurricane recovery'],
};

const preStorm = [
  'Board-up and property protection crews',
  'Equipment and material staging',
  'Pre-positioning of response teams',
  'Emergency contact coordination',
  'Evacuation assistance if needed',
];

const postStorm = [
  'Immediate damage assessment teams',
  'Emergency repairs and stabilization',
  'Debris removal and site clearing',
  'Temporary power and utilities',
  'Full restoration coordination',
];

const trades = [
  { name: 'Damage Assessment', description: 'Structural inspectors and adjusters' },
  { name: 'Roofing', description: 'Emergency tarping and roof repairs' },
  { name: 'Electrical', description: 'Power restoration and temporary generators' },
  { name: 'Tree Service', description: 'Fallen tree removal and debris clearing' },
  { name: 'Water Mitigation', description: 'Water extraction and drying services' },
  { name: 'General Contractors', description: 'Full reconstruction and restoration' },
];

export default function HurricaneResponsePage() {
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
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hurricane Response Workforce
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Comprehensive workforce mobilization for all phases of hurricane response, from pre-storm preparation to full restoration.
            </p>
            <Button size="lg" variant="default" className="bg-white text-red-700 hover:bg-red-50" asChild>
              <Link href="/storm-center/crew-deployment">
                Request Hurricane Crews
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
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Hurricane Response Workforce Center provides comprehensive crew mobilization for all phases of hurricane events. We coordinate pre-storm preparation teams and rapidly deploy post-storm restoration crews throughout the Gulf Coast region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Pre-Storm Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {preStorm.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">Post-Storm Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {postStorm.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Trades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {trades.map((trade, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-red-700" />
                      <CardTitle className="text-lg">{trade.name}</CardTitle>
                    </div>
                    <p className="text-sm text-gray-600">{trade.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience You Can Trust</h3>
              <p className="text-gray-700 mb-4">
                Our team has coordinated workforce response for major hurricanes including Harvey (2017), Ike (2008), and Rita (2005). We understand the unique challenges of hurricane recovery and have proven systems for rapid crew mobilization.
              </p>
              <p className="text-gray-700">
                Available 24/7 during hurricane events. Contact our emergency coordination center for immediate assistance.
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
              Need Hurricane Response Crews?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us now for pre-storm preparation or post-storm restoration workforce
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/storm-center/crew-deployment">
                  Request Crews
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
