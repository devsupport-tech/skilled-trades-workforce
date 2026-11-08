'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Users,
  Briefcase
} from 'lucide-react';

const contactInfo = [
  {
    title: 'Phone',
    icon: Phone,
    primary: '(XXX) XXX-XXXX',
    secondary: 'Mon-Fri 8am-6pm CT',
    href: 'tel:+1234567890',
  },
  {
    title: 'Email',
    icon: Mail,
    primary: 'info@example.com',
    secondary: 'We respond within 24 hours',
    href: 'mailto:info@example.com',
  },
  {
    title: 'Office',
    icon: MapPin,
    primary: 'Greater Houston Area',
    secondary: 'Serving Houston and surrounding communities',
    href: '#',
  },
  {
    title: 'Hours',
    icon: Clock,
    primary: 'Monday - Friday: 8am - 6pm',
    secondary: 'Saturday: By appointment',
    href: '#',
  },
];

const quickLinks = [
  {
    title: 'For Employers',
    description: 'Need workers for your business? Request qualified candidates today.',
    icon: Briefcase,
    href: '/employers/request-workers',
    cta: 'Request Workers',
  },
  {
    title: 'For Job Seekers',
    description: 'Looking for work? Register with us and access thousands of opportunities.',
    icon: Users,
    href: '/apply',
    cta: 'Register Now',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100">
              We're here to help. Reach out with questions, requests, or to learn more about our staffing services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.href !== '#' ? (
                      <a href={item.href} className="text-blue-600 hover:text-blue-700 font-medium block mb-1">
                        {item.primary}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900 mb-1">{item.primary}</p>
                    )}
                    <p className="text-sm text-gray-600">{item.secondary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-gray-600 mt-2">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a subject</option>
                          <option value="employer-inquiry">I need workers for my business</option>
                          <option value="job-seeker-inquiry">I'm looking for work</option>
                          <option value="storm-response">Storm response / disaster recovery</option>
                          <option value="partnership">Partnership opportunities</option>
                          <option value="general">General inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Tell us how we can help..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Links Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {quickLinks.map((link, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <link.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                      <Button className="w-full" asChild>
                        <Link href={link.href}>
                          {link.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Monday - Friday</span>
                      <span className="text-sm text-gray-600">8am - 6pm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Saturday</span>
                      <span className="text-sm text-gray-600">By Appointment</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Sunday</span>
                      <span className="text-sm text-gray-600">Closed</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        For urgent storm response needs, call our emergency line 24/7.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Check out our frequently asked questions or browse our resources to learn more about our staffing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/staffing-services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/industries">Industries We Serve</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
