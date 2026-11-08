/**
 * Supabase Database Types
 *
 * Auto-generated types from database schema.
 * Regenerate with: npx supabase gen types typescript --local > lib/supabase/types.ts
 *
 * NOTE: This is a placeholder. Types will be generated after migrations are created.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      // Types will be generated from migrations
      [key: string]: any;
    };
    Views: {
      [key: string]: any;
    };
    Functions: {
      [key: string]: any;
    };
    Enums: {
      [key: string]: any;
    };
  };
}
