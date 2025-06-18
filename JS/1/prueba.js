console.log("Hello world");

// Variables/constantes
let v1 = 150
const PI = 3.141516
//Tipos de datos
    //simples
const a = 3
const b = "3"
const c = true
    //complejos
const d = [1, "2", true];  const dbi = [[2,3],[2,3,5]];
d[0]

new Map()
new Set()

const f = {
    firstName : "Juan",
    secondName : "its",
    notas:[1,2,3],
    address:{
        street: "c/MCervantes",
    }
}

const temp = f.notas
delete f.notas   //Función de librería para objetos clave/valor (hay más)
f.notas = [1,2,2]

console.log(f.firstName)

const unalumno ={
    firstname:"Luis", 
    score:10,
    campus:true
}

//Los dos apuntan al mismo cursor/referencia
const otroalumno = unalumno
otroalumno.firstName = "Antony"
otroalumno.score = 3

//Solucion? Hacer una copia...Como?? Con tres puntos
const otroalumnocopia = {...unalumno}
otroalumnocopia.firstname = "Antony2"
otroalumnocopia.score = 5

//Tipado débil
let tipadoDebil = 3
tipadoDebil = "Hola"
    //Alternativa -> TYPESCRIPT
//let tipadoTypeScript:number = 3

//Operadores
    //Aritmetricos
    3+4
    2/2
    "Juan" + "Carrasco" + "Guerrero"
    "3" + 4
    3 + true + false
        //módulo, el resto de una división
        console.log(14 % 12)  //dividiendo entre %2 solo puede resultar 0 o 1 (par o impar)


    //Comparación
    20 > 18
    console.log("A" == "A")
    console.log(3 == "3")
    console.log(3 === "3") //iguales en tipo y dato

    //Lógicos
    console.log("----logicos or")
    console.log(false||false)
    console.log(false||true)
    console.log(true||true)
    console.log("----logicos and")
    console.log(false&&false)
    console.log(false&&true)
    console.log(true&&true)

// undefined y null

let x
console.log(x)
x = null
console.log(x)

console.log("--------------SPLIT & JOIN----------------")


const str = "Juan;Carrasco;9;el estudiante...;Félix;Blanco;10;Elestudiante...;"
const arr = str.split(';')
console.log(arr)
const backArray = arr.join(';')
console.log(backArray)

