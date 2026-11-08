import { Search, UserCheck, Briefcase, CheckCircle } from 'lucide-react';

const employerSteps = [
  {
    icon: Search,
    title: 'Request Talent',
    description: 'Submit your staffing needs through our simple online form or give us a call',
  },
  {
    icon: UserCheck,
    title: 'Recruiter Reviews',
    description: 'Our team reviews your requirements and searches our qualified candidate network',
  },
  {
    icon: Briefcase,
    title: 'Candidate Screening',
    description: 'We pre-screen candidates, verify credentials, and present you with qualified matches',
  },
  {
    icon: CheckCircle,
    title: 'Interview & Placement',
    description: 'You interview and approve candidates, then we handle the placement logistics',
  },
];

const candidateSteps = [
  {
    icon: UserCheck,
    title: 'Register',
    description: 'Create your profile with your skills, experience, and job preferences',
  },
  {
    icon: Search,
    title: 'Skills Review',
    description: 'Our recruiters review your qualifications and verify credentials when needed',
  },
  {
    icon: Briefcase,
    title: 'Opportunity Matching',
    description: 'We match you with relevant job openings and notify you of new opportunities',
  },
  {
    icon: CheckCircle,
    title: 'Interview & Placement',
    description: 'Interview with employers, get placed, and receive ongoing support',
  },
];

export function HowItWorks() {
  return (
    <>
      {/* For Employers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works for Employers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined process to find the right talent for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employerSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 hidden lg:block"
                    style={{ display: index === employerSteps.length - 1 ? 'none' : undefined }}
                  />
                  <div className="relative z-10 bg-gray-50">
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Candidates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works for Job Seekers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your path to finding the right opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {candidateSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-green-200 hidden lg:block"
                    style={{ display: index === candidateSteps.length - 1 ? 'none' : undefined }}
                  />
                  <div className="relative z-10 bg-white">
                    <div className="text-sm font-semibold text-green-600 mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
