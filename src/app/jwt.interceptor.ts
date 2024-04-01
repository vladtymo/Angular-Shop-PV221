import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  // additional logic...
  // add jwt token to request header parameters

  return next(req);
};
