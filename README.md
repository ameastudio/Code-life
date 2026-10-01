# Code Life 💙

A mobile-friendly coding academy that teaches **HTML → CSS → JavaScript** progressively.

## Included
- 24 beginner lessons
- Learn → Practice → Quiz flow
- Lesson locking/unlocking
- Live preview + JavaScript console
- Free playground
- Progress %, streaks, and badges
- Guest progress saved on the device
- Optional Supabase email/password cloud sync
- Installable PWA

## Upload to GitHub
Upload **everything inside this folder** to the root of your `Code-life` repository. Keep the `icons` folder as a folder.

Then go to **Settings → Pages → Deploy from a branch → main → /(root)**.

Your URL should become: `https://ameastudio.github.io/Code-life/`

## Supabase
1. Create/open your Supabase project.
2. Go to **SQL Editor → New query**.
3. Paste everything from `supabase-schema.sql` and Run it.
4. Copy your **Project URL** and **publishable key**.
5. Edit `supabase-config.js` and paste them there. Use only the public publishable key, never a service-role/secret key.
6. In Supabase **Authentication → URL Configuration**, use your GitHub Pages URL as the Site URL and allowed redirect URL.

## iPhone
Open the published site in Safari → Share → **Add to Home Screen**.
