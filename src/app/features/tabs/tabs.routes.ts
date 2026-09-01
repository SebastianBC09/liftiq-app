import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'explorar', pathMatch: 'full' },
      {
        path: 'explorar',
        loadComponent: () =>
          import('../exercises/exercise-list/exercise-list.page').then((m) => m.ExerciseListPage),
      },
      {
        path: 'favoritos',
        loadComponent: () =>
          import('../exercises/favorites/favorites.page').then((m) => m.FavoritesPage),
      },
      {
        path: 'historial',
        loadComponent: () => import('../history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('../profile/profile.page').then((m) => m.ProfilePage),
      },
    ],
  },
];
