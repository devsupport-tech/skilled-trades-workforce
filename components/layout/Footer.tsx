'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { company, serviceAreas } from '@/lib/config';

const footerLinks = {
  services: [
    { label: 'Temporary Staffing', href: '/staffing-services/temporary-staffing' },
    { label: 'Temp-to-Hire', href: '/staffing-services/temp-to-hire' },
    { label: 'Direct Hire', href: '/staffing-services/direct-hire' },
    { label: 'Contract Staffing', href: '/staffing-services/contract-staffing' },
    { label: 'Professional Recruiting', href: '/staffing-services/professional-recruiting' },
    { label: 'Remote Staffing', href: '/staffing-services/remote-staffing' },
  ],
  industries: [
    { label: 'Construction & Skilled Trades', href: '/industries/construction-skilled-trades' },
    { label: 'Restoration & Disaster Recovery', href: '/industries/restoration-disaster-recovery' },
    { label: 'Administrative & Clerical', href: '/industries/administrative-clerical' },
    { label: 'Warehouse & Logistics', href: '/industries/warehouse-logistics' },
    { label: 'View All Industries', href: '/industries' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Storm Center', href: '/storm-center' },
    { label: 'For Employers', href: '/employers' },
    { label: 'Find Jobs', href: '/jobs' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-xl font-bold text-white mb-4">
              {company.name}
            </div>
            <p className="text-sm mb-4">
              {company.tagline}
            </p>
            <div className="space-y-2 text-sm">
              {!company.phone.includes('TO BE PROVIDED') && (
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                    {company.phone}
                  </a>
                </div>
              )}
              {!company.email.includes('TO BE PROVIDED') && (
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                    {company.email}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{company.address.full}</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              <p>{company.hours.weekday}</p>
              <p>{company.hours.weekend}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mt-6 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-sm">
            <span className="font-semibold text-white">Service Areas:</span>
            <span className="ml-2">
              {serviceAreas.cities.slice(0, 5).join(', ')} and surrounding {serviceAreas.primary} area
            </span>
          </div>
          <div className="text-xs mt-2 text-gray-400">
            National storm response deployment available nationwide
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400">
            © {currentYear} {company.legalName.includes('TO BE PROVIDED') ? company.name : company.legalName}. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 text-xs text-gray-500">
            Part of the Skilled Trades to Success ecosystem
          </div>
        </div>
      </div>
    </footer>
  );
}
