# Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe | Full Tutorial 2023
![thumbnail](https://github.com/kungfu321/project-ai-sass/assets/10558363/656fe339-07c7-4be8-b4d2-c65bc0485eea)

In this repository we are Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe | Full Tutorial 2023

VIDEO TUTORIAL (English version) (Coming soon)

[VIDEO TUTORIAL (Vietnamese version)](https://youtu.be/X8Qd7SMbfaQ)

## Features
- Tailwind CSS
- Shadcn/ui
- Full responsiveness
- Clerk Authentication
- Vercel AI SDK
- Client form validation and handling using react-hook-form and zod
- Image Generation Tool (Open AI)
- Code Generation Tool (Open AI)
- Conversation Generation Tool (Open AI)
- Audio Generation Tool (Replicate AI)
- Video Generation Tool (Replicate AI)
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST and GET routes in route handlers (app/api)
- Folder structure in Next 13 App Router

## Prerequisites
Node version 18.x.x
## Setup .env file

```bash
OPENAI_API_KEY=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

NEXT_PUBLIC_APP_URL=http://localhost:3000/

NEXT_PUBLIC_CRISP_WEBSITE_ID=
```

## Setup Prisma
Add PostgreSQL Database

```bash
npx prisma db push
```

## Start to dev

```bash
yarn dev
```

Some code snippets were referenced from: [https://github.com/AntonioErdeljac/next13-ai-saas](https://github.com/AntonioErdeljac/next13-ai-saas)
