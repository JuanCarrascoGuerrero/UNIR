//En mayuscula porque es clase

class Contacto {
        //Propiedades, en JS solo aportan info, en JS no podemos añadir el tipado 
    // de ahí la potencia de TypeScript (LOOK TS NODE)
    #nombre;
    #apellido;
    #telefno;

    constructor(nombre, apellido, telefono) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#telefno = telefono;
    }

    // Getters
    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getTelefono() {
        return this.#telefno;
    }

    // Setters
    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    setApellido(nuevoApellido) {
        this.#apellido = nuevoApellido;
    }

    setTelefono(nuevoTelefono) {
        this.#telefno = nuevoTelefono;
    }
}


module.exports = Contacto
// Alternativa modelues --> export default Contacto