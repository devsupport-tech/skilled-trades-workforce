import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertCircle, Scale, Shield, UserX, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Skilled Trades Workforce Staffing',
  description: 'Terms and conditions governing the use of our staffing and recruiting services.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement'],
};

const sections = [
  {
    icon: FileCheck,
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using the services provided by Skilled Trades Workforce, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      '',
      'These terms apply to all users of our services, including job seekers, employers, and visitors to our website.',
    ],
  },
  {
    icon: UserX,
    title: 'User Responsibilities',
    content: [
      'Job Seekers agree to:',
      '• Provide accurate and truthful information',
      '• Keep profile information current and up-to-date',
      '• Respond professionally to employer contacts',
      '• Notify us of any changes to availability or qualifications',
      '• Honor commitments to interviews and job placements',
      '',
      'Employers agree to:',
      '• Provide accurate job descriptions and requirements',
      '• Comply with all employment laws and regulations',
      '• Provide a safe and legal work environment',
      '• Pay agreed-upon staffing fees on time',
      '• Notify us of placement issues or changes promptly',
    ],
  },
  {
    icon: Shield,
    title: 'Service Description',
    content: [
      'We provide staffing and recruiting services including:',
      '• Temporary staffing placement',
      '• Temp-to-hire placement',
      '• Direct hire recruitment',
      '• Contract staffing',
      '• Storm response workforce mobilization',
      '',
      'We make reasonable efforts to match qualified candidates with suitable positions, but we do not guarantee employment outcomes or job placement.',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Background Checks and Screening',
    content: [
      'We may conduct background checks, drug screenings, license verifications, and reference checks as part of our candidate screening process.',
      '',
      'Job seekers authorize us to conduct these checks by using our services. Employers may request specific screening requirements.',
      '',
      'All screening is conducted in compliance with the Fair Credit Reporting Act (FCRA) and applicable state laws.',
    ],
  },
  {
    icon: Scale,
    title: 'Fees and Payment',
    content: [
      'Our services are free for job seekers. We are compensated by employers for successful placements.',
      '',
      'Employer fees are based on placement type:',
      '• Temporary staffing: Hourly bill rate',
      '• Temp-to-hire: Hourly bill rate plus conversion fee',
      '• Direct hire: Percentage of annual salary',
      '',
      'Specific fees are outlined in individual client agreements. Payment terms are typically net 15-30 days.',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              These terms govern your use of our staffing and recruiting services.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last Updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to Skilled Trades Workforce. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Skilled Trades Workforce regarding your use of our staffing and recruiting services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Please read these Terms carefully before using our services. By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="mt-12 space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Skilled Trades Workforce or its content suppliers and is protected by copyright and intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We provide staffing services on an &quot;as is&quot; basis. While we make reasonable efforts to screen candidates and verify qualifications, we do not guarantee employment outcomes or workplace safety.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  To the maximum extent permitted by law, Skilled Trades Workforce shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability for any claims related to our services shall not exceed the fees paid by the employer for the specific placement in question.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless Skilled Trades Workforce from any claims, damages, losses, liabilities, and expenses (including attorneys\\' fees) arising from your use of our services, your violation of these Terms, or your violation of any rights of another person or entity.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, for any reason including:',
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or deceptive practices</li>
                  <li>Providing false or misleading information</li>
                  <li>Failure to honor commitments or agreements</li>
                  <li>Unprofessional or inappropriate conduct</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Arbitration shall take place in Houston, Texas. Each party shall bear its own costs and fees, except as otherwise provided by the arbitrator.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Equal Opportunity</h2>
                <p className="text-gray-700 leading-relaxed">
                  Skilled Trades Workforce is an equal opportunity employer and service provider. We do not discriminate on the basis of race, color, religion, sex, national origin, age, disability, veteran status, or any other protected characteristic.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:legal@example.com" className="text-blue-600 hover:text-blue-700">
                      legal@example.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700">
                      (XXX) XXX-XXXX
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> Greater Houston Area, Texas
                  </p>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Legal Documents</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Privacy Policy →
                </Link>
                <Link href="/accessibility" className="text-blue-600 hover:text-blue-700 font-medium">
                  Accessibility Statement →
                </Link>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
