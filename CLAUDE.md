@AGENTS.md

# THEBULLGROOVE — Project Context for Claude

## User Profile

- Role: IT Specialist
- Builds and maintains the full stack independently
- Comfortable with TypeScript, Next.js App Router, and modern tooling
- Prefers concise, direct communication — no filler, no hand-holding

## About THEBULLGROOVE

THEBULLGROOVE is a technology services agency.

**Mission:** Build and maintain a professional web presence that represents the agency to its target markets.

**Target audience:** Companies in Latin America and Europe.

**Services to communicate:**

1. Soporte e Infraestructura IT
2. Desarrollo Web (Next.js / Tailwind)
3. Soluciones de Software a Medida
4. Optimización y Automatización de Workflows

## Current Phase

Landing page "Coming Soon" — establishing the public web presence before the full site launches.

## Content & Tone Guidelines

- **Tone:** Professional, minimalist, tech-forward
- **Languages:** Spanish as primary; English as secondary for European reach
- **Do not** reference internal development projects or internal tooling on public-facing pages or copy

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Package manager:** npm

## Code Style Guidelines

### General

- All code in TypeScript — no `any`, use proper types or `unknown`
- Strict mode enabled in `tsconfig.json`
- Import alias `@/*` maps to `src/*`

### Next.js App Router conventions

- All routes under `src/app/`
- Prefer **Server Components** by default; add `"use client"` only when required (event handlers, hooks, browser APIs)
- Use `layout.tsx` for shared UI, `page.tsx` for route entry points
- Use Next.js `<Image>` for all images, `<Link>` for all internal navigation
- Data fetching with `async` Server Components — no `useEffect` for data fetching
- Use `loading.tsx` and `error.tsx` for streaming/error boundaries where appropriate
- Route handlers in `src/app/api/` using the `NextRequest`/`NextResponse` API

### TypeScript

- Define prop types with `interface`, not `type` (unless union/intersection needed)
- No implicit `any` — ESLint will catch it
- Use `const` by default, `let` only when reassignment is needed

### Styling

- Tailwind CSS utility classes only — no separate CSS files unless absolutely necessary
- Responsive-first: mobile breakpoint is the base, scale up with `sm:`, `md:`, `lg:`
- Dark mode via Tailwind `dark:` variants

### File & folder naming

- Components: `PascalCase.tsx` inside `src/components/`
- Utilities/helpers: `camelCase.ts` inside `src/lib/`
- Route segments: `kebab-case/` directories under `src/app/`

### Do not

- Do not use the Pages Router (`src/pages/`) — App Router only
- Do not use `getServerSideProps`, `getStaticProps`, or `getInitialProps`
- Do not add unnecessary abstractions, helpers, or wrapper components unless reused 2+ times
- Do not add comments to self-evident code
