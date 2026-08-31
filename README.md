# LiftIQ — Mobile App

Ionic + Angular frontend for LiftIQ, a biomechanical analysis app for
weightlifting technique (BlazePose pose detection + FastAPI backend). See
the companion backend repo, `liftiq-api`, for the API this talks to.

## Stack

| Layer | Choice |
|---|---|
| Framework | Angular 22.0.1 (standalone components, no NgModules) |
| Mobile shell | Ionic 9.0.x |
| Native runtime | Capacitor 8.5.0 (+ app, haptics, keyboard, status-bar plugins) |
| Local storage | `@capacitor/preferences` (JWT), not `localStorage` |
| Testing | Vitest (Angular's CLI default — not Jest) |
| Linting | ESLint via `angular-eslint` |
| Package manager | npm |
| Font | Inter, bundled locally via `@fontsource/inter` |

Scaffolded via `ionic start liftiq-app blank --type=angular --capacitor
--package-id=com.liftiq.app`, which includes Capacitor by default — no
separate `cap init` step needed.

## Getting started

```bash
npm install
npm start          # ng serve, http://localhost:4200
```

### Mobile (Capacitor)

```bash
npm run build            # outputs to www/
npx cap add ios          # first time only
npx cap add android       # first time only
npx cap sync
```

### Web preview via Docker

```bash
docker build -t liftiq-app .
docker run -p 8080:80 liftiq-app
```

This serves the production web build only — it does not build native
iOS/Android binaries; use `npx cap` for those.

## npm scripts

| Script | What it does |
|---|---|
| `npm start` | `ng serve` — dev server with live reload |
| `npm run build` | Production build, output to `www/` |
| `npm run watch` | Dev-config build in watch mode |
| `npm test` | Runs the Vitest suite once |
| `npm run lint` | ESLint via `ng lint` |

## Path aliases

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
├── shared/          # Reusable dumb components, pipes, directives
└── features/        # Lazy-loaded pages — see features/README.md
```

### What's implemented vs. placeholder

`BiomechanicsService` is fully implemented (pure geometry, no camera/model
dependency) and unit-tested. `PoseDetectionService`, `CameraService`, and
`CalibrationService` are documented placeholders — TF.js/BlazePose and
`@capacitor-community/camera-preview` integration land in a later pass.

`LoginPage`/`RegisterPage` have complete component logic but unwired
templates — see `src/app/features/auth/BINDING-GUIDE.md` for the guided
exercise of wiring up Angular bindings by hand.

## Design system

Dark-only by intent (gym lighting, screen held at a distance). Tokens are
Ionic CSS variables in `src/theme/variables.scss`, sourced from
`liftiq_design_system.html`. A light/dark toggle remains an open decision —
not built here.

## CI

`.github/workflows/ci.yml` runs lint, build, and test on push/PR to `main`.

## Open decisions (not resolved in this scaffold)

- Whether "Forgot password" is in scope for the MVP
- Whether avatar supports real photos (Capacitor Camera) or stays initials-only
- Whether to ever add a light/dark theme toggle
