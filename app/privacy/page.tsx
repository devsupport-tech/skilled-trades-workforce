import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, UserCheck, Database, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Skilled Trades Workforce Staffing',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use our staffing services.',
  keywords: ['privacy policy', 'data protection', 'personal information'],
};

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: [
      'When you use our services, we collect information you provide directly to us, including:',
      '• Personal identification information (name, email, phone number, address)',
      '• Employment information (work history, skills, certifications, licenses)',
      '• Background check information (with your consent)',
      '• Resume and professional documents',
      '• Communications between you and our recruiters',
      '• Information from employers about job performance and placements',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect to:',
      '• Match job seekers with suitable employment opportunities',
      '• Connect employers with qualified candidates',
      '• Process applications and placements',
      '• Communicate about job opportunities and services',
      '• Verify qualifications, licenses, and certifications',
      '• Conduct background checks (with your authorization)',
      '• Improve our services and user experience',
      '• Comply with legal obligations',
    ],
  },
  {
    icon: UserCheck,
    title: 'Information Sharing',
    content: [
      'We may share your information with:',
      '• Employers and hiring managers for job placement purposes',
      '• Background check providers (with your consent)',
      '• License and certification verification services',
      '• Service providers who assist our operations',
      '• Legal authorities when required by law',
      '',
      'We do not sell your personal information to third parties.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: [
      'We implement security measures to protect your information:',
      '• Encrypted data transmission (SSL/TLS)',
      '• Secure database storage with access controls',
      '• Regular security audits and updates',
      '• Employee training on data protection',
      '• Limited access to personal information',
      '',
      'While we strive to protect your data, no method of transmission or storage is 100% secure.',
    ],
  },
  {
    icon: Bell,
    title: 'Your Rights and Choices',
    content: [
      'You have the right to:',
      '• Access your personal information',
      '• Request corrections to inaccurate data',
      '• Request deletion of your information (subject to legal requirements)',
      '• Opt out of marketing communications',
      '• Withdraw consent for background checks',
      '',
      'To exercise these rights, contact us using the information below.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                Skilled Trades Workforce (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our staffing and recruiting services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Job seekers: We typically retain active candidate profiles for up to 2 years from your last interaction with us. Employers: We retain your information for the duration of our business relationship and as required by law.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children\\'s Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:privacy@example.com" className="text-blue-600 hover:text-blue-700">
                      privacy@example.com
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
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service →
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
