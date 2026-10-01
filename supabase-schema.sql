-- Code Life · Paste all of this into Supabase > SQL Editor > New query > Run.

create table if not exists public.code_life_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  completed_lesson_ids text[] not null default '{}',
  last_active_on date,
  streak integer not null default 0 check (streak >= 0),
  updated_at timestamptz not null default now()
);

alter table public.code_life_progress enable row level security;
revoke all on table public.code_life_progress from anon;
grant select, insert, update, delete on table public.code_life_progress to authenticated;

drop policy if exists "Learners select own progress" on public.code_life_progress;
create policy "Learners select own progress" on public.code_life_progress for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "Learners insert own progress" on public.code_life_progress;
create policy "Learners insert own progress" on public.code_life_progress for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "Learners update own progress" on public.code_life_progress;
create policy "Learners update own progress" on public.code_life_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
