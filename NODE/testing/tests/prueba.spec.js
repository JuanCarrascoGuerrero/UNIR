/*
LAS PRUEBAS NORMALMENTE SE AGRUPAN EN GRUPOS

HAY QUE INSTALAR LIBRERIA JEST Y AÑADIR EJECUTABLE EN EL PACKAGE.JSON

DESARROLLAR PRUEBAS PARA sumar()
sumar(2,4) -> 6
*/

function sumar(a,b){
    return a+b;
}



//Nombre de un grupo de pruebas
describe('test para la funciones aritmétricas', ()=>{
 //funcion de test -> test o it
    it('should return summatory two figures',()=>{
        const result = sumar(3,3);
        //bateria funciones test
        expect(result).toBe(6);
        expect(sumar(3,5)).toBe(8);
        expect(sumar(3,-2)).toBe(1);
    } )

    it('should be functional for negative values too', ()=>{
        expect(sumar(3,-2)).toBe(1);
    })
})


