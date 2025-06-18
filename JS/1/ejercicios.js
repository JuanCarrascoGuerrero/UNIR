







console.log("--------------EJERCICIOS----------------")

console.log("--------------1----------------")
// Funcion que dado cadena texto devuelva iniciales
let name = "Sam Harris"
let name2 = "Europe Press"
let name3 = "Miguel Angel Revilla"

function abrevName(name){
  let array = name.split(" ")
  let cc = []
  array.forEach((n) => cc.push(n[0]))
  return cc.join('.')
}

console.log(abrevName(name))
console.log(abrevName(name2))
console.log(abrevName(name3))

console.log("--------------2----------------")
// funcion que devuelve
/*
[]                   --> no one likes this
["a", "b"]           --> a and b likes this
["a", "b", "c", "d"] --> a, b and 2 others likes this
*/

names = ["a","b","c","d"]

function likes(names){    //switch
  switch(names.length){
      //cases...
    case 4:
      return console.log(`${names[0]}, ${names[1]} and 2 others likes this`)
  }
}
console.log(likes(names))

console.log("--------------3----------------")
// dado un array devolver la multiplicacion de todos
let aMultiplicar = [1,1,2,1,1,2,3]
function multiplicador (array) {
  return array.reduce((acc,i) => {return acc * i},1)
}
console.log(multiplicador(aMultiplicar))

console.log("--------------4----------------")
// amigos con caracteres 4, si no no amigo
let grupo = ["    ","aAaAaa","a__a","aXaa","aa aa"]

function amigo(grupo){
  return (grupo.filter((n)=>n.length===4))
}
console.log(amigo(grupo))

console.log("--------------5----------------")
// Lista objetos (campo a ordenar) -> ordenar Ascending order (a-b)
//                                            Desc            (b-a)
const objetos = [
  {a:1,b:2},{a:3,b:2},{a:10,b:2},{a:2,b:12},
]

function ordenar(ordenador, objetos){
  return objetos.sort((par1,par2)=>par1[ordenador] - par2[ordenador])
}

console.log(ordenar("a",objetos))














