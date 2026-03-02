# QuickHire Frontend

QuickHire frontend is a responsive job portal UI built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Redux Toolkit (RTK Query).

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Redux Toolkit + RTK Query
- Lucide React icons
- clsx + tailwind-merge

## Features

- Pixel-focused homepage sections (Hero, Companies, Categories, Featured jobs, Latest jobs, CTA)
- Job listings page with:
  - Search
  - Filter (category, type, location)
  - Pagination
- Job details page with apply form:
  - Name
  - Email
  - Resume URL
  - Cover note
  - Client-side Zod validation
- Admin panel:
  - Create job
  - Delete job
  - View all applications
  - Candidate details modal
- Global toast notifications and loading/empty states

## Project Structure

```text
quickhire-frontend/
├── public/                     # Static assets (logo, hero, section graphics)
├── src/
│   ├── app/                    # App Router pages/layout
│   │   ├── page.tsx            # Home
│   │   ├── jobs/page.tsx       # Job listings
│   │   ├── jobs/[id]/page.tsx  # Job details
│   │   ├── admin/page.tsx      # Admin panel
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── home/               # Home sections
│   │   ├── jobs/               # Job-related UI
│   │   ├── admin/              # Admin components
│   │   ├── application/        # Application management UI
│   │   ├── layout/             # Navbar/Footer/Page wrapper
│   │   └── ui/                 # Reusable UI components
│   ├── store/
│   │   ├── api/
│   │   │   ├── baseApi.ts
│   │   │   ├── jobsApi.ts
│   │   │   └── applicationsApi.ts
│   │   ├── index.ts
│   │   └── provider.tsx
│   ├── hooks/
│   ├── lib/
│   ├── constants/
│   └── types/
├── package.json
└── README.md
```

## Routes

- `/` - Home
- `/jobs` - Job listings
- `/jobs/[id]` - Job details + apply form
- `/admin` - Basic admin dashboard

## Environment Variables

Create `.env.local` in `quickhire-frontend`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Production API example:

```env
NEXT_PUBLIC_API_URL=https://quickhire-backend-p7c8.onrender.com/api
```

## Installation & Run

```bash
# from quickhire-frontend/
npm install
npm run dev
```

Open: `http://localhost:3000`

## Available Scripts

```bash
npm run dev    # next dev (watchpack polling enabled)
npm run build  # production build
npm run start  # start built app
npm run lint   # run eslint
```

## API Integration Notes

- All API calls use RTK Query from `src/store/api`.
- Base URL comes from `NEXT_PUBLIC_API_URL`.
- `jobsApi.ts` handles:
  - list jobs
  - featured jobs
  - job by id
  - create/update/delete job
- `applicationsApi.ts` handles:
  - submit application
  - list applications
  - application by id
  - applications by job id

## Design System / Fonts

Current typography setup follows Figma mapping:

- Clash Display (heading/display usage)
- Epilogue (body/UI text)
- Red Hat Display (logo wordmark)

## Notes

- The frontend expects the backend response envelope:
  - `success`, `statusCode`, `message`, `data`, optional `meta`
- For local full-stack development, run backend and frontend together:
  - Backend: `http://localhost:5000`
  - Frontend: `http://localhost:3000`
