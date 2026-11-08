/**
 * Privacy-Safe Analytics
 *
 * Track conversion events without sending PII.
 * Compatible with privacy-focused analytics providers.
 */

import { isDevelopment } from './config';

// Event types for conversion tracking
export type AnalyticsEvent =
  | 'employer_request_started'
  | 'employer_request_submitted'
  | 'candidate_registration_submitted'
  | 'job_application_submitted'
  | 'storm_worker_registered'
  | 'storm_crew_registered'
  | 'storm_employer_request_submitted'
  | 'consultation_booking_completed'
  | 'page_view'
  | 'job_search'
  | 'form_error';

export interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track analytics event
 * NEVER send PII: no emails, names, phone numbers, addresses
 */
export function trackEvent(
  event: AnalyticsEvent,
  properties?: EventProperties
): void {
  // Development logging
  if (isDevelopment) {
    console.log('[Analytics]', event, properties);
    return;
  }

  // Validate no PII in properties
  if (properties) {
    validateNoPII(properties);
  }

  // Send to analytics provider
  // TODO: Implement actual analytics provider integration
  // Example: plausible, fathom, simple analytics, or privacy-focused provider
  try {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible(event, { props: properties });
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

/**
 * Validate that properties don't contain PII
 */
function validateNoPII(properties: EventProperties): void {
  const piiPatterns = [
    /email/i,
    /phone/i,
    /name/i,
    /address/i,
    /ssn/i,
    /@/,
    /\d{3}-\d{2}-\d{4}/, // SSN pattern
  ];

  Object.entries(properties).forEach(([key, value]) => {
    const stringValue = String(value);

    piiPatterns.forEach((pattern) => {
      if (pattern.test(key) || pattern.test(stringValue)) {
        console.warn(
          `[Analytics] Potential PII detected in property "${key}". Event not tracked.`
        );
        throw new Error('PII detected in analytics properties');
      }
    });
  });
}

/**
 * Track page view
 */
export function trackPageView(path: string): void {
  trackEvent('page_view', {
    path,
    referrer: typeof document !== 'undefined' ? document.referrer : undefined,
  });
}

/**
 * Track conversion event with category
 */
export function trackConversion(
  category: 'employer' | 'candidate' | 'storm' | 'general',
  action: string,
  value?: number
): void {
  trackEvent(action as AnalyticsEvent, {
    category,
    value,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(
  formType: 'employer_request' | 'candidate_registration' | 'storm_registration' | 'crew_registration' | 'application',
  success: boolean
): void {
  const event = success
    ? `${formType}_submitted` as AnalyticsEvent
    : 'form_error';

  trackEvent(event, {
    form_type: formType,
    success,
  });
}

/**
 * Track job search
 */
export function trackJobSearch(filters: {
  category?: string;
  location?: string;
  employment_type?: string;
  has_results?: boolean;
}): void {
  trackEvent('job_search', filters);
}

/**
 * Initialize analytics (call in layout or app initialization)
 */
export function initAnalytics(): void {
  if (isDevelopment) {
    console.log('[Analytics] Development mode - events will be logged to console');
    return;
  }

  // TODO: Initialize analytics provider
  // Example for Plausible:
  // const script = document.createElement('script');
  // script.defer = true;
  // script.dataset.domain = 'yourdomain.com';
  // script.src = 'https://plausible.io/js/script.js';
  // document.head.appendChild(script);
}

/**
 * Get anonymous user ID (for session tracking, not PII)
 */
export function getAnonymousId(): string {
  if (typeof window === 'undefined') return '';

  const storageKey = 'anonymous_id';
  let id = localStorage.getItem(storageKey);

  if (!id) {
    id = `anon_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(storageKey, id);
  }

  return id;
}
