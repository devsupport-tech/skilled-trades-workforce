import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import {
  Cloud,
  Users,
  Truck,
  Wrench,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  AlertTriangle,
  Home,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'National Storm Response Workforce Center | Hurricane & Disaster Recovery Staffing',
  description: 'Rapid workforce mobilization for hurricane and disaster recovery. 24/7 emergency deployment of restoration crews, contractors, and equipment across the Gulf Coast.',
  keywords: ['storm response', 'hurricane recovery', 'disaster staffing', 'emergency crews', 'restoration workforce'],
};

const capabilities = [
  {
    title: 'Rapid Crew Deployment',
    description: 'Mobilize qualified restoration crews within 24-48 hours of disaster declaration',
    icon: Users,
  },
  {
    title: '24/7 Emergency Response',
    description: 'Round-the-clock coordination center for urgent workforce needs during disasters',
    icon: Clock,
  },
  {
    title: 'Pre-Vetted Contractors',
    description: 'Database of licensed, insured contractors ready for immediate deployment',
    icon: Shield,
  },
  {
    title: 'Equipment Coordination',
    description: 'Connect contractors with necessary equipment, vehicles, and supplies',
    icon: Truck,
  },
  {
    title: 'Housing & Logistics',
    description: 'Arrange crew housing, transportation, and on-site logistics',
    icon: Home,
  },
  {
    title: 'Multi-Trade Coverage',
    description: 'Electricians, plumbers, roofers, tree service, general labor, and more',
    icon: Wrench,
  },
];

const services = [
  {
    title: 'Hurricane Response',
    description: 'Pre-storm preparation and post-storm restoration workforce',
    href: '/storm-center/hurricane-response',
    icon: Cloud,
  },
  {
    title: 'Emergency Restoration',
    description: 'Damage assessment, debris removal, temporary repairs',
    href: '/storm-center/emergency-restoration',
    icon: AlertTriangle,
  },
  {
    title: 'Roofing & Tarping',
    description: 'Emergency roof repairs and tarping services',
    href: '/storm-center/roofing-tarping',
    icon: Home,
  },
  {
    title: 'Electrical Restoration',
    description: 'Power restoration and emergency electrical services',
    href: '/storm-center/electrical-restoration',
    icon: Zap,
  },
  {
    title: 'Tree Service & Debris',
    description: 'Tree removal, debris cleanup, and site clearing',
    href: '/storm-center/tree-debris',
    icon: Wrench,
  },
  {
    title: 'Water Damage & Mitigation',
    description: 'Water extraction, drying, and mitigation services',
    href: '/storm-center/water-mitigation',
    icon: Cloud,
  },
  {
    title: 'Contractor Coordination',
    description: 'General contractors and project management',
    href: '/storm-center/contractor-coordination',
    icon: Users,
  },
  {
    title: 'Equipment & Resources',
    description: 'Tools, vehicles, and equipment sourcing',
    href: '/storm-center/equipment-resources',
    icon: Truck,
  },
];

const regions = [
  'Texas Gulf Coast',
  'Louisiana',
  'Mississippi Gulf Coast',
  'Alabama Coast',
  'Florida Panhandle',
  'Greater Houston Metro',
  'Corpus Christi Area',
  'Beaumont/Port Arthur',
];

const whyChoose = [
  'Rapid mobilization (24-48 hours)',
  'Pre-vetted, licensed contractors',
  'Multi-state coverage across Gulf Coast',
  '24/7 emergency coordination',
  'Experience with major hurricanes (Harvey, Ike, Rita)',
  'Insurance claim documentation support',
  'Equipment and housing logistics',
  'Safety compliance and training',
];

export default function StormCenterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              National Storm Response Workforce Center
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Rapid mobilization of qualified restoration crews for hurricane and disaster recovery across the Gulf Coast. Available 24/7 for emergency deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-red-700 hover:bg-red-50" asChild>
                <Link href="/storm-center/crew-deployment">
                  Request Crews Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/storm-center/contractor-registration">
                  Register as Contractor
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-red-100">
              <Phone className="h-5 w-5" />
              <span className="text-lg">
                Emergency Line: <a href="tel:+1234567890" className="font-bold hover:text-white">(XXX) XXX-XXXX</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Storm Response Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <capability.icon className="h-6 w-6 text-red-700" />
                    </div>
                    <CardTitle className="text-lg mb-2">{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Storm Response Services
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive disaster recovery workforce solutions across all restoration trades
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-red-700" />
                    </div>
                    <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={service.href}
                      className="text-red-700 hover:text-red-800 font-medium text-sm inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Storm Response Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChoose.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Storm Response Coverage Area
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              We mobilize crews throughout the Gulf Coast region and beyond for major disaster events
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p className="font-medium text-gray-900">{region}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              Plus rapid deployment to disaster areas nationwide as needed
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How Storm Response Works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Request Crews',
                  description: 'Contact our 24/7 emergency line or submit an online request describing your needs, location, and urgency.',
                },
                {
                  step: 2,
                  title: 'We Mobilize',
                  description: 'Our coordinators immediately begin sourcing qualified contractors and crews from our pre-vetted database.',
                },
                {
                  step: 3,
                  title: 'Rapid Deployment',
                  description: 'Crews are deployed within 24-48 hours with necessary equipment, housing, and logistics arranged.',
                },
                {
                  step: 4,
                  title: 'Ongoing Support',
                  description: 'Our team provides continuous coordination, additional crews as needed, and documentation support.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Need Storm Response Crews?"
        description="Contact our 24/7 emergency coordination center for immediate assistance with disaster recovery workforce."
        primaryCTA={{
          label: 'Request Crews Now',
          href: '/storm-center/crew-deployment',
        }}
        secondaryCTA={{
          label: 'Register as Contractor',
          href: '/storm-center/contractor-registration',
        }}
        variant="gradient"
      />
    </>
  );
}
