
/*     COPIED FROM JS ONLINE     */

console.log('----------------objetos--------------------')
class Coche {
  //                   SOLO UNO
  //Siempre se llama 'constructor'
          // aquí parámetros REQUIRED (else undefined, JS es permisivo)
  
  //Atributos privados
        #bastidor
  
    constructor(marca,bastidor,matricula,precio){

        //this. habilita acceso desde fuera a los atributos
        this.marca = marca
        this.#bastidor = bastidor  //<-- private (#)
        this.matricula = matricula
        this.precio = precio
      console.log('built')
    }
  
  //métodos en Coche
    encender(){
        this.encendido = true
        console.log('On')
    }
    apagar(){
        this.encendido = false
        console.log('OFF')
    }
  
    matricular(matricula){
      this.matricula = matricula
    }
  
  //GETTER para consultar private pero no poder editar
  getBastidor(){
    return this.#bastidor
  }

}

const uncoche = new Coche('R','1564',undefined,20000)
uncoche.matricular("H3984")

// ACCESO atributos this.
uncoche.marca
uncoche.bastidor   //no hay ese parámetro, 
                  // incluso uncoche.#bastidor no deja traza
uncoche.getBastidor()  //<- Solo con GETTER consultamos valor

uncoche.encender()
uncoche.encendido
uncoche.apagar()
uncoche.encendido

//HERENCIA
console.log('----------------herencia--------------------')
class Descapotable extends Coche{
  
  //¿tiene su propio constructor?
  constructor(marca,bastidor,matricula,precio){                //Atención//
    super(marca,bastidor,matricula,precio)  //<-- Si hereda llamar al constructor padre
    console.log('Built unsheltered')
    this.descapotado = false
  }
  
  descapotar(){
    console.log('descapotado')
    this.descapotado = true
  }
  encapotar(){
    console.log('encapotado')
    this.descapotado = false
  }
}

const cochedescapotable = new Descapotable('Mazda','4545',undefined,21000)
cochedescapotable.matricular('H3888')
cochedescapotable.encender()
cochedescapotable.descapotar()
cochedescapotable.descapotado

//EJERCICIOS
console.log('----------------ejercicio parking-------------')
class Parking {
  
  constructor(nombre){
    this.nombreParking = nombre
    this.coches = []  //Polimorfismo, 
                      //puede ser de Coches o Descapotables
  }
  
  aparcar(coche){
    this.coches.push(coche)
  }
  
  sacar(matricula){        //-1 si no findIndex
    const id = this.coches.findIndex(coche => 
                                coche.matricula === matricula)
    if(id !== -1){this.coches.splice(id,1)}
  }                          //splice(desde ind, nº elementos)
  
  preciosSeguro(){
    return this.coches.reduce((acc,coche)=>{
      return acc + coche.precio},0)
  }
  
}

const unparking = new Parking('Parking de Pepe')
unparking.aparcar(uncoche)
unparking.aparcar(cochedescapotable)
console.log(unparking.preciosSeguro())
//console.log(unparking.coches)
unparking.sacar('H3888')
console.log(unparking.coches)