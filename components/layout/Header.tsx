'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { company } from '@/lib/config';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'Staffing Services',
    href: '/staffing-services',
    submenu: [
      { label: 'Temporary Staffing', href: '/staffing-services/temporary-staffing' },
      { label: 'Temp-to-Hire', href: '/staffing-services/temp-to-hire' },
      { label: 'Direct Hire', href: '/staffing-services/direct-hire' },
      { label: 'Contract Staffing', href: '/staffing-services/contract-staffing' },
      { label: 'Professional Recruiting', href: '/staffing-services/professional-recruiting' },
      { label: 'Remote Staffing', href: '/staffing-services/remote-staffing' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    submenu: [
      { label: 'Construction & Skilled Trades', href: '/industries/construction-skilled-trades' },
      { label: 'Restoration & Disaster Recovery', href: '/industries/restoration-disaster-recovery' },
      { label: 'Administrative & Clerical', href: '/industries/administrative-clerical' },
      { label: 'Office Management', href: '/industries/office-management' },
      { label: 'Accounting & Finance', href: '/industries/accounting-finance' },
      { label: 'Human Resources', href: '/industries/human-resources' },
      { label: 'Customer Service & Sales', href: '/industries/customer-service-sales' },
      { label: 'Industrial & Manufacturing', href: '/industries/industrial-manufacturing' },
      { label: 'Warehouse & Logistics', href: '/industries/warehouse-logistics' },
      { label: 'Construction Office Support', href: '/industries/construction-office-support' },
      { label: 'Remote & Virtual', href: '/industries/remote-virtual' },
    ],
  },
  { label: 'Employers', href: '/employers' },
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Storm Center', href: '/storm-center' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-blue-600">
              {company.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openSubmenu === item.label && (
                      <div
                        className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/jobs">Find Jobs</Link>
            </Button>
            <Button asChild>
              <Link href="/employers/request-workers">Request Employees</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openSubmenu === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/jobs" onClick={() => setMobileMenuOpen(false)}>
                  Find Jobs
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/employers/request-workers" onClick={() => setMobileMenuOpen(false)}>
                  Request Employees
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
