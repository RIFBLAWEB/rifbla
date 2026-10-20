# Rhode Island FBLA Website

The official website of Rhode Island FBLA, live at **rifbla.vercel.app**.

This README is the handbook for the state board. You do not need to know how
to code to keep this site up to date. Read the first two sections and you
know everything you need.

## How to edit the site (no coding)

1. Go to **https://app.pagescms.org**
2. Sign in with your GitHub account
3. Open the **RIFBLAWEB/rifbla** repository
4. Pick what you want to edit from the left menu:
   - **State Events**: dates, descriptions, and links for SFLC, SLC, and other events
   - **State Officers**: add or remove officer entries shown in the grid
   - **Officer Team (bios & history)**: the school year label, officer bios and photos, and the past officer archive
   - **Chapter Directory**: add or remove chapters, link chapter websites
   - **Chapter Updates**: post news submitted by chapter ambassadors
   - **State Info**: adviser and chair contacts, social links, Champion Chapter results, board application status
5. Make your change in the form and click **Save**

That is it. Saving commits your change to this repository, and the site
rebuilds and goes live automatically in about one minute. Nothing else to do.

## Each new school year, update these

- [ ] **Officer Team**: new year label, new bios and photos; move last year's team into Past officer teams
- [ ] **State Events**: new conference dates
- [ ] **State Info**: adviser and chair if they changed, board application status, latest Champion Chapter results
- [ ] **Chapter Directory**: any new or closed chapters

## Giving access to a new board member

The site is owned by the **RIFBLAWEB** GitHub organization, not by any one
person. To onboard someone:

1. They create a free GitHub account
2. A current org owner goes to github.com/orgs/RIFBLAWEB/people and invites them
   (role **Member** to edit content, role **Owner** for officers who run the site)
3. They sign in at app.pagescms.org and the forms are there

When a board member graduates, remove them from the org the same way.

## If something breaks

- **Change not showing up?** Give it two minutes; the site rebuilds after every
  save. Hard refresh your browser (Cmd+Shift+R).
- **Site down or build failing?** Log into vercel.com (the account connected to
  this repo) and check the latest deployment for a red X. The fix is usually
  re-deploying the previous good version with one click (Deployments, then
  Promote to Production on the last green one).
- **Locked out?** Any RIFBLAWEB org owner can re-invite you.
- Because every change is a Git commit, **nothing is ever lost**. Any previous
  version of the site can be restored.

## Technical notes (for whoever maintains the code)

- **Stack**: Next.js (App Router), no CSS framework; all styles in `app/globals.css`
- **Content**: everything editable lives in `content/` as JSON, read at build
  time by `lib/reader.ts`. The CMS forms are defined in `.pages.yml`
- **Photos**: `public/photos` (the CMS can upload here too); PDFs in `public/docs`
- **Hosting**: Vercel, auto-deploys on every push to `main`. Free tier
- **Contact form**: FormSubmit delivers to rifblaofficial@gmail.com
- **Local dev**: `npm install`, then `npm run dev`
- The complete content of the previous Weebly site is archived in `harvest/`

Originally built in 2026 by Tyler Gecawich (EGHS, Social Media Co-Chair) for
the Rhode Island FBLA state board.
