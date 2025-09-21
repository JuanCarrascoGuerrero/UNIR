

let texto = "abecedario"

//Expresiones regulares son patrones
//se ponen siempre entre /

let patron = /aaa/  //>-- El texto tiene 3 'a' juntas
let patron1 = /abe/  //>-- El texto tiene 3 'a' juntas

console.log(patron.test(texto))
console.log(patron1.test(texto))

//expresion regular que valide un email

let email = "Juan@gmail.com"

let expresionemail = /\S+\@\S+\.\S+/   //Cada vez que patamos bloques de texto, barra invertida \
                            // S -> cualquier alfanumerico diferente a espacio en blanco
                            // + -> Puede haber mas de una, en este caso, S


console.log(expresionemail.test(texto))


let telefono = '091-666-77-88'

let patrontelefono = /^\d{2,3}-\d{3}-\d{2}-\d{2}-/  // ^ significa que el patron se aplica a la totalidad del string
                                                        // d significa dígito
                                                        // {entre 2 y 3 caracteres}
                                                        // {3} 3 caracteres


console.log(patrontelefono.test(telefono))


//Más usados...

/*
[rangos]   --> [A - Z]   [a - z]  [0 - 9]  [gmail, hotmail]
  

regexlib.com
*/