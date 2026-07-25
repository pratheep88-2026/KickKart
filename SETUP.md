# Kickd Setup Guide

## 1. Create a Supabase project
- Go to https://supabase.com and create a new project.
- Copy the Project URL and the anon/service role keys from Project Settings > API.
- Enable Email Auth under Authentication > Providers.

## 2. Run the SQL schema
- Open the Supabase SQL Editor.
- Run the schema from the earlier implementation plan.
- This creates the categories, products, profiles, orders, and order_items tables with basic RLS policies.

## 3. Configure Razorpay
- Create a Razorpay account and get your test key ID and secret.
- Add them to your environment variables below.
- For local testing, use Razorpay test keys.

## 4. Environment variables
Create a .env.local file in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 5. Install dependencies
```bash
npm install
```

## 6. Run the development server
```bash
npm run dev
```

## 7. Deploy
- Deploy to Vercel.
- Add the same environment variables in Vercel.
- Make sure the Supabase and Razorpay keys are set in the production environment.

## 8. Current app status
The storefront now includes:
- A homepage with featured shoes and category links
- Product listing and product detail pages
- Navigation and placeholder auth/cart/checkout routes
- API routes for health checks and Razorpay order creation
