import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { from, map } from 'rxjs';

import { AuthStorageService } from '@core/services/auth-storage.service';

/**
 * Blocks navigation into tab-bar/protected routes when there's no stored
 * JWT, redirecting to /auth/login instead.
 */
export const authGuard: CanActivateFn = () => {
  const authStorage = inject(AuthStorageService);
  const router = inject(Router);

  return from(authStorage.hasToken()).pipe(
    map((hasToken) => hasToken || router.createUrlTree(['/auth/login']))
  );
};
