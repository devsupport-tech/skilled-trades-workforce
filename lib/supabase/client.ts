/**
 * Supabase Browser Client
 *
 * Client-side Supabase instance for use in React components and client-side logic.
 * Uses anon key with Row-Level Security enforced.
 */

import { createBrowserClient } from '@supabase/ssr';
import { database } from '@/lib/config';
import type { Database } from './types';

let client: ReturnType<typeof createBrowserClient<Database>> | null = null;

export function createClient() {
  if (client) return client;

  if (!database.supabaseUrl || !database.supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  client = createBrowserClient<Database>(
    database.supabaseUrl,
    database.supabaseAnonKey
  );

  return client;
}

// Export singleton instance
export const supabase = createClient();
