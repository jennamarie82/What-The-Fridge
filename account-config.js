// What the Fridge: where accounts live (Supabase). A teammate fills in these two values; while
// either is empty, the app works exactly as before, with no sign-in offered.
//
// Find both in the Supabase dashboard: Project Settings > API (or the "Connect" button):
//   url      the Project URL, like https://abcdefghijklm.supabase.co
//   anonKey  the "anon" / "public" key (may be labelled "publishable")
//
// The anon key is designed to be public: it can only do what the database's row-level security
// allows, which is each signed-in person reading and writing their own row (supabase/setup.sql).
// NEVER put the "service_role" / "secret" key here or anywhere in this repository (CLAUDE.md,
// Must never).
window.WTF_SUPABASE = {
  url: 'https://tabqvmecliykpfsnthho.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhYnF2bWVjbGl5a3Bmc250aGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxMzQwMTMsImV4cCI6MjExMDcxMDAxM30.LuEFmEH1lPLNvOD2rJxrSlLhyYUHYxtwA42gwr3-an8'
};
