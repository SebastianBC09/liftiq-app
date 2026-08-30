# features/

Lazy-loaded pages, one folder per feature, per architecture doc section 3.2.
Each feature registers its own lazy route in `app.routes.ts`. Every page
follows the same internal structure (see architecture doc section 6):

```
features/analysis/session/
├── session.page.ts          # Smart component
├── session.page.html
├── session.page.css
├── session.page.spec.ts
└── components/               # Sub-components specific to this feature (not shared/)
    └── session-summary/
        ├── session-summary.component.ts
        └── session-summary.component.html
```

## Intended layout

- **auth/**
  - `login/` — email + password, two-way `[(ngModel)]`, JWT stored via
    `AuthStorageService`.
  - `register/` — two-step flow (account credentials → physical metrics)
    using a single `FormGroup` with sub-groups and `*ngIf`, not separate
    routes, so state survives back navigation.
- **exercises/**
  - `exercise-list/` — Tab 1, catalog grouped by muscle group, search +
    chip filters.
  - `exercise-detail/` — `/exercises/:id`, instructions, joint angle
    reference table, "Analizar con cámara" entry point.
  - `favorites/` — Tab 2, reorderable list, swipe-to-remove.
- **analysis/**
  - `calibration/` — mandatory pre-session screen; only advances to
    `session/` once confidence clears the threshold.
  - `session/` — real-time analysis screen; camera/config are inherited
    from `CalibrationService`, never configured here directly.
- **history/** — Tab 3, weekly summary, session list, per-exercise
  progress chart.
- **profile/** — Tab 4, editable metrics with live BMI, global stats,
  settings, logout.

All routes here require `authGuard`. None of these pages exist yet in this
scaffold — this file exists so the structure is agreed on ahead of time.
