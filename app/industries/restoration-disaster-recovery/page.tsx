import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, AlertTriangle, Droplets, Wind, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Restoration & Disaster Recovery Staffing | Emergency Response Teams',
  description: 'Find experienced restoration workers and disaster recovery crews. Water damage restoration, fire restoration, mold remediation, emergency response teams.',
  keywords: ['restoration staffing', 'disaster recovery', 'emergency response', 'water damage restoration', 'fire restoration', 'mold remediation'],
};

const commonPositions = [
  { title: 'Water Damage Technicians', icon: Droplets },
  { title: 'Fire Restoration Specialists', icon: AlertTriangle },
  { title: 'Mold Remediation Technicians', icon: Wind },
  { title: 'Emergency Response Crew Leaders', icon: AlertTriangle },
  { title: 'Contents Restoration Specialists', icon: AlertTriangle },
  { title: 'Structural Drying Technicians', icon: Droplets },
  { title: 'Demolition Workers', icon: AlertTriangle },
  { title: 'Reconstruction Carpenters', icon: AlertTriangle },
  { title: 'HVAC Restoration Techs', icon: Wind },
  { title: 'Packout Specialists', icon: AlertTriangle },
  { title: 'Biohazard Cleanup Technicians', icon: AlertTriangle },
  { title: 'Project Managers', icon: AlertTriangle },
];

const certifications = [
  'IICRC Water Damage Restoration',
  'IICRC Fire & Smoke Restoration',
  'IICRC Mold Remediation',
  'OSHA 10/30 Hour',
  'Lead-Safe Certification',
  'Asbestos Awareness',
  'Bloodborne Pathogens',
  'Hazmat Awareness',
];

const benefits = [
  'Pre-screened with verified certifications',
  'Background checks and drug screening',
  'IICRC and OSHA certifications validated',
  'Experience with major restoration companies',
  'Available for emergency call-outs',
  'Workers\' comp and liability coverage',
  'Fast placement for urgent projects',
  'Storm response deployment capability',
];

export default function RestorationDisasterRecoveryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restoration & Disaster Recovery Staffing
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Connect with certified restoration technicians and emergency response crews ready to deploy 24/7. From water damage to fire restoration, we staff your critical projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Restoration Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/storm-center">Storm Response Center</Link>
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
              Restoration Positions We Fill
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="h-5 w-5 text-orange-600" />
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

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Verified Certifications
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              All restoration workers are screened for industry-required certifications and ongoing training
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
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
              Why Restoration Companies Choose Us
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

      {/* Emergency Response */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              24/7 Emergency Response Capability
            </h2>
            <div className="bg-white rounded-lg p-8 border border-orange-200">
              <p className="text-gray-700 mb-4">
                Restoration emergencies don\'t wait for business hours. Our workers understand the urgency of water damage, fire restoration, and disaster recovery projects. We maintain a network of workers ready for:
              </p>
              <ul className="space-y-2">
                {[
                  'Emergency call-outs and after-hours response',
                  'Multi-day disaster deployments',
                  'Storm response and catastrophic events',
                  'Large-loss commercial projects',
                  'Rapid crew scaling for major events',
                  'Nationwide deployment for disasters',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Response */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Storm Response Crews?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Visit our Storm Response Workforce Center to request complete restoration crews for disaster deployment anywhere in the United States.
            </p>
            <Button size="lg" variant="default" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/storm-center">
                Storm Response Center
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Staff Your Restoration Projects?"
        description="From emergency response to reconstruction, we provide certified restoration technicians when you need them most."
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
