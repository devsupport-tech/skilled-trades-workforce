import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Share2,
  Bookmark,
  ArrowLeft
} from 'lucide-react';

// Mock job data - will be replaced with database query
const mockJobs = [
  {
    id: '1',
    slug: 'warehouse-associate-houston',
    title: 'Warehouse Associate',
    company: 'Distribution Center XYZ',
    location: 'Houston, TX',
    employmentType: 'Temporary',
    shift: 'Day Shift',
    payRateMin: 15,
    payRateMax: 18,
    category: 'Warehouse & Logistics',
    description: 'Looking for reliable warehouse associates for order picking, packing, and shipping duties in a fast-paced distribution center environment.',
    postedDate: '2024-01-15',
    featured: true,
    responsibilities: [
      'Pick and pack customer orders accurately using RF scanners',
      'Load and unload trucks safely',
      'Maintain clean and organized work area',
      'Meet daily productivity targets',
      'Follow all safety protocols and procedures',
      'Perform cycle counts and inventory checks',
    ],
    requirements: [
      'Previous warehouse experience preferred',
      'Ability to lift up to 50 lbs regularly',
      'Comfortable standing for extended periods',
      'Basic computer and RF scanner skills',
      'Reliable transportation to work',
      'Available for overtime as needed',
    ],
    benefits: [
      'Competitive hourly pay ($15-$18/hour)',
      'Weekly pay',
      'Overtime opportunities available',
      'Climate-controlled facility',
      'Temp-to-hire potential for top performers',
      'Safety equipment provided',
    ],
  },
];

interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: JobDetailPageProps): Metadata {
  // TODO: Fetch job from database
  const job = mockJobs.find(j => j.slug === params.slug);

  if (!job) {
    return {
      title: 'Job Not Found',
    };
  }

  return {
    title: `${job.title} - ${job.location} | Skilled Trades Workforce`,
    description: job.description,
    keywords: [job.title, job.category, job.location, job.employmentType, 'job opening'],
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  // TODO: Fetch job from database
  const job = mockJobs.find(j => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <>
      {/* Job Header */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href="/jobs"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Jobs
              </Link>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {job.title}
                  </h1>
                  {job.featured && (
                    <Badge className="bg-blue-600">Featured</Badge>
                  )}
                </div>
                <p className="text-xl text-gray-600 mb-4">{job.company}</p>

                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    <span>{job.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{job.shift}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    <span>${job.payRateMin}-${job.payRateMax}/hour</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                  <Clock className="h-4 w-4" />
                  <span>Posted {getTimeAgo(job.postedDate)}</span>
                </div>
              </div>

              <div className="flex-shrink-0 flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button size="lg" asChild>
                <Link href={`/jobs/${job.slug}/apply`}>
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/apply">Register for Similar Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Apply?</h3>
                  <p className="text-gray-700 mb-4">
                    Click the button below to apply for this position. The application takes less than 5 minutes.
                  </p>
                  <Button size="lg" asChild>
                    <Link href={`/jobs/${job.slug}/apply`}>
                      Apply for This Position
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-4 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Job Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Employment Type</div>
                        <div className="font-semibold text-gray-900">{job.employmentType}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Pay Range</div>
                        <div className="font-semibold text-gray-900">${job.payRateMin}-${job.payRateMax}/hour</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Shift</div>
                        <div className="font-semibold text-gray-900">{job.shift}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                        <div className="font-semibold text-gray-900">{job.location}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Category</div>
                        <div className="font-semibold text-gray-900">{job.category}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Posted</div>
                        <div className="font-semibold text-gray-900">{getTimeAgo(job.postedDate)}</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full" asChild>
                        <Link href={`/jobs/${job.slug}/apply`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Contact Recruiter</Link>
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Job
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Questions?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Have questions about this position? Contact our recruiting team.
                      </p>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Call:</p>
                      <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-medium">
                        (XXX) XXX-XXXX
                      </a>
                      <p className="text-sm font-semibold text-gray-900 mt-3 mb-1">Email:</p>
                      <a href="mailto:jobs@example.com" className="text-blue-600 hover:text-blue-700 font-medium">
                        jobs@example.com
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Jobs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Similar Positions
            </h2>
            <p className="text-gray-600 mb-8">
              Check out these other opportunities in {job.category}
            </p>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/jobs">
                  View All Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
