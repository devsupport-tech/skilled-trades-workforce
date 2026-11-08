import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import { CheckCircle, Calculator, DollarSign, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accounting & Finance Staffing | CPAs, Bookkeepers, Financial Analysts',
  description: 'Find qualified accountants, bookkeepers, financial analysts, and payroll specialists. Temporary, temp-to-hire, and direct hire accounting positions.',
  keywords: ['accounting staffing', 'CPA jobs', 'bookkeeper', 'financial analyst', 'payroll specialist', 'accounting temp'],
};

const commonPositions = [
  { title: 'Accountants', icon: Calculator },
  { title: 'CPAs', icon: Calculator },
  { title: 'Bookkeepers', icon: DollarSign },
  { title: 'Financial Analysts', icon: Calculator },
  { title: 'Payroll Specialists', icon: DollarSign },
  { title: 'AP/AR Clerks', icon: DollarSign },
  { title: 'Controllers', icon: Calculator },
  { title: 'CFOs', icon: Calculator },
  { title: 'Tax Specialists', icon: DollarSign },
  { title: 'Auditors', icon: Calculator },
  { title: 'Cost Accountants', icon: DollarSign },
  { title: 'Financial Managers', icon: Calculator },
];

const skills = [
  'QuickBooks, Sage, Xero proficiency',
  'Excel advanced functions and pivot tables',
  'GAAP and financial reporting',
  'Bank reconciliation experience',
  'General ledger maintenance',
  'Month-end and year-end close procedures',
  'Accounts payable and receivable',
  'Financial statement preparation',
];

const benefits = [
  'Pre-screened accounting professionals',
  'Software proficiency testing (QuickBooks, Excel, etc.)',
  'CPA and certification verification',
  'Background checks completed',
  'References checked and validated',
  'Fast placement for busy seasons',
  'Temp-to-hire evaluation periods',
  'Confidentiality and professionalism guaranteed',
];

export default function AccountingFinancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting & Finance Staffing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find qualified accountants, CPAs, bookkeepers, and financial professionals for temporary, temp-to-hire, and direct hire positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/employers/request-workers">
                  Request Accounting Staff
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Find Accounting Jobs</Link>
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
              Accounting & Finance Positions We Fill
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
              Verified Accounting Skills
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              All accounting candidates are assessed for essential financial and software skills
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
              Why Choose Our Accounting Staffing?
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
              Perfect For Busy Seasons & Special Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax Season Support</h3>
                <p className="text-gray-600 text-sm">Add accountants and bookkeepers for busy tax seasons without permanent headcount</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Year-End Close</h3>
                <p className="text-gray-600 text-sm">Extra support for month-end close, year-end audits, and financial reporting</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">System Implementations</h3>
                <p className="text-gray-600 text-sm">Temporary help during ERP migrations, software upgrades, or process changes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience with Leading Accounting Software
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our accounting professionals have experience with popular accounting and ERP systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['QuickBooks', 'Sage', 'Xero', 'NetSuite', 'SAP', 'Oracle Financials', 'Microsoft Dynamics', 'FreshBooks'].map((software, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-medium text-gray-900 text-sm">{software}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Keep Your Books Balanced"
        description="From bookkeepers to CPAs, we provide qualified accounting professionals who handle your financials with accuracy and confidentiality."
        primaryCTA={{
          label: 'Request Accounting Staff',
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
