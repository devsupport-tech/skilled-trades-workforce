import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, FileText, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Administrative & Clerical Staffing | Office Support',
  description: 'Find administrative assistants, receptionists, data entry clerks, and office support staff. Temporary, temp-to-hire, and direct hire office positions.',
  keywords: ['administrative staffing', 'clerical jobs', 'receptionist', 'office assistant', 'data entry', 'executive assistant'],
};

const commonPositions = [
  { title: 'Administrative Assistants', icon: FileText },
  { title: 'Executive Assistants', icon: FileText },
  { title: 'Receptionists', icon: Users },
  { title: 'Data Entry Clerks', icon: FileText },
  { title: 'Office Managers', icon: Users },
  { title: 'Customer Service Reps', icon: Users },
  { title: 'Scheduling Coordinators', icon: FileText },
  { title: 'Billing Clerks', icon: FileText },
  { title: 'File Clerks', icon: FileText },
  { title: 'Mail Room Clerks', icon: FileText },
  { title: 'Virtual Assistants', icon: FileText },
  { title: 'Office Coordinators', icon: Users },
];

const skills = [
  'Microsoft Office Suite proficiency',
  'Data entry accuracy and speed',
  'Professional phone etiquette',
  'Scheduling and calendar management',
  'Email correspondence',
  'Customer service experience',
  'Multi-line phone systems',
  'Filing and record keeping',
];

const benefits = [
  'Pre-screened for office skills',
  'Microsoft Office proficiency tested',
  'Background checks completed',
  'Professional appearance and demeanor',
  'Strong communication skills',
  'Fast placement for urgent needs',
  'Temp-to-hire options available',
  'Remote work capabilities when needed',
];

export default function AdministrativeC lericalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Administrative & Clerical Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find professional administrative assistants, receptionists, and office support staff who can start immediately and keep your office running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Office Staff
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Office Jobs</Link>
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
              Office Positions We Fill
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
              Verified Office Skills
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              All administrative candidates are assessed for essential office skills
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
              Why Choose Our Office Staffing?
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vacation & Leave Coverage</h3>
                <p className="text-gray-600 text-sm">Keep your front desk and administrative functions running during employee absences</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Projects</h3>
                <p className="text-gray-600 text-sm">Add support for data entry projects, mailings, event coordination, and other time-limited tasks</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Try Before You Hire</h3>
                <p className="text-gray-600 text-sm">Use temp-to-hire to evaluate office staff before making a permanent commitment</p>
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
              Need Remote Administrative Support?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Many administrative positions can be performed remotely. We staff virtual assistants, remote customer service reps, and work-from-home administrative professionals.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/staffing-services/remote-staffing">
                Learn About Remote Staffing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Keep Your Office Running Smoothly"
        description="From receptionists to executive assistants, we provide professional office staff who make a great first impression."
        primaryCTA={{
          label: 'Request Office Staff',
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
