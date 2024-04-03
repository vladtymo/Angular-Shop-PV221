import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokensService } from '../services/tokens.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const service = inject(TokensService);
  // additional logic...
  // add jwt token to request header parameters

  const token = service.getAccessToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};
