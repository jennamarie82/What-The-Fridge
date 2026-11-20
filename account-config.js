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
  url: '',
  anonKey: ''
};
