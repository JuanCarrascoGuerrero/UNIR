
const arr = [1,2,3,4]
//-----------------------------------------ADDING VALUES
//push:    includes value at end
arr.push(5)
//unshift  Includes at start
arr.unshift(0)
//pop      Deletes last element
arr.pop()
//shift    Deletes first element
arr.shift()

console.log(arr)

console.log('---------function(function)-----------------')
//  We can call a function as a parameter of another function!!!!
const arrEdad = [15,56,51,88,1,25,6,18]

const mayorEdad = (edad) => {
  return edad>= 18
}

const procesarFila = (arrEdad, mayorEdad) => {
  const mayores = []
  for(let i=0 ; i<arrEdad.length ; i++){
    if (mayorEdad(arrEdad[i])){
      mayores.push(arrEdad[i])
    }
  }
  return mayores
}

procesarFila(arrEdad, mayorEdad)

console.log('---------main methods-----------------')
//------------------------------------------MAIN METHODS
 console.log('---------FOREACH-----------------')  
// FOREACH  Solo recorre, no hay transformacion de datos como el MAP
const arrForEach = [2,5,6,7]
arrForEach.forEach((i) => i + 2) //no hay transformacion
arrForEach.forEach((i) => console.log(i)) //solo recorre

 console.log('---------MAP-----------------')           
//MAP    Devuelve resultado de aplicar funcion para los elementos array
const pordos = (num) => num*2
const arrMap = [1,2,3,4]
arr.map(pordos)

 console.log('---------REDUCE-----------------') 
//REDUCE  Reduce todo el array a UN RESULTADO
const arrreduce = [156,456,845,458]
const sumarDosNumeros = (acc, i) =>{
  return acc +i
}
                //(       FUNCION         , ACCUMULADORinit ó null)
arrreduce.reduce(sumarDosNumeros               ,0)
arrreduce.reduce((acc,i)=>{return acc + i}     ,0)
arrreduce.reduce((acc,i)=>{return acc + i}     )  //ó null 156+null=156

 console.log('---------FILTER-----------------') 
//FILTER  Filtra los elementos aplicado una condicional
const arrfilter = [156,456,845,458]
arrfilter.filter((i) => i>456)

 console.log('---------FIND-----------------') 
//FIND    Busca UN ELEMENTO que cumple condicion
const arrfind = [156,456,845,458]
arrfind.find((i) => i>456)
arrfind.find((i) => i>900)

 console.log('---------INCLUDES-----------------') 
//INCLUDES   Contiene elemento (solo datos primitivos)
let nif = ['212512355512351', '4884565445845']
const isBusiness = (id) => nif.includes(id)
console.log(isBusiness('545554564'))

 console.log('---------SOME-----------------')
//SOME, parecido includes pero evalua Conditional
const dentroDiscoteca = [{edad:15},{edad:16},{edad:20}]
dentroDiscoteca.some((persona)=>persona.edad>15)

 console.log('---------SORT-----------------')
//SORT, Ordena elementos array -> ordenar   Ascending order (a-b)
//                                          Desc            (b-a)

const objetos = [
  {a:1,b:2},{a:3,b:2},{a:10,b:2},{a:2,b:12},
]

function ordenar(ordenador, objetos){
  return objetos.sort((par1,par2)=>par1[ordenador] - par2[ordenador])
}

console.log(ordenarImplicito("a",objetos))
console.log(ordenar("a",objetos))

 console.log('---------EJERCICIO 1-----------------') 
// Objetos name de user cuyo id sea mayor de 500
const users = [
  {id:500,name: 'Juan'},
  {id:100,name: 'Jan'},
  {id:600,name: 'Fran'}
]
        //filtramos            //funcion sobre resultados filtrados
users.filter((i) => i.id>500).map((i) => i.name)

 console.log('---------EJERCICIO 2-----------------') 
// Sacar producto y cantidad
// Sacar la cantidad total
// sacar el elemento con mayor catidad

const listaCompra = [
    {
      "producto": "Manzanas",
      "cantidad": 6,
      "unidad": "unidades",
      "categoria": "Frutas"
    },
    {
      "producto": "Leche",
      "cantidad": 2,
      "unidad": "litros",
      "categoria": "Lácteos"
    },
    {
      "producto": "Pan",
      "cantidad": 1,
      "unidad": "barra",
      "categoria": "Panadería"
    },
    {
      "producto": "Huevos",
      "cantidad": 12,
      "unidad": "unidades",
      "categoria": "Proteínas"
    },
    {
      "producto": "Pasta",
      "cantidad": 500,
      "unidad": "gramos",
      "categoria": "Cereales"
    }
  ]

 console.log('---------2.1-----------------') 
// Sacar producto y cantidad
listaCompra.map(i => {
  return{
    title:i.producto,
    amount:i.cantidad}
        }
)
 console.log('---------2.2-----------------')
// Sacar la cantidad total
listaCompra.reduce((acc,i)=>{
                   return acc + i.cantidad
                   }      ,0)

 console.log('---------2.3-----------------')
// sacar el elemento con mayor catidad
let productMore = null

listaCompra.forEach( i => {
  if(productMore === null){
    productMore = i;
  }
  if(i.cantidad > productMore.cantidad){
    productMore = i
  }
})

console.log(productMore)

// Otra alternativa
productMore = listaCompra.reduce((max, i) => {
  return i.cantidad > max.cantidad? i:max
})

 console.log('---------EJERCICIO 3-----------------') 
// Objeto de objeto ZOO
// ¿Cómo recorrerlo? -> Convertir a ARRAY
const hours = {
  Tuesday : {open:10,close:12},
  Wednesday : {open:10,close:20},
  Thursday : {open:10,close:20},
  Friday : {open:8,close:22},
  Saturday : {open:8,close:22},
  Sunday : {open:8,close:22},
  Monday : {open:10,close:12},
}

//ARRAY---Estos son subceptibles de map, filter, reduce y foreach

//Object.keys()
Object.keys(hours)
//Object.values()
Object.values(hours)
//Object.entries()
Object.entries(hours)

//Formato tiempo del objeto
Object.entries(hours).forEach(hour => {
  //   `cadena texto mezclando ${javascript} con texto`
  console.log(`${hour[0]} open from ${hour[1].open} to ${hour[1].close}`)
})

 console.log('---------Desectruturado--------------')
  //   Desectructuramos?
Object.entries(hours).forEach(([dayname, {open, close}]) => {
  //   `cadena texto mezclando ${javascript} con texto`
  console.log(`${dayname} open from ${open} to ${close}`)
})

 console.log('---------Destructuración-----------------')
// Destructuración en parámetros {key} directamente
const alumno = [{
  firstname : 'Juan',
  nickname : 'Juanito'},
  {firstname : 'Jose',
  nickname : 'Pepito'},
  {firstname : 'Francisco',
  nickname : 'Fran'}
  ]
               //{key} desectructurada           
alumno.filter(({nickname}) =>{
  return console.log(nickname.includes('ito'))
})
                                      //{key} desectructurada  
const soloNombres = () => alumno.map(({ firstname }) => firstname)
console.log(soloNombres(alumno))
                                        //APUNTES APARTE DESUCTRURACION
const soloNombresYCurso = () =>       //devolvemos objeto creado adhoc
                                    //si key = key origen dejamos solo key
    alumno.map(({ firstname }) => ({ firstname, curso: 1 }));
console.log(soloNombresYCurso());














