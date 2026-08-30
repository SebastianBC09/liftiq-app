# LiftIQ — Mobile App

Ionic + Angular frontend for LiftIQ, a biomechanical analysis app for
weightlifting technique (BlazePose pose detection + FastAPI backend). See
the companion backend repo, `liftiq-api`, for the API this talks to.

## Stack

| Layer | Choice |
|---|---|
| Framework | Angular 21.2.x (standalone components, no NgModules) |
| Mobile shell | Ionic 9.0.x |
| Native runtime | Capacitor 8.5.x |
| Local storage | `@capacitor/preferences` (JWT), not `localStorage` |
| Testing | Vitest (Angular 21's CLI default — not Jest) |
| Linting | ESLint via `angular-eslint` |
| Package manager | npm |
| Font | Inter, bundled locally via `@fontsource/inter` |

### Why Angular 21, not 22

Angular 22's CLI hard-requires Node `^22.22.3 || ^24.15.0 || >=26.0.0`.
Verify what's available before assuming which line to use:

```bash
node --version
npx -p @angular/cli@latest ng version   # will fail loudly if your Node is too old
```

If that fails with an `EBADENGINE`/version error, stay on Angular 21 (this
repo's current baseline — still a huge jump from the architecture doc's
original Angular 17 target). Once your Node version clears the 22 bar,
upgrade with:

```bash
npx ng update @angular/core@22 @angular/cli@22
npx ng update @ionic/angular@latest   # re-check peer range first
```

## Getting started

```bash
npm install
npm start          # ng serve, http://localhost:4200
```

Requires Node `^20.19.0 || ^22.12.0 || >=24.0.0` (Angular 21's engines
range) and npm.

### Mobile (Capacitor)

This repo scaffolds Capacitor config (`capacitor.config.ts`,
`ionic.config.json`) but does **not** commit the generated native
`ios/`/`android/` platform folders (see `.gitignore`) — those are
generated locally:

```bash
npm run build            # outputs to www/, matching capacitor.config.ts webDir
npx cap add ios          # first time only
npx cap add android       # first time only
npx cap sync
```

`ionic start` does not work in some sandboxed/CI environments (it fetches
starter tarballs from a CDN that may not be network-reachable) — this repo
was scaffolded via `ng new` + `ng add @ionic/angular` + `npx cap init`
instead, which doesn't depend on that CDN.

## npm scripts

| Script | What it does |
|---|---|
| `npm start` | `ng serve` — dev server with live reload |
| `npm run build` | Production build, output to `www/` |
| `npm run watch` | Dev-config build in watch mode |
| `npm test` | Runs the Vitest suite once (CI-style; add `-- --watch` locally) |
| `npm run lint` | ESLint via `ng lint` |

## Path aliases

Configured in `tsconfig.json`:

```ts
import { User } from '@core/models/user.model';
import { AngleFormatPipe } from '@shared/pipes';
```

| Alias | Resolves to |
|---|---|
| `@core/*` | `src/app/core/*` |
| `@shared/*` | `src/app/shared/*` |
| `@features/*` | `src/app/features/*` |

## Project structure

```
src/app/
├── core/            # Singletons: services, guards, interceptors, models
├── shared/          # Reusable dumb components, pipes, directives (barrel index.ts each)
└── features/        # Lazy-loaded pages — see features/README.md for the intended layout
```

Full rationale in the architecture doc, section 3.2.

### What's implemented vs. placeholder

`BiomechanicsService` is fully implemented (pure geometry — no camera or
model dependency) and unit-tested. `PoseDetectionService`, `CameraService`,
and `CalibrationService` are documented placeholders with `TODO`s: they
define the shape feature pages can build against, but TF.js/BlazePose
inference and `@capacitor-community/camera-preview` integration land in a
later pass.

## Design system

Dark-only by intent (see the design doc's "Por qué dark-first" — gym
lighting, screen held at a distance). Tokens are applied as Ionic CSS
variables in `src/theme/variables.css`, sourced exactly from
`liftiq_design_system.html`. A light/dark toggle remains an **open
decision** — not built here.

## Open decisions (not resolved in this scaffold)

- Whether "Forgot password" is in scope for the MVP
- Whether avatar supports real photos (Capacitor Camera) or stays initials-only
- Whether to ever add a light/dark theme toggle
