# Code Life 💙

**Learn. Code. Create.** A blue-and-white, mobile-friendly coding academy for learning **HTML → CSS → JavaScript**.

## What's included

- 24 beginner lessons: 8 HTML, 8 CSS, 8 JavaScript.
- Each lesson includes an explanation, example, practice task, code check, and quiz.
- A live code preview and console.
- A separate HTML/CSS/JavaScript playground.
- Sequential lesson unlocking, progress tracking, streaks, and badges.
- Guest progress saved on-device.
- Optional Supabase email/password accounts and cloud sync.
- Installable PWA for iPhone and other supported devices.
- Three mini-project briefs to bring the skills together.

## Publish on GitHub Pages

This repository is designed to run as a static website.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then save.
4. Your project URL should be:
   **https://ameastudio.github.io/Code-life/**

## Supabase setup

Guest mode works without Supabase.

For cloud accounts and syncing:

1. Create a Supabase project.
2. Open **SQL Editor → New query**.
3. Paste the entire contents of `supabase-schema.sql` and press **Run**.
4. Copy your **Project URL** and **publishable key**.
5. Put only those public values in `supabase-config.js`:

```js
window.CODE_LIFE_SUPABASE = {
  url: 'https://YOUR_PROJECT.supabase.co',
  publishableKey: 'YOUR_PUBLIC_PUBLISHABLE_KEY'
};
```

Never place a `service_role` or secret key in this repository.

6. In Supabase **Authentication → URL Configuration**, set the Site URL to:
   **https://ameastudio.github.io/Code-life/**
7. Add the same URL to allowed redirects.

## Install on iPhone

Open the published app in Safari → Share → **Add to Home Screen**.

## Main files

- `index.html` — app shell
- `styles.css` — blue/white interface
- `curriculum.js` — lessons and quizzes
- `app.js` — navigation, editor, progress, auth, and sync
- `supabase-schema.sql` — database tables and row-level security
- `supabase-config.js` — public Supabase project settings
- `manifest.webmanifest` / `service-worker.js` — installable app support

Code Life is intentionally plain HTML, CSS, and JavaScript so the code itself is readable while you learn.