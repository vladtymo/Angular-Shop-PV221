import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokensService } from '../services/tokens.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const service = inject(TokensService);
  const router = inject(Router);

  const role = service.getAccessTokenPayload()?.role;

  if (role == "Admin")
    return true;
  else {
    router.navigate(['/login']);
    return false;
  }
};
