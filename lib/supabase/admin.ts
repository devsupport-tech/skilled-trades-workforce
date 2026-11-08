/**
 * Supabase Admin Client
 *
 * Server-side only client using service role key.
 * Bypasses Row-Level Security - use with extreme caution.
 *
 * SECURITY WARNING:
 * - Never expose this client to browser/client-side code
 * - Only use for authorized admin operations and system tasks
 * - Always validate permissions before using
 * - Log all admin operations for audit trail
 */

import { createClient } from '@supabase/supabase-js';
import { database } from '@/lib/config';
import type { Database } from './types';

if (!database.supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
}

if (!database.supabaseServiceRoleKey) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY - required for admin operations');
}

/**
 * Admin client with service role privileges
 * Bypasses RLS - use only when necessary
 */
export const supabaseAdmin = createClient<Database>(
  database.supabaseUrl,
  database.supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

/**
 * Helper to check if code is running server-side
 */
export function ensureServerSide(operation: string): void {
  if (typeof window !== 'undefined') {
    throw new Error(
      `SECURITY VIOLATION: Admin operation "${operation}" attempted on client-side. ` +
      'Admin client must only be used in server-side code.'
    );
  }
}

/**
 * Wrapper for admin operations with security checks
 */
export async function withAdminAccess<T>(
  operation: string,
  fn: () => Promise<T>
): Promise<T> {
  ensureServerSide(operation);

  try {
    const result = await fn();
    console.log(`[Admin Operation] ${operation} - Success`);
    return result;
  } catch (error) {
    console.error(`[Admin Operation] ${operation} - Failed:`, error);
    throw error;
  }
}
