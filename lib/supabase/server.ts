/**
 * Supabase Server Client
 *
 * Server-side Supabase instance for use in Server Components, Server Actions, and API Routes.
 * Uses cookies for session management and Row-Level Security.
 */

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { database } from '@/lib/config';
import type { Database } from './types';

export async function createClient() {
  const cookieStore = await cookies();

  if (!database.supabaseUrl || !database.supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createServerClient<Database>(
    database.supabaseUrl,
    database.supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
