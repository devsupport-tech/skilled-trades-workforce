import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Heart, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Support Staffing | Medical Office & Administrative Staff',
  description: 'Find medical office staff, medical billing specialists, healthcare administrators, and non-clinical healthcare support positions.',
  keywords: ['healthcare staffing', 'medical office jobs', 'medical billing', 'healthcare administration', 'medical receptionist'],
};

const commonPositions = [
  { title: 'Medical Receptionists', icon: Heart },
  { title: 'Medical Billing Specialists', icon: FileText },
  { title: 'Medical Coding Specialists', icon: FileText },
  { title: 'Healthcare Administrators', icon: Heart },
  { title: 'Medical Records Clerks', icon: FileText },
  { title: 'Scheduling Coordinators', icon: Heart },
  { title: 'Patient Services Representatives', icon: Heart },
  { title: 'Insurance Verification Specialists', icon: FileText },
  { title: 'Medical Office Managers', icon: Heart },
  { title: 'Credentialing Specialists', icon: FileText },
  { title: 'Front Desk Coordinators', icon: Heart },
  { title: 'Revenue Cycle Analysts', icon: FileText },
];

const skills = [
  'Medical terminology knowledge',
  'HIPAA compliance and patient privacy',
  'EMR/EHR systems (Epic, Cerner, Allscripts)',
  'Medical billing and coding basics',
  'Insurance verification and authorization',
  'ICD-10 and CPT coding familiarity',
  'Professional phone manner and bedside manner',
  'Multi-line phone systems',
];

const benefits = [
  'Pre-screened for healthcare experience',
  'HIPAA training and compliance validated',
  'EMR/EHR system proficiency tested',
  'Medical terminology assessment',
  'Background checks completed',
  'Professional demeanor and patient focus',
  'Fast placement for urgent needs',
  'Temp-to-hire evaluation periods',
];

export default function HealthcareSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare Support Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find qualified medical office staff, medical billing specialists, and healthcare administrators for temporary, temp-to-hire, and direct hire positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Healthcare Staff
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Healthcare Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> We staff non-clinical healthcare support positions only.
              For clinical roles (nurses, medical assistants, etc.), please contact a licensed healthcare staffing agency.
            </p>
          </div>
        </div>
      </section>

      {/* Common Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Healthcare Support Positions We Fill
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
              Verified Healthcare Support Skills
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              All healthcare support candidates are assessed for medical office and administrative skills
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

      {/* HIPAA Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliance Guaranteed</h3>
                  <p className="text-gray-700 mb-4">
                    All healthcare support staff receive HIPAA training and understand patient privacy requirements.
                    We verify HIPAA knowledge during screening and provide refresher training as needed.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'HIPAA privacy and security rule training',
                      'Patient confidentiality practices',
                      'Proper handling of PHI (Protected Health Information)',
                      'Breach notification procedures',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Healthcare Support Staffing Solutions
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Common Staffing Scenarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Expansion</h3>
                <p className="text-gray-600 text-sm">Add front desk and billing staff when opening new locations or expanding hours</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leave Coverage</h3>
                <p className="text-gray-600 text-sm">Maintain operations during maternity leave, medical leave, or vacations</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing Backlogs</h3>
                <p className="text-gray-600 text-sm">Bring in specialists to clear billing backlogs, appeals, or AR recovery projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMR Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience with Leading EMR/EHR Systems
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our healthcare support staff have experience with popular electronic medical record systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Epic', 'Cerner', 'Allscripts', 'athenahealth', 'eClinicalWorks', 'Meditech', 'NextGen', 'Practice Fusion'].map((system, index) => (
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
        title="Keep Your Medical Office Running Smoothly"
        description="From front desk to billing, we provide HIPAA-compliant healthcare support staff who understand medical office operations."
        primaryCTA={{
          label: 'Request Healthcare Staff',
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
