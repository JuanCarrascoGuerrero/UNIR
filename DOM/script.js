

//DOM = REPRESENTACION DE NUESTRO HMTL+SCRIPT EN NAVEGADOR
    //      ARBOL DE NODOS <   <>   < <> >  >

//                                      (Ojo!-> No tiene acceso a las variables propias de JS = const, var, let...)
//                                      EJEMPLO
//                                      ¿Quieres que sea parte del documento?
//                                          const carrito = ...
//                                          window.carrito
//                                      Ahora sí...
//                                          document.carrito...                      



let a = 3+3
debugger //HACE PARADA DEBBUG EN EJECUCIÓN DE UN SCRIPT!
console.log(a)

                            //  ¡¡¡ ACCESO A DOCUMENT CUANDO EL DOM ESTA MONTADO !!!
                            // JS Vanila: document.addEventListener('DOMContentLoaded'...
                            // Alternativa: JQUERY  .reday() -> https://api.jquery.com/ready/
document.addEventListener('DOMContentLoaded', () => {

    //-----------SELECCION DE ELEMENTOS DEL DOCUMENT---------------------------

    //Distinta maneras de acceder a elementos HTML
    document.querySelector('h1').textContent = 'Hola desde JavaScript';

    document.querySelector('.title').textContent = 'Lista desordenada';

    //Selecting all
    document.querySelectorAll('.item').forEach((item) => {
        item.textContent = 'Adios'
    })

    document.getElementsByClassName('.unordered')

    //No hay getElementsByIds, el ID es único
    document.getElementById('unico').textContent = 'Unico'

  
    //-----------CAMBIAR ATRIBUTOS DE UN ELEMENTO---------------------------

    document.querySelector('.enlace').setAttribute('href', 'https://www.bing.com/')


    //-----------INTERVALOS---------------------------
    const listadointerval = document.querySelector('#listadoin')
    setInterval(()=>{
        const newLi = document.createElement('li')
        newLi.textContent = 'Hola'
        listadointerval.append(newLi)
    },3000) //cada de 3 seg

    //-----------DEFINICION DE EVENTOS---------------------------
            //Podríamos tambien querySelector
    document.querySelector('.btn').addEventListener('click',(e)=>{
        console.log(e)  //<-- Para ver el contenido del evento
        console.log("click")
    })

    window.addEventListener('scroll', (e) =>{
        //console.log(e)
    })

    //-----------BUBBLING -> BURBUJEO DE EVENTOS-----------------------------
    //Los eventos 'Burbujean', listerener de events burbujean hacia los padres de un elemento

    //Solo listen en el boton, pero tambien en el siguiente listener PADRE que tambien está escuchando
    document.querySelector('.btn2').addEventListener('click',(e)=>{
        console.log("click desde el boton btn2")
        console.log('Evento disparado desde...')  
        console.log(e.target)//<--- ,target me permite saber el elemento origen del evento!!
    })

    //Document esta escuchando click
    document.addEventListener('click',(e)=>{
        console.log("Listener de clicks en padre absoluto document")
    })

    //¿Cortar el BURBUJEO?
     document.querySelector('.enlace').addEventListener('click',(e)=>{
        //e.preventDefault() // Corta el evento para ver el resultado  SIGUIENTE APARTADO  
        e.stopPropagation()
        console.log("un click que no burbujea hacia arriba")
    })

    //-----------CORTAR EL EVENTO-----------------------------
    //Un formulario que no esta completo, no vamos a recargar la página
    //Si formulario esta vacio corto evento
    document.getElementById('formulario').addEventListener('submit',(e)=>{
        const inputValue = document.getElementById('idForm').value.trim(); // Get the input value and remove extra spaces

        if (inputValue === '') {
            e.preventDefault(); // Stop form submission if the input is empty
            console.log("El campo de texto está vacío. El formulario no se envió.");
        }
    })

    //-----------CREAR ELEMENTOS EN EL DOM-----------------------------
    const nuevoli = document.createElement('li')    //Cramos un 'li' en el limbo, lo vamos a añadir al <ul class="listado">
    nuevoli.textContent = "Nuevo li creado en JS"
    const listado = document.querySelector('.listado')
    listado.append(nuevoli)  //<----- Antiguamente appendChild()





    //¿Qué hacer en estructuras HTML más complejas? EJEMPLO CARRITO

    const carrito ={
        currency: "€",
        products:[
            {
                name: "product 1",
                price: "122"
            },
                        {
                name: "product 2",
                price: "125"
            },
        ]
    }

    //Alternativa 1... Insertar codigo HTML 
    const tabla = document.querySelector('listadoComplejo')
    
    carrito.products.forEach(product => {                           //OJO!! innerHTML -> Vulnerabilidades de seguridad XSS implícito
        const nuevoProdComplejo = document.createElement('li')      //                   Normalment PROHIBIDO
        nuevoProdComplejo.innerHTML = `                                 
            <span class ="blabla">${product.name}</span>
            <span class ="blabla">${product.price}</span>
        `
        listado.append(nuevoProdComplejo)
    }

    )

    //Alternativa 2... TEMPLATE

  //# para ids  // . para class
const template = document.querySelector('#listado-template')
const lista = document.querySelector('#lista-productos')

carrito.products.forEach(product => { 
    const nuevoProdTemplate = template.content.cloneNode(true)
    nuevoProdTemplate.querySelector('.title').textContent = product.name
    nuevoProdTemplate.querySelector('.price').textContent = product.price
    lista.append(nuevoProdTemplate)// Añadimos template al html que lo aloja
})
});

    //-----------FUNCIONES ACCESIBLES DESDE EL DOCUMENTO-----------------------------
function orejas() {
    if(document.getElementById('unico').textContent === 'Unico'){
        document.getElementById('unico').textContent ='UNICO'
    }else{
        document.getElementById('unico').textContent = "Unico"
    }
};



