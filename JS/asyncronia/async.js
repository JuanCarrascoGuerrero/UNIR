

//----------------------------ASYNCRONIA

console.log('soy padre antes de promesa')

//PROMISE (funcionEjecutaExito, funcionEjecutaError)
// abrimos un thread de proceso en paralelo al principal
const promesa = new Promise((exito, fracaso)=>{
  setTimeout(()=>{
    exito()
    // ó 
    // fracaso()
  },2000)
})



console.log('soy padre despues de promesa')

//THEN
//Respuesta de una promesa finalizada con exito
promesa.then(()=>{
    console.log('---------------promesa----------------')
  console.log('Hijo vuelve a padre con promesa finalizada EXITO')
})

//CATCH
//Respuesta de una promesa finalizada con error
promesa.catch(()=>{
    console.log('---------------promesa----------------')
  console.log('Hijo vuelve a padre con promesa finalizada ERROR')
})



//---ejemplo con FETCH
                      //fetch es un objeto tipo PROMISE
const promesaFetch = fetch('https://dummyjson.com/recipes')

promesaFetch.then((res)=>{
  console.log('---------------promesaFETCH----------------')
  console.log('promesa realizada')
      //json tambien es un objeto tipo PROMISE
  res.json().then((obj)=>{
    //console.log(obj)
  })
  console.log(res)
})

//Haciendo abstraccion de paréntesis y claves... queda.
  fetch('https://dummyjson.com/recipes') 
    .then((res) => res.json())
    .then((info) => {
      init(info)  //<------ cargamos JSON traido desde la API
    });



