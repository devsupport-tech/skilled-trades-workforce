import { Metadata } from 'next';
import Link from 'next/link';
import {
  Accessibility,
  Eye,
  Keyboard,
  Monitor,
  Volume2,
  FileText,
  Mail,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Skilled Trades Workforce Staffing',
  description: 'Our commitment to digital accessibility and ensuring our services are available to everyone.',
  keywords: ['accessibility', 'WCAG', 'ADA compliance', 'web accessibility'],
};

const commitments = [
  {
    icon: Eye,
    title: 'Visual Accessibility',
    features: [
      'High contrast color schemes',
      'Scalable text (up to 200% without loss of functionality)',
      'Clear, readable fonts',
      'Alternative text for images',
      'Color is not the only means of conveying information',
    ],
  },
  {
    icon: Keyboard,
    title: 'Keyboard Navigation',
    features: [
      'All functionality available via keyboard',
      'Logical tab order throughout pages',
      'Visible focus indicators',
      'Skip navigation links',
      'No keyboard traps',
    ],
  },
  {
    icon: Volume2,
    title: 'Screen Reader Support',
    features: [
      'Semantic HTML structure',
      'ARIA labels and descriptions',
      'Properly labeled form fields',
      'Descriptive headings and landmarks',
      'Meaningful link text',
    ],
  },
  {
    icon: Monitor,
    title: 'Responsive Design',
    features: [
      'Mobile-friendly layouts',
      'Touch-friendly interface elements',
      'Consistent navigation across devices',
      'Readable content at various zoom levels',
      'Portrait and landscape orientation support',
    ],
  },
];

const standards = [
  {
    title: 'WCAG 2.1 Level AA',
    description: 'We strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.',
  },
  {
    title: 'ADA Compliance',
    description: 'We are committed to compliance with the Americans with Disabilities Act (ADA).',
  },
  {
    title: 'Section 508',
    description: 'Our digital content aims to meet Section 508 standards for federal accessibility.',
  },
];

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Accessibility className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accessibility Statement
            </h1>
            <p className="text-xl text-blue-100">
              We are committed to ensuring digital accessibility for people with disabilities.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Skilled Trades Workforce is committed to ensuring that our website and services are accessible to all individuals, including those with disabilities. We believe everyone deserves equal access to employment opportunities and staffing services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.
              </p>
            </div>

            {/* Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Standards and Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {standards.map((standard, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-gray-900">{standard.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {commitments.map((commitment, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <commitment.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {commitment.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {commitment.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Assistive Technologies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compatible Assistive Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Screen Readers</h3>
                  <p className="text-sm text-gray-700">JAWS, NVDA, VoiceOver, TalkBack</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Speech Recognition</h3>
                  <p className="text-sm text-gray-700">Dragon NaturallySpeaking, Windows Speech Recognition</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Screen Magnification</h3>
                  <p className="text-sm text-gray-700">ZoomText, browser zoom features</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Alternative Input</h3>
                  <p className="text-sm text-gray-700">Keyboard navigation, switch devices</p>
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Known Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite our best efforts to ensure accessibility, there may be some limitations. Below are known issues we are working to address:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Some PDF documents may not be fully accessible. We are working to provide accessible alternatives for all documents.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Third-party content or embedded widgets may not meet our accessibility standards. We are working with vendors to improve this.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Older content may not fully comply with current standards. We are systematically reviewing and updating legacy content.
                  </p>
                </li>
              </ul>
            </div>

            {/* Feedback */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Feedback and Contact</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      We Welcome Your Feedback
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We are committed to continuous improvement of our accessibility. If you encounter any accessibility barriers on our website or have suggestions for improvement, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:accessibility@example.com" className="text-blue-600 hover:text-blue-700">
                          accessibility@example.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700">
                          (XXX) XXX-XXXX
                        </a>
                      </p>
                      <p className="text-sm mt-4">
                        We aim to respond to accessibility feedback within 2 business days and will work with you to provide the information or service you need through an alternative method.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Formats */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Formats</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you need information from our website in a different format, please contact us. We can provide:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessible Documents</h4>
                    <p className="text-sm text-gray-700">Plain text, large print, or accessible PDF formats</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Volume2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Audio Description</h4>
                    <p className="text-sm text-gray-700">Verbal explanations for visual content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personal Assistance</h4>
                    <p className="text-sm text-gray-700">Direct support from our team via phone or email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">In-Person Support</h4>
                    <p className="text-sm text-gray-700">Office visits with accessibility accommodations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ongoing Efforts */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Accessibility Efforts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to maintaining and improving the accessibility of our website. Our ongoing efforts include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regular accessibility audits and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Staff training on accessibility best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">User testing with assistive technology users</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Continuous monitoring and remediation of accessibility issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Incorporation of accessibility into our development process</span>
                </li>
              </ul>
            </div>

            {/* Related Links */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Legal Documents</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Privacy Policy →
                </Link>
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service →
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
