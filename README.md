# DSV Consulting LLC – Next.js Application

Production-ready Next.js 15 starter that matches the existing DSV Consulting design and implements the requested dynamic features.

## Quick Start

```bash
cd dsv-next
npm install
cp .env.local.example .env.local
# Fill in your Supabase credentials
npm run dev
```

## What’s Included

- **Public site** matching the original design (slate-900, gold #D4AF37, Inter + Playfair Display, green seal logo).
- **Dynamic Portfolio** and **Press Releases** that pull from Supabase (with static fallbacks).
- **Investor portal** demo (access code `DSV2026`).
- **Admin dashboard** at `/admin` with forms for Portfolio and Press.
- **Full Supabase schema** (`supabase/schema.sql`) covering:
  - Portfolio items
  - Press releases
  - Clients & document library
  - Investors
  - NDA requests (ready for DocuSign envelope IDs)
- Environment example with placeholders for DocuSign, Resend, X, and LinkedIn.

## Investor + NDA Flow (Ready to Wire)

1. Admin creates a client and uploads documents to the `investor-docs` storage bucket.
2. Admin adds an investor (name, email, phone) and triggers invitation email (fact sheet).
3. On interest, system creates a DocuSign envelope from your NDA template and stores the envelope ID.
4. DocuSign webhook (`/api/webhooks/docusign`) marks the NDA complete and emails a secure materials link.

## Authentication

Admin routes (`/admin/*`) are protected by Supabase Auth via middleware.

### Setup

1. In your Supabase project, go to **Authentication → Providers** and enable Email.
2. Create an admin user:
   - Go to **Authentication → Users → Add user**
   - Enter the email and password you want to use for admin access.
3. (Optional) Disable public sign-ups in Authentication settings so only you can create users.

### Usage

- Visit `/admin` → redirected to `/login` if not authenticated.
- Sign in with the email/password you created.
- A header appears on all admin pages showing the logged-in email and a Sign Out button.
- Sign out returns you to the login page.

### Files Added

- `middleware.ts` — Protects `/admin` routes and redirects unauthenticated users to `/login`.
- `app/login/page.tsx` — Login form.
- `app/admin/layout.tsx` — Server-side auth check + admin header.
- `components/LogoutButton.tsx` — Client-side sign-out button.

## Next Implementation Steps

1. Create a Supabase project and run `supabase/schema.sql`.
2. Create a private storage bucket named `investor-docs`.
3. Add Supabase Auth and protect `/admin` routes.
4. Implement `/api/webhooks/docusign` and the invitation email route.
5. Connect X API v2 and LinkedIn API (or use a service like Make.com) for press distribution.

The visual design, data model, and admin surface are ready. The remaining work is connecting the external services (DocuSign, email, social APIs).

---
Built for DSV Consulting LLC
