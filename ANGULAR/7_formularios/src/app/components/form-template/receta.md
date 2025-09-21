### Form de tipo template

usos: Este formulario deberiamos solo usarlo para recoger informacion de filtros, busquedas, filtros de precio, buscadores semanticos. Sobre todo informacion que no vayamos a guardar en BBDD.

1 - importamos en el componente donde vamos realizar el formulario la libreria FormsModule. Exactamente igual que para TWO WAY DATA BIDING ✅

2 - Creamos la maqueta de formulario en el html con la etiqueta form. Para ello vamos a usar bootstrap ✅

3 - A este form le colocamos un nombre o template. E igualamos ese nombre a ngForm de esta forma  dentro de la etiqueta form ✅
                        <form #nombreForm = "ngForm" ></form>

4 - Crea un evento de tipo submit que en este caso se llama (ngSubmit)="funcionTs(nombreForm)". Ojo funcionTs es un nombre generico. A esta funcion le pasaremos obligatoriamente como parametro el nombre formulario creado antes.  ✅

5 . Todos lo campos del formulario (input, checkbox, select, textarea....) deberan llevar un name="" y un atributo ngModel. Ojo sin parentesis ni corchetes. ✅

6 - la funcion devolvera un objeto json con cada uno de los campos de formulario cuyas claves seran los name="" que hayamos puesto
