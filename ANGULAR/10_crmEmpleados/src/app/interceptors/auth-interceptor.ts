import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('paso por el interceptor')
  //logica del interceptor, va crear la cabeceras y se las va a inyectar a todas las peticion que salgan desde este front(angular)
  //añadir las cabeceras a la peticion. Angular da como bueno practica clonar le peticion
  const cloneReq = req.clone({
    setHeaders: {
      'Content-type': 'application/json',
      'Authorization': localStorage.getItem('token') || ""
    }
  })
  return next(cloneReq);
};
