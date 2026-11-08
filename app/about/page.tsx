import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import {
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Heart,
  Handshake,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Skilled Trades Workforce Staffing',
  description: 'Learn about our staffing company, our mission to connect skilled workers with great employers, and our commitment to the Greater Houston community.',
  keywords: ['about us', 'staffing company', 'Houston staffing', 'staffing agency', 'our mission'],
};

const values = [
  {
    title: 'Integrity',
    description: 'We do what we say we will do. Honest communication, transparent pricing, and ethical practices guide every decision.',
    icon: Shield,
  },
  {
    title: 'Quality',
    description: 'We thoroughly screen every candidate and match them with positions where they can succeed. Our reputation depends on placements that work.',
    icon: Award,
  },
  {
    title: 'Partnership',
    description: 'We are not just a vendor - we are your staffing partner. We learn your business, understand your needs, and deliver solutions.',
    icon: Handshake,
  },
  {
    title: 'Community',
    description: 'We are committed to the Greater Houston area. By connecting local talent with local opportunities, we strengthen our community.',
    icon: Heart,
  },
];

const whyChooseUs = [
  'Pre-screened, qualified candidates ready to work',
  'Fast placement - often within 24-48 hours',
  'Dedicated recruiters who understand your industry',
  'Flexible staffing options to fit your needs',
  'Comprehensive background checks and drug screening',
  'Workers comp and payroll administration handled',
  'Local expertise with Greater Houston focus',
  'Responsive support when you need it',
];

const services = [
  { title: 'Temporary Staffing', description: 'Quick-fill positions from one day to several months' },
  { title: 'Temp-to-Hire', description: 'Try before you hire with evaluation periods' },
  { title: 'Direct Hire', description: 'Permanent placement recruiting' },
  { title: 'Contract Staffing', description: 'Project-based contractor placement' },
  { title: 'Professional Recruiting', description: 'White-collar and specialized roles' },
  { title: 'Storm Response', description: 'Disaster recovery workforce mobilization' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Skilled Trades Workforce
            </h1>
            <p className="text-xl text-blue-100">
              Connecting skilled workers with great employers throughout Greater Houston and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Skilled Trades Workforce was founded with a simple mission: connect qualified workers with employers who need them, and do it with integrity, speed, and professionalism.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We started by serving construction and skilled trades companies in the Greater Houston area, helping them find electricians, plumbers, HVAC technicians, and other skilled workers. As we grew, we expanded into warehouse and logistics, manufacturing, administrative staffing, and professional recruiting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Today, we serve employers across multiple industries with temporary, temp-to-hire, and direct hire staffing solutions. We\\'ve also become a trusted partner for storm response and disaster recovery, mobilizing crews quickly when hurricanes and other emergencies strike.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through it all, our commitment remains the same: provide quality candidates, responsive service, and staffing solutions that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We\\'re guided by core values that shape how we serve employers and job seekers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To connect skilled workers with employers who need them, providing quality staffing solutions that help businesses succeed and workers build careers. We\\'re committed to serving our community through ethical practices, responsive service, and placements that work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Employers & Job Seekers Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Staffing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/staffing-services" className="text-blue-600 font-semibold hover:text-blue-700">
                View All Staffing Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Where We Serve
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We\\'re based in the Greater Houston area and serve employers and job seekers throughout the Houston metropolitan region, including Houston, Katy, Sugar Land, The Woodlands, Pearland, Pasadena, League City, and surrounding communities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For storm response and disaster recovery, we mobilize crews throughout Texas and across the Gulf Coast region, providing rapid workforce deployment when hurricanes and other emergencies strike.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some of our professional and remote staffing services are available nationwide. Contact us to discuss your specific location and staffing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Construction & Skilled Trades',
                'Restoration & Disaster Recovery',
                'Warehouse & Logistics',
                'Manufacturing & Production',
                'Administrative & Clerical',
                'Transportation & Drivers',
                'Accounting & Finance',
                'Human Resources',
                'Customer Service',
                'Healthcare Support',
                'Professional & Technology',
                'And Many More...',
              ].map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-gray-900 text-center">{industry}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/industries" className="text-blue-600 font-semibold hover:text-blue-700">
                View All Industries →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you\\'re an employer seeking workers or a job seeker looking for opportunities, we\\'re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/employers/request-workers">
                  Employers: Request Workers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/apply">Job Seekers: Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Have Questions?"
        description="Contact us to learn more about our staffing services or to discuss your specific needs."
        primaryCTA={{
          label: 'Contact Us',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'View Open Jobs',
          href: '/jobs',
        }}
        variant="gradient"
      />
    </>
  );
}
