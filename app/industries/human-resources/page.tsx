import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Users, UserCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Human Resources Staffing | HR Managers, Recruiters, Benefits Specialists',
  description: 'Find HR professionals including HR managers, recruiters, benefits administrators, and training coordinators. Temporary and permanent HR staffing.',
  keywords: ['HR staffing', 'human resources jobs', 'recruiter jobs', 'HR manager', 'benefits administrator', 'HR generalist'],
};

const commonPositions = [
  { title: 'HR Managers', icon: Users },
  { title: 'HR Generalists', icon: Users },
  { title: 'Recruiters', icon: UserCheck },
  { title: 'Benefits Administrators', icon: Users },
  { title: 'Payroll Administrators', icon: UserCheck },
  { title: 'HR Coordinators', icon: Users },
  { title: 'Training Coordinators', icon: UserCheck },
  { title: 'Compensation Analysts', icon: Users },
  { title: 'Employee Relations Specialists', icon: UserCheck },
  { title: 'HRIS Specialists', icon: Users },
  { title: 'Talent Acquisition Managers', icon: UserCheck },
  { title: 'HR Directors', icon: Users },
];

const skills = [
  'HRIS systems (Workday, ADP, UKG, BambooHR)',
  'Applicant tracking systems (ATS)',
  'Employment law and compliance knowledge',
  'Benefits administration experience',
  'Recruiting and interviewing skills',
  'Performance management processes',
  'Employee relations and conflict resolution',
  'Onboarding and training program development',
];

const benefits = [
  'Pre-screened HR professionals',
  'HRIS and ATS proficiency validated',
  'PHR/SPHR certification verification',
  'Background checks completed',
  'Confidentiality and discretion guaranteed',
  'Fast placement for urgent HR needs',
  'Temp-to-hire evaluation periods',
  'Experience across diverse industries',
];

export default function HumanResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Human Resources Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find qualified HR professionals including managers, recruiters, benefits specialists, and generalists for temporary, temp-to-hire, and direct hire positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request HR Professionals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find HR Jobs</Link>
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
              HR Positions We Fill
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
              Verified HR Skills & Experience
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              All HR candidates are assessed for essential human resources competencies
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
              Why Choose Our HR Staffing?
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
              Common HR Staffing Scenarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Growth Support</h3>
                <p className="text-gray-600 text-sm">Scale your HR team during company expansion, mergers, or high-volume hiring periods</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leave Coverage</h3>
                <p className="text-gray-600 text-sm">Maintain HR operations during parental leave, medical leave, or vacations</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Projects</h3>
                <p className="text-gray-600 text-sm">Bring in expertise for open enrollment, system implementations, or compliance initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HRIS Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience with Leading HRIS Platforms
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our HR professionals have experience with popular HRIS and talent management systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Workday', 'ADP Workforce Now', 'UKG (Ultimate Kronos)', 'BambooHR', 'Paycom', 'Paycor', 'TriNet', 'Greenhouse'].map((system, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">{system}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Build a Stronger HR Team"
        description="From HR generalists to specialized roles, we provide experienced professionals who understand compliance, employee relations, and strategic HR."
        primaryCTA={{
          label: 'Request HR Professionals',
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
