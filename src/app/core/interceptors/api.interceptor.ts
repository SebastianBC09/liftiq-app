import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { from, switchMap } from 'rxjs';

import { AuthStorageService } from '@core/services/auth-storage.service';

/** Attaches `Authorization: Bearer <jwt>` to outgoing requests when a token is stored. */
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const authStorage = inject(AuthStorageService);

  return from(authStorage.getToken()).pipe(
    switchMap((token) => {
      if (!token) {
        return next(req);
      }
      const authorizedReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next(authorizedReq);
    })
  );
};
