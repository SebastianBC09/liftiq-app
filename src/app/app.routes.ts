import { Routes } from '@angular/router';

/**
 * Top-level navigation, matching the flow in LiftIQ-project-prompt.md:
 *   auth/login → auth/register
 *   tabs (explorar · favoritos · historial · perfil)
 *   exercises/:id → analysis/calibration → analysis/session
 *
 * No `canActivate` guards are wired in yet — `core/guards/auth.guard.ts` is a
 * blank stub for now (out of scope for this UI-bindings-only milestone), so
 * every route is reachable directly while we build out the screens.
 */
export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./features/auth/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./features/tabs/tabs.routes').then((m) => m.tabsRoutes),
  },
  {
    path: 'exercises/:id',
    loadComponent: () =>
      import('./features/exercises/exercise-detail/exercise-detail.page').then(
        (m) => m.ExerciseDetailPage,
      ),
  },
  {
    path: 'analysis/calibration',
    loadComponent: () =>
      import('./features/analysis/calibration/calibration.page').then((m) => m.CalibrationPage),
  },
  {
    path: 'analysis/session',
    loadComponent: () =>
      import('./features/analysis/session/session.page').then((m) => m.SessionPage),
  },
  { path: '**', redirectTo: 'auth/login' },
];
