console.log("Hello world")

// Segunda!! clase de funciones ... (repasar clase 1) - codewars

// Funcion 1.0
function esMayorEdad1(edad){
  return edad >=18
}
//funcion 2.0  -- funcion anónima
const esMayorEdad2 = function(edad){
  return edad >=18
}
//funcion 3.0 -- anónima sin "function"
const esMayorEdad3 = (edad) =>{
  return edad >=18
}
//funcion 4.0 -- arrow function con 1 return (sin return sin llaves)
//               arrow function con 1 parametro (sin paréntesis)
const esMayorEdad4 = edad => edad >=18



//   CONTEXTO ó AMBITO DE UNA FUNCION (local - global)
console.log("--------ambito 1---------")
const global = true
const subContexto = ()=>{
  const local = true
  console.log(global)
  console.log(local)
  //Funcion sin return devuelve "undefined" por defecto
  //return "¡Ejecutado!";
}
console.log(global)
//console.log(local)  <--- variable local de una funcion
console.log(subContexto())

console.log("---------ambito 2---------")
var a = 10
let b = 20
if(true){
  var a = 'a'
  let b = 'b'
  console.log(a)
  console.log(b)
}
console.log(a) //<---- var tiene un ámbito más difuso
console.log(b) //<---- let tiene un ámbito estricto

//   SPREAD OPERATOR
console.log("---------spreadop. Objeto---------")
const alumno = {
  firstName:'Juan',
  lastName: 'Its tricky',
}
const alumnoConNota = {
  ...alumno,  //<--- Compacta keys firstName y lastName
  mark:9
}
console.log(alumno)
console.log(alumnoConNota)

console.log("---------spreadop. Array---------")
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [...array1,...array2]
console.log(array3)

//    PARÁMETROS ILIMITADOS?...
console.log("---------spreadop. parametros---------")
const sumar = (...nums) => {   //<---- Puede ser multidatos también
  let acc = 0
  for(let i=0; i<nums.length; i++){
   
    acc += nums[i]
  }
  return acc
}
sumar(2,25)


/////////////////////EJERCICIOS
//Funcion devuelve diferencia entre numero dado y 15
// Si el num dado es negativo o 15 return error
console.log("---------EJERCICIOS1---------")
const unafuncion = num => {
  return num===15||num<0 ? 'error' : num - 15
}
unafuncion(12)
unafuncion(-2)

console.log("---------EJERCICIOS2---------")
//funcion devuelve si numero divisible por 3
const divisible_tres = num => num%3===0

divisible_tres(15648486)
divisible_tres(11)

console.log("---------EJERCICIOS3---------")
//funcion comprueba numero dado tiene 3 digitos. return si o no
const tresDigitos = num =>{
  return num>99 && num<1000 || num<-99 && num>-1000
}
tresDigitos(1235)
tresDigitos(123)
tresDigitos(-123)

console.log("---------EJERCICIOS4---------")
//funcion calcula area a partir de sus catetos
const areaTriangulo = (base,altura) => {
  return base<0||altura<0? 'No pueden ser negativos':base*altura/2
}
areaTriangulo(8,9)

console.log("---------EJERCICIOS5---------")
const cadenaTexto = 'holamanola'
const vowelCount = (texto) => {
  let vowels = ['a','e','i','o','u']
  let acc = 0
  for(let i=0;i<texto.length;i++){
    if (vowels.includes(texto[i].toLowerCase())) acc++ 
  }
  return acc
}
vowelCount('rwqrcdsaeee')
vowelCount('rwqrcdsAAee')

console.log("---------EJERCICIOS6---------")
// calcular media de un array
const arraynumeros = [2,5,22,4,5,6]
const mediaArray = (array)=>{
  let acc = 0
  if(array.length===0){
    return 'vacío'
  }
  for(let i=0;i<array.length;i++){
    acc = acc + array[i]
  }
  return acc /2
}
mediaArray(arraynumeros)
mediaArray([])
sumar(arraynumeros)

console.log("---------EJERCICIOS7---------")
// horas, minutos y segundos devolver milisegundos
const sumatiempo = (h,m,s) =>{
  return h*3600 + (m*3600) + (s*3600)
}

sumatiempo(2,20,11)



