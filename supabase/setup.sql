-- What the Fridge: accounts and saved data (CLAUDE.md v1.14, "Accounts and saved data").
--
-- Run this once in the Supabase dashboard: SQL Editor > New query > paste all of it > Run.
-- It is safe to run again; it replaces what it made before.
--
-- One table, one row per person: the same data the browser keeps today (settings, pantry, plan,
-- preferences, the unconfirmed-meal queue, cooking and waste logs), as one JSON document.
-- Row-level security means a signed-in person can only ever read or change their own row.
-- Photos are never stored here.

create table if not exists public.kitchens (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  state      jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.kitchens enable row level security;

-- Nobody signed out can touch the table at all; signed-in people get the four verbs, and the
-- policies below narrow each one to their own row.
revoke all on public.kitchens from anon, authenticated;
grant select, insert, update, delete on public.kitchens to authenticated;

drop policy if exists "own kitchen: read"   on public.kitchens;
drop policy if exists "own kitchen: add"    on public.kitchens;
drop policy if exists "own kitchen: change" on public.kitchens;
drop policy if exists "own kitchen: remove" on public.kitchens;

create policy "own kitchen: read" on public.kitchens
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "own kitchen: add" on public.kitchens
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "own kitchen: change" on public.kitchens
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own kitchen: remove" on public.kitchens
  for delete to authenticated using ((select auth.uid()) = user_id);

-- The save time comes from the database clock, not the phone's, so two devices with different
-- clocks still agree on which save is newer.
create or replace function public.kitchens_touch()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists kitchens_touch on public.kitchens;
create trigger kitchens_touch before insert or update on public.kitchens
  for each row execute function public.kitchens_touch();

-- "Delete my account and data" in the app calls this. It removes the person's saved kitchen and
-- their sign-in account, and only ever their own: it acts on auth.uid(), never on an id it is given.
create or replace function public.delete_my_account()
returns void language plpgsql security definer set search_path = '' as $$
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;
  delete from public.kitchens where user_id = auth.uid();
  delete from auth.users where id = auth.uid();
end;
$$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
