### Form de tipo model

usos: Este formulario deberiamos solo usarlo para recoger informacion de filtros, busquedas, filtros de precio, buscadores semanticos. Sobre todo informacion que no vayamos a guardar en BBDD.

1 - importamos la libreria al componente ReactiveFormsModule ✅

2 - Creamos un atributo dentro de la etiqueta formGroup que contiene el nombre del formulario ✅

3 - necesitamos implementar el evento ngSubmit que llame a una funcion que NO RECIBE PARAMETROS ✅
                        la funcion genera un JSON

4 - A cada campo del formulario (input,select,textarea,...) solo le tenemos que añadir un atributo formControlName con el nombre del campo  ✅

5 . Inicializamos dentro del TS el objeto FormGroup creado en punto 2, donde tenemos obligación de dar de alta cada uno de los campos (aqui es donde ejecutamos los validadores) ✅

