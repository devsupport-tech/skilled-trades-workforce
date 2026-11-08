'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select } from '@/components/ui/select';
import { CTABand } from '@/components/sections/CTABand';
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';
import { jobCategories } from '@/lib/config';

// Mock job data - will be replaced with database queries
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
    description: 'Looking for reliable warehouse associates for order picking, packing, and shipping duties.',
    postedDate: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    slug: 'electrician-katy',
    title: 'Licensed Electrician',
    company: 'Construction Company ABC',
    location: 'Katy, TX',
    employmentType: 'Direct Hire',
    shift: 'Day Shift',
    payRateMin: 28,
    payRateMax: 35,
    category: 'Construction & Skilled Trades',
    description: 'Seeking experienced licensed electricians for commercial construction projects.',
    postedDate: '2024-01-14',
    featured: true,
  },
  {
    id: '3',
    slug: 'administrative-assistant-sugar-land',
    title: 'Administrative Assistant',
    company: 'Professional Services Firm',
    location: 'Sugar Land, TX',
    employmentType: 'Temp-to-Hire',
    shift: 'Day Shift',
    payRateMin: 18,
    payRateMax: 22,
    category: 'Administrative & Clerical',
    description: 'Professional office seeking organized administrative assistant with Microsoft Office skills.',
    postedDate: '2024-01-13',
    featured: false,
  },
  // Add more mock jobs as needed
];

const employmentTypes = ['All Types', 'Temporary', 'Temp-to-Hire', 'Direct Hire', 'Contract', 'Remote'];
const shifts = ['All Shifts', 'Day Shift', 'Night Shift', 'Swing Shift', 'Rotating', 'Flexible'];
const sortOptions = ['Most Recent', 'Highest Pay', 'Lowest Pay', 'Title A-Z'];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('All Types');
  const [selectedShift, setSelectedShift] = useState('All Shifts');
  const [selectedSort, setSelectedSort] = useState('Most Recent');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort jobs
  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All Categories' ||
      job.category === selectedCategory;

    const matchesEmploymentType =
      selectedEmploymentType === 'All Types' ||
      job.employmentType === selectedEmploymentType;

    const matchesShift =
      selectedShift === 'All Shifts' ||
      job.shift === selectedShift;

    return matchesSearch && matchesCategory && matchesEmploymentType && matchesShift;
  });

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse Open Positions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Search thousands of job opportunities across construction, warehouse, office, and professional roles
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex items-center gap-2 max-w-2xl mx-auto">
              <Search className="h-5 w-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search by job title, company, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-2 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Toggle (Mobile) */}
            <div className="mb-6 md:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full"
              >
                <Filter className="mr-2 h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <div className={`md:col-span-1 ${showFilters ? 'block' : 'hidden md:block'}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>All Categories</option>
                        {jobCategories.map((category) => (
                          <option key={category.slug} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employment Type
                      </label>
                      <select
                        value={selectedEmploymentType}
                        onChange={(e) => setSelectedEmploymentType(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {employmentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shift
                      </label>
                      <select
                        value={selectedShift}
                        onChange={(e) => setSelectedShift(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {shifts.map((shift) => (
                          <option key={shift} value={shift}>
                            {shift}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('All Categories');
                          setSelectedEmploymentType('All Types');
                          setSelectedShift('All Shifts');
                        }}
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Apply CTA */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Not Finding What You Want?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Register with us and we\\'ll match you with opportunities as they become available.
                    </p>
                    <Button className="w-full" asChild>
                      <Link href="/apply">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Job Listings */}
              <div className="md:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-600">
                    Showing <span className="font-semibold">{filteredJobs.length}</span> job{filteredJobs.length !== 1 ? 's' : ''}
                  </p>
                  <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="text-sm text-gray-600">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      {sortOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Job Cards */}
                {filteredJobs.length > 0 ? (
                  <div className="space-y-4">
                    {filteredJobs.map((job) => (
                      <Card key={job.id} className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-500 border-2' : ''}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-xl">
                                  <Link href={`/jobs/${job.slug}`} className="hover:text-blue-600">
                                    {job.title}
                                  </Link>
                                </CardTitle>
                                {job.featured && (
                                  <Badge className="bg-blue-600">Featured</Badge>
                                )}
                              </div>
                              <CardDescription className="text-base">{job.company}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <p className="text-gray-700">{job.description}</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                <span>{job.employmentType}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{job.shift}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                <span>${job.payRateMin}-${job.payRateMax}/hr</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>Posted {getTimeAgo(job.postedDate)}</span>
                            </div>

                            <div className="flex items-center gap-3 pt-4">
                              <Button asChild>
                                <Link href={`/jobs/${job.slug}`}>
                                  View Details
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="outline" asChild>
                                <Link href={`/jobs/${job.slug}/apply`}>Quick Apply</Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <p className="text-gray-600 mb-4">
                        No jobs found matching your filters.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('All Categories');
                          setSelectedEmploymentType('All Types');
                          setSelectedShift('All Shifts');
                        }}
                      >
                        Clear Filters
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Don\\'t See the Right Position?"
        description="Register with us and we\\'ll notify you when new positions match your skills and preferences."
        primaryCTA={{
          label: 'Register Now',
          href: '/apply',
        }}
        secondaryCTA={{
          label: 'Contact Us',
          href: '/contact',
        }}
        variant="gradient"
      />
    </>
  );
}
