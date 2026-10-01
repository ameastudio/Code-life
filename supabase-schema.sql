-- Code Life · Paste ALL of this into Supabase > SQL Editor > New query > Run.
-- Safe to re-run. Requires Supabase Auth (email/password) enabled.
-- IMPORTANT: add the actual GitHub Pages URL in Auth > URL Configuration
-- before using the hosted app (example: https://ameastudio.github.io/Code-life/).

create table if not exists public.code_life_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  completed_lesson_ids text[] not null default '{}',
  last_active_on date,
  streak integer not null default 0 check (streak >= 0),
  daily_done_on date,
  updated_at timestamptz not null default now()
);

create table if not exists public.code_life_drafts (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  code text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id),
  constraint code_life_drafts_code_max check (length(code) <= 100000)
);

alter table public.code_life_progress add column if not exists daily_done_on date;

alter table public.code_life_progress enable row level security;
alter table public.code_life_drafts enable row level security;

revoke all on table public.code_life_progress from anon;
revoke all on table public.code_life_drafts from anon;
grant select, insert, update, delete on table public.code_life_progress to authenticated;
grant select, insert, update, delete on table public.code_life_drafts to authenticated;

drop policy if exists "Learners select own progress" on public.code_life_progress;
create policy "Learners select own progress" on public.code_life_progress
for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "Learners insert own progress" on public.code_life_progress;
create policy "Learners insert own progress" on public.code_life_progress
for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "Learners update own progress" on public.code_life_progress;
create policy "Learners update own progress" on public.code_life_progress
for update to authenticated using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Learners select own drafts" on public.code_life_drafts;
create policy "Learners select own drafts" on public.code_life_drafts
for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "Learners insert own drafts" on public.code_life_drafts;
create policy "Learners insert own drafts" on public.code_life_drafts
for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "Learners update own drafts" on public.code_life_drafts;
create policy "Learners update own drafts" on public.code_life_drafts
for update to authenticated using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

-- Confirm your project has the public schema enabled in Supabase Data API settings.