import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Users, Target, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Direct Hire Placement | Permanent Staffing Solutions',
  description: 'Find top talent for permanent positions. Our recruiters handle sourcing, screening, and presenting qualified candidates for your direct-hire needs.',
  keywords: ['direct hire', 'permanent placement', 'recruitment services', 'executive search', 'talent acquisition'],
};

const benefits = [
  'Access to passive candidates not actively job searching',
  'Extensive screening and skills assessment',
  'Pre-qualified candidates save you time',
  'Replacement guarantee for peace of mind',
  'Specialized recruiters by industry',
  'Competitive fee structure',
  'Confidential searches available',
  'Fast turnaround on critical positions',
];

const idealFor = [
  {
    title: 'Leadership Positions',
    description: 'Find experienced leaders and managers for your team',
    icon: Target,
  },
  {
    title: 'Specialized Skills',
    description: 'Recruit hard-to-find technical or niche expertise',
    icon: Users,
  },
  {
    title: 'Growth Hiring',
    description: 'Build your team quickly without internal recruiting resources',
    icon: Clock,
  },
];

export default function DirectHirePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Direct Hire Placement Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find top talent for permanent positions. We handle the entire recruitment process so you can focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Start Your Search
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Direct Hire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Direct Hire Placement?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Direct hire placement is a traditional recruiting service where we find qualified candidates for your permanent, full-time positions. Unlike temp or temp-to-hire arrangements, candidates are hired directly onto your payroll from day one.
              </p>
              <p>
                Our recruiters act as an extension of your HR team, handling everything from job posting and candidate sourcing to screening, interviewing, and reference checks. We present only the most qualified candidates who match your requirements and company culture.
              </p>
              <p>
                Direct hire is ideal for positions that require specialized skills, leadership roles, or when you need to build your team quickly without dedicating internal resources to full-cycle recruiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Direct Hire?
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

      {/* Ideal For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Direct Hire is Ideal For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {idealFor.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Direct Hire Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Discovery & Strategy',
                  description: 'We learn about your company culture, position requirements, and ideal candidate profile.',
                },
                {
                  step: 2,
                  title: 'Sourcing & Recruiting',
                  description: 'Our recruiters tap into multiple channels to find active and passive candidates with the right skills and experience.',
                },
                {
                  step: 3,
                  title: 'Screening & Assessment',
                  description: 'We conduct initial interviews, skills assessments, and background checks to qualify candidates.',
                },
                {
                  step: 4,
                  title: 'Candidate Presentation',
                  description: 'We present detailed profiles of top candidates who meet your requirements.',
                },
                {
                  step: 5,
                  title: 'Interview Coordination',
                  description: 'We schedule interviews and gather feedback from both you and the candidates.',
                },
                {
                  step: 6,
                  title: 'Offer & Onboarding Support',
                  description: 'We assist with offer negotiation and ensure smooth transition to your team.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
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

      {/* Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Guarantee
            </h2>
            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Replacement Guarantee
              </h3>
              <p className="text-gray-700 mb-4">
                We stand behind the quality of our placements. If a direct hire candidate doesn't work out within the guarantee period, we'll find a replacement at no additional fee.
              </p>
              <p className="text-gray-700">
                Our goal is your long-term success, not just filling a position. We're committed to finding candidates who will thrive in your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Find Your Next Star Employee?"
        description="Let our experienced recruiters handle the search while you focus on running your business."
        primaryCTA={{
          label: 'Start Your Search',
          href: '/employers/request-workers',
        }}
        secondaryCTA={{
          label: 'Contact Us',
          href: '/contact',
        }}
        variant="gradient"
      />
    </>
  );
}
