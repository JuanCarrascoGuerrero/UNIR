import { CanActivateFn } from '@angular/router';

export const predefinidoGuard: CanActivateFn = (route, state) => {
  return true;
};
