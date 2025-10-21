import { HttpInterceptorFn } from '@angular/common/http';

export const predefinidoInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
