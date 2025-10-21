import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  //si me logado y si existe token ()
  // redux, stagejs. Pero de forma nativa localstorage
  //existe token en el localstorage
  let token = localStorage.getItem('token') || null
  if (!token) {
    router.navigate(['/login'])
    return false
  }
  return true
};
