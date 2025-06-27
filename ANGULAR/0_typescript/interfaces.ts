
// los interfaces son un contrato

// JS, todo lo que esta aquí escrito lo voy a cumplir
//     definiendo los elementos de mi objeto JSON

          //Se usa 'I' generalmente para distinguir las interfaces
interface IUsuario{
    id?: number;    //<--- '?' Mean can be omitted
    nombre: string;
    edad: number;
}

            //tipado contrato/interface
const usuarios: IUsuario[] = [
    {nombre: 'Juan', edad:33},
    {id: 2, nombre: 'Pepe', edad:53},
    {id: 3, nombre: 'Paco', edad:66},
]

//¿Cómo definir interfaces para clases?

            //Para conectar clase con interface
class Tarea implements ITarea{

    titulo: string = "";
    prioridad: number = 0;
    estado: boolean = false;

    //Como en JS, solo se puede declarar un método constructor
    //No es obligatorio, podriamos rellenar titulo y prioridad 
    //SIN CONSTRUCTOR de la siguiente manera:
    /*
        let miTarea = new Tarea();
        miTarea.titulo = 'Estudiar';
        miTarea.prioridad = 5;
    */
    constructor(titulo, prioridad){
        this.titulo = titulo;
        this.prioridad = prioridad;
    }

    completarTarea(estado:boolean){
        this.estado = true;
    }
    imprimirTarea(){
        return `La tarea es: ${this.titulo} 
        , tiene prioridad: ${this.prioridad}
        y su estado es: ${this.estado}`
    }

}

let miTarea = new Tarea('Angular', 2);

interface ITarea{
    titulo: string;
    prioridad: number;
    completarTarea(estado:boolean): void;
    imprimirTarea(): string;
}