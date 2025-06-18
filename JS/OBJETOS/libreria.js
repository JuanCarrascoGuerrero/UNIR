

const libros = [
  {
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "genero": "Realismo mágico",
    "ibn": "978-0307474728",
    "peso": "420g"
  },
  {
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "Novela de caballería",
    "ibn": "978-8491050297",
    "peso": "680g"
  },
  {
    "titulo": "La sombra del viento",
    "autor": "Carlos Ruiz Zafón",
    "genero": "Misterio",
    "ibn": "978-8408172175",
    "peso": "500g"
  },
  {
    "titulo": "El amor en los tiempos del cólera",
    "autor": "Gabriel García Márquez",
    "genero": "Romance",
    "ibn": "978-0307389732",
    "peso": "460g"
  },
  {
    "titulo": "Rayuela",
    "autor": "Julio Cortázar",
    "genero": "Experimental",
    "ibn": "978-8437602451",
    "peso": "550g"
  }
]

class Libro {
  constructor({titulo,autor,genero,ibn,peso}){
    this.titulo = titulo
    this.autor = autor
    this.genero = genero
    this.ibn = ibn
    this.peso = peso
  }
  
  toString(){
    return `El libro ${this.titulo} de ${this.autor} pesa ${this.peso}. Género: ${this.genero} IBN: ${this.ibn}`
  }
  
}


class Libreria{
  constructor(){
    this.libros = []
    this.favoritos = []
  }
  
  add(libro){
    this.libros.push(libro)
  }
  
  remove(ibn){
    const id = this.libros.findIndex(libro => libro.ibn === ibn)
    const libroQuitado = this.libros[id]
    if(id!==-1) this.libros.splice(id,1)
    this.removeFav(ibn)
    return console.log(`Has quitado el libro ${libroQuitado.ibn}`)
  }
  
  addFav(ibn){
    const esta = this.favoritos.find(ibnfav => ibnfav === ibn)
    if(typeof esta === 'undefined'){
      const libro = this.libros.find(libro=> libro.ibn === ibn)
      if(typeof libro !== 'undefined'){
        this.favoritos.push(ibn)
      }else{
        console.log('No tienes ese libro')
      }
  }
  }
  
  removeFav(ibn){
    const id = this.favoritos.findIndex(ibnfav => ibnfav === ibn)
    const libroQuitado = this.favoritos[id]
    if(id!==-1) this.favoritos.splice(id,1)
    console.log(`Has quitado de favoritos el libro ${libroQuitado}`)
  }
}

const libreria = new Libreria()

libros.forEach(libro =>{
  const instanciaLibro = new Libro(libro)
  libreria.add(instanciaLibro)
})

//libreria.remove("978-8437602451")
console.log(libreria)
libreria.addFav("978-8437602451")
libreria.addFav("978-8437602451")  //añade libros que no estan en fav
console.log(libreria.favoritos)
libreria.removeFav("978-8437602451")
console.log(libreria.favoritos)























