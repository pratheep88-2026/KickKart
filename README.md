# Kick Kart

Kick Kart is a minimal e-commerce storefront for shoes (Sneakers, Running Shoes, Boots).

Frontend: Next.js (App Router) + TypeScript
Backend: Supabase (Auth + Postgres), Razorpay (Payments)

This repository contains a seeded UI with sample products and placeholder API routes for Razorpay order creation and verification. To run locally, add environment variables in `.env.local` (see `.env.example`).

Quick start

```bash
npm install
npm run dev
```

Deploy
- Push to GitHub (done in this project)
- Connect the repo to Vercel and set environment variables in Vercel dashboard

Files of interest
- `app/` – Next.js pages and components
- `lib/supabase` – Supabase client setup
- `app/api/checkout` – Razorpay order creation API route

Contact
- This project was prepared as requested; update Supabase and Razorpay keys to test payments.
