-------------------------------------------- SIMPLE TRANSPILACION DE OBJETOS TS
Transpila TS en JS, después con node podemos ejecutar el resultado transpilado

Lenguaje transpilados (no se ejecuta on fly, se transpila a JS que es ejecutable)
                //* curiosidad: los transpilados son transformados a otro fichero distinto, 
                // kind of compilado~ejecutado. Ventaja-> captura errores
                // en consola cd ../ruta del ts>tsc fichero.ts
                //                             > Error? No transpila y muestra error
                //                             > No hay error? Genera un fichero.js que es ejecutable


                                            //NODE: MOTOR JS
                // Correr el JS transpilado? > node fichero.js


RESUMEN:

cd... >tsc objeto.ts
   [...transpilacion, genera archivo transpilado objeto.js]

cd... >node objeto.js
   [           ...motor NODE ejecuta el JS                ]                     


----------------------------------------------CREAR PROYECTO ANGULAR

1. Crea carpeta vacía
2. Abrela con VSC
3. En la terminal:
	ng new nombreDeLaApp --directory=.

4 in following, by default NO and CSS




------------------------------------------------CORRIENDO ANGULAR
1.- En una terminal levantamos servidor con angular
	ng s
2.- En otra terminal hacemos creación de componentes, etc...

(!) Para parar servidor pulsamos:   Ctrl + C



------------------------------------------------GENERAR COMPONENTES

ng g c               components/main                          --skip-tests
	 [Aquí carpeta donde queremos generarlos]    [evita generar archivo tests]

...Se han generado los componentes de src/app/carpetaQueHayamosIndicado

**********************************USAR COMPONENTES

1. EN EL PROYECTO, GENERADOS EN LA CARPETA /SRC/APP/carpetaQueHayamosIndicado

2. En el .ts esta el nombre del componente 

EJEMPLO selector: 'app-main'

3. En el .ts general del proyecto APP.TS normalmente, incluir componente en imports:[Array de componentes]

EJEMPLO: imports: [RouterOutlet, Main]

4. En el html destino añadimos el componente <nombre></nombre>

EJEMPLO: <app-main></app-main>


**********************************COMUNICAR COMPONENTES INTERPOLACION Y PROPERTY BINDING

A) -------------------------------------------------------------------   INTERPOLACION

1 Creamos objetos en la clase TS de un componente

EJEMPLO: 

export class Main {

//variable
  nombre: string = 'Juan';

//funcion
  getNombre() :string{
    return 'Maria'
  }

}

2. Interpolamos una variable del componente en su HTML

EJEMPLO variable:   <h1>Nombre: {{nombre}}</h1>    [4 llaves]
EJEMPLO función:    <p>{{getNombre()}}</p>

2. También podemos interpolar atributos (Mejor con PROPERTY BINDING, apartado B))

EJEMPLO:

----------------------------------------------------------------------------------------------------
<h1 class="{{color}}">Nombre: {{nombre}}</h1>    HTML

---------------------------------OJO!! angular PREFIERE PARA ATRIBUTOS LA SIGUIENTE REDACCION:

B) -------------------------------------------------------------------       PROPERTY BINDING
<h1 [class]="color">Nombre: {{nombre}}</h1>  
(Atributo entre [], dando a entender que el atributo es componente TS)
----------------------------------------------------------------------------------------------------


export class Main {
  nombre: string = 'Juan';			TS
  color: string = 'green';
}

----------------------------------------------------------------------------------------------------
.green{
    color:green;				CSS
}


/************************************************* VARIABLES SIGNAL
Introducido en ANGULAR 17
Mejora la performance, evita actualizar continuamente con angular-servidor cambios

1. Creamos objeto signal:

EJEMPLO: 
export class Main {

	   instancia  <tipado>  (value)
  contador = signal   <number>    (2)

}

2. Llamamos por interpolación ¡OJO, es una función!:

EJEMPLO: <p>Contador: {{contador()}}</p>

********* EJEMPLO PARA ENTENDER LAS VENTAJAS DE SIGNAL...

1. Instanciamos función de carga del componente ngOnInit() con un intervalo...

    			contador signal 
  Cada segundo cambia		          con valores random de 0 a 100		
			  numero normal


export class Main {

  numero:number = 0;


  contador = signal<number>(2)

  //Funcion de carga del componente
  ngOnInit(){
    setInterval(()=> {
      this.numero = Math.ceil(Math.random()*100);
      this.contador.set(Math.ceil(Math.random()*100));
    },1000)
  }

}

2. En el html llamamos por interpolación a numero y al signal contador() y...

<!--SIGNAL-->
<p>Contador: {{contador()}}</p>

<!--Cada cambio aqui recarga ¡¡¡¡Toda la página!!!!-->
<p>Numero: {{numero}}</p>


