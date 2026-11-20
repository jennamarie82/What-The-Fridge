# Accounts: one-time Supabase setup

Accounts are optional for users and switched off until these steps are done. The rules they follow
are in CLAUDE.md v1.14, "Accounts and saved data".

1. **Region.** The project should be in **Canada (Central)**.
2. **Database.** Supabase dashboard > **SQL Editor** > New query. Paste all of `setup.sql` and Run.
   It creates the `kitchens` table, its row-level security rules and the delete-my-account function.
   Safe to run again.
3. **Sign-in by code, not link.** Authentication > **Emails** (Templates). In both **Confirm signup**
   and **Magic Link**, make the message show the code: put `{{ .Token }}` in the body, for example
   "Your What the Fridge code is {{ .Token }}". A link would open Safari instead of the home-screen app.
4. **Code length.** Authentication > Providers > **Email**: keep Email enabled and set the
   **Email OTP length** to 6 (the app accepts 6 to 10 digits).
5. **Connect the app.** Project Settings > **API**: copy the **Project URL** and the **anon / public**
   key into `account-config.js`, then commit and merge. Never copy the **service_role / secret** key
   anywhere.
6. **Try it.** On the live site: Settings > Account > enter your email > type the code. Then open the
   site on a second device and choose "Already have an account? Sign in" on the first setup screen.

Limits: Supabase's built-in email sends only a few codes an hour. Fine for the pilot; a wider test
needs a dedicated email sender (Authentication > Emails > SMTP settings).

To remove someone's data on request: they can use Settings > Account > Delete my account and data.
A team member with dashboard access can also delete the user under Authentication > Users, which
removes their `kitchens` row with it.
