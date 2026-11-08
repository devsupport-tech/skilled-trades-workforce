import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CTABand } from '@/components/sections/CTABand';
import {
  CheckCircle,
  Clock,
  Users,
  Shield,
  DollarSign,
  Briefcase,
  ArrowRight,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find Your Next Job | Job Seekers & Candidates',
  description: 'Search thousands of open positions across construction, warehouse, office, and professional roles. Free resume help, career guidance, and fast placement.',
  keywords: ['job search', 'find a job', 'career opportunities', 'employment', 'hiring now', 'apply for jobs'],
};

const benefits = [
  {
    title: 'Diverse Job Opportunities',
    description: 'Access positions across construction, warehouse, office, professional, and more',
    icon: Briefcase,
  },
  {
    title: 'Fast Placement',
    description: 'Get matched with opportunities quickly and start earning sooner',
    icon: Clock,
  },
  {
    title: 'Career Support',
    description: 'Resume help, interview prep, and career guidance at no cost to you',
    icon: FileText,
  },
  {
    title: 'Flexible Options',
    description: 'Choose from temporary, temp-to-hire, permanent, contract, or remote work',
    icon: Users,
  },
  {
    title: 'Competitive Pay',
    description: 'Access to positions with competitive wages and benefits packages',
    icon: DollarSign,
  },
  {
    title: 'No Fees Ever',
    description: 'Our services are 100% free for job seekers - we\'re paid by employers',
    icon: Shield,
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Register with Us',
    description: 'Complete our quick registration form. Tell us about your skills, experience, and what you\'re looking for.',
  },
  {
    step: 2,
    title: 'We Match You',
    description: 'Our recruiters review your profile and match you with open positions that fit your skills and preferences.',
  },
  {
    step: 3,
    title: 'Interview & Evaluate',
    description: 'We set up interviews with employers. You decide which opportunities are right for you.',
  },
  {
    step: 4,
    title: 'Start Your New Job',
    description: 'Accept the position and start working. We handle all the paperwork and onboarding.',
  },
];

const jobTypes = [
  {
    title: 'Temporary Jobs',
    description: 'Short-term assignments to earn income between permanent jobs or during busy seasons',
    href: '/staffing-services/temporary-staffing',
    icon: Clock,
  },
  {
    title: 'Temp-to-Hire',
    description: 'Try out a position before committing. Show your value and transition to permanent',
    href: '/staffing-services/temp-to-hire',
    icon: Users,
  },
  {
    title: 'Direct Hire',
    description: 'Immediate permanent positions with full benefits and job security',
    href: '/staffing-services/direct-hire',
    icon: Briefcase,
  },
];

export default function JobSeekersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Next Job
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Thousands of open positions across construction, warehouse, office, professional, and specialized roles. Register once and get matched with opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/apply">
                  Register & Apply
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/jobs">Browse All Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            <div className="space-y-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/apply">
                  Get Started - Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Types of Positions Available
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Choose the work arrangement that fits your needs and career goals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobTypes.map((type, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <type.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={type.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/jobs" className="text-blue-600 font-semibold hover:text-blue-700">
                Browse All Open Positions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Popular Job Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Construction & Skilled Trades',
                'Warehouse & Logistics',
                'Administrative & Clerical',
                'Manufacturing & Production',
                'Transportation & Drivers',
                'Accounting & Finance',
                'Customer Service',
                'Human Resources',
                'Professional & Tech',
                'Healthcare Support',
                'And Many More...',
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p className="font-medium text-gray-900">{category}</p>
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

      {/* Services for Job Seekers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Free Services for Job Seekers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Resume & Interview Help</h3>
                    <p className="text-sm text-gray-700">
                      Get help polishing your resume, practicing interviews, and presenting your best self to employers.
                      Our recruiters provide personalized coaching at no cost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Guidance</h3>
                    <p className="text-sm text-gray-700">
                      Not sure what's next? Our recruiters help you identify career paths, transferable skills,
                      and opportunities for growth based on your background and goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Match Alerts</h3>
                    <p className="text-sm text-gray-700">
                      Register once and we'll notify you when new positions match your skills and preferences.
                      You'll never miss an opportunity that's right for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding Support</h3>
                    <p className="text-sm text-gray-700">
                      We handle all the paperwork, answer your questions, and make sure your first day goes smoothly.
                      You'll have a dedicated contact throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of job seekers who have found their next position through our staffing services.
              Registration takes less than 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/apply">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/jobs">Browse Open Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Start Your Job Search Today"
        description="Register for free and get matched with opportunities that fit your skills, experience, and career goals."
        primaryCTA={{
          label: 'Register & Apply',
          href: '/apply',
        }}
        secondaryCTA={{
          label: 'View All Jobs',
          href: '/jobs',
        }}
        variant="gradient"
      />
    </>
  );
}
