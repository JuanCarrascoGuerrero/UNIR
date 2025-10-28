const sumar = (a,b) => {
    return a+b;
}
const restar = (a,b) => {
    return a-b;
}
const multiplicar = (a,b) => {
    return a*b;
}
const dividir = (a,b) => {
    return a/b;
}
                             //coinciden clave y valor? se puede dejar solo una
module.exports = {sumar:sumar,restar,mult:multiplicar,dividir}
                                     //podemos nombrar como queramos (ejemplo mult: multiplicar)