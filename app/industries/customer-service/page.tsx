import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Headphones, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Service Staffing | Call Center Agents & Support Specialists',
  description: 'Find customer service reps, call center agents, technical support, and help desk professionals. Onsite and remote customer service staffing.',
  keywords: ['customer service staffing', 'call center jobs', 'customer support', 'help desk', 'technical support', 'remote customer service'],
};

const commonPositions = [
  { title: 'Customer Service Representatives', icon: Headphones },
  { title: 'Call Center Agents', icon: Phone },
  { title: 'Technical Support Specialists', icon: Headphones },
  { title: 'Help Desk Technicians', icon: Phone },
  { title: 'Customer Success Managers', icon: Headphones },
  { title: 'Client Services Coordinators', icon: Phone },
  { title: 'Contact Center Supervisors', icon: Headphones },
  { title: 'Live Chat Agents', icon: Phone },
  { title: 'Escalation Specialists', icon: Headphones },
  { title: 'Quality Assurance Analysts', icon: Phone },
  { title: 'Bilingual Customer Service', icon: Headphones },
  { title: 'Order Entry Specialists', icon: Phone },
];

const skills = [
  'Professional phone etiquette and communication',
  'CRM systems (Salesforce, Zendesk, HubSpot)',
  'Multi-line phone systems',
  'Problem-solving and conflict resolution',
  'Active listening and empathy',
  'Typing speed (45+ WPM typical)',
  'Email and chat support experience',
  'Product knowledge retention and training',
];

const benefits = [
  'Pre-screened for customer service skills',
  'Phone and communication assessments',
  'CRM platform experience validated',
  'Background checks completed',
  'Typing and computer proficiency tested',
  'Fast placement for seasonal surges',
  'Onsite and remote staffing options',
  'Bilingual candidates available (Spanish, etc.)',
];

export default function CustomerServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Service Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find professional customer service reps, call center agents, and support specialists for onsite or remote positions. Scale quickly for peak seasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Customer Service Staff
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Customer Service Jobs</Link>
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
              Customer Service Positions We Fill
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="h-5 w-5 text-blue-600" />
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

      {/* Skills Assessment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Verified Customer Service Skills
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              All customer service candidates are assessed for communication and technical skills
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{skill}</span>
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
              Customer Service Staffing Solutions
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

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Common Staffing Scenarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seasonal Call Volume</h3>
                <p className="text-gray-600 text-sm">Scale up during holiday seasons, product launches, or promotional campaigns</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Hours Coverage</h3>
                <p className="text-gray-600 text-sm">Add evening, weekend, or 24/7 support without permanent headcount increases</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project-Based Support</h3>
                <p className="text-gray-600 text-sm">Temporary teams for system upgrades, new product rollouts, or customer migrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Onsite and Remote Customer Service Staffing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide both onsite call center staffing and work-from-home customer service agents. All remote workers have quiet home offices, reliable internet, and proper equipment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Onsite Call Center Staffing</h3>
                <ul className="space-y-2">
                  {[
                    'Agents report to your facility',
                    'Direct supervision and monitoring',
                    'Team collaboration and training',
                    'No home office requirements',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Remote Customer Service</h3>
                <ul className="space-y-2">
                  {[
                    'Work-from-home arrangements',
                    'Lower overhead costs',
                    'Access to nationwide talent pool',
                    'Quiet home office and high-speed internet verified',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/staffing-services/remote-staffing">
                  Learn About Remote Staffing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience with Leading CRM Platforms
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our customer service reps have experience with popular CRM and help desk systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Salesforce', 'Zendesk', 'HubSpot', 'Freshdesk', 'Intercom', 'ServiceNow', 'Microsoft Dynamics', 'Zoho CRM'].map((system, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">{system}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Deliver Exceptional Customer Experiences"
        description="From call center agents to technical support, we provide professional customer service staff who represent your brand with courtesy and expertise."
        primaryCTA={{
          label: 'Request Customer Service Staff',
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
