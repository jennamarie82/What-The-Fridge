# Accounts: one-time Supabase setup

Accounts are optional for users and switched off until these steps are done. The rules they follow
are in CLAUDE.md v1.14, "Accounts and saved data".

1. **Region.** The project should be in **Canada (Central)**.
2. **Database.** Supabase dashboard > **SQL Editor** > New query. Paste all of `setup.sql` and Run.
   It creates the `kitchens` table, its row-level security rules and the delete-my-account function.
   Safe to run again.
3. **Sign-in by code, not link.** Supabase only lets you edit its emails once it sends them through
   your own account, and the default emails carry a link, which opens Safari instead of the
   home-screen app. The sender is the team Gmail **whatthefridge.teamren@gmail.com**.
   - In that Gmail: turn on **2-Step Verification** (myaccount.google.com > Security), then create an
     **App password** named "Supabase". Type it straight into Supabase in the next step; never paste it
     anywhere else (not in this repository, a message, or to Claude).
   - Supabase > Authentication > **Emails** > **Set up SMTP**: sender email and username
     `whatthefridge.teamren@gmail.com`, sender name `What the Fridge`, host `smtp.gmail.com`,
     port `465`, password the app password. Save.
   - Then in both **Confirm signup** and **Magic Link**, click Source and replace everything with:
     subject `Your What the Fridge sign-in code`, body:
     ```html
     <h2>Your sign-in code</h2>
     <p>Enter this code in What the Fridge to sign in:</p>
     <p style="font-size:28px;font-weight:bold;letter-spacing:4px;">{{ .Token }}</p>
     <p>The code works for a short time. If you didn't ask for it, you can ignore this email.</p>
     ```
   - Authentication > **Rate limits**: check the email limit (about 30 an hour is plenty for the pilot).
4. **Code length.** Authentication > Providers > **Email**: keep Email enabled and set the
   **Email OTP length** to 6 (the app accepts 6 to 10 digits).
5. **Connect the app.** Project Settings > **API**: copy the **Project URL** and the **anon / public**
   key into `account-config.js`, then commit and merge. Never copy the **service_role / secret** key
   anywhere.
6. **Try it.** On the live site: Settings > Account > enter your email > type the code. Then open the
   site on a second device and choose "Already have an account? Sign in" on the first setup screen.

Limits: Gmail sends about 500 emails a day, and Supabase's email rate limit applies on top. The
Gmail login is kept with the team's other shared logins, so sign-in doesn't depend on one person.

To remove someone's data on request: they can use Settings > Account > Delete my account and data.
A team member with dashboard access can also delete the user under Authentication > Users, which
removes their `kitchens` row with it.
