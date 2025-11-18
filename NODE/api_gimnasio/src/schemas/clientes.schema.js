const yup = required('yup');

const clienteSchema = yup.object(){
  nombre: yup.string().required(),
  "apellidos": "gomez",
  "direccion": "1Hetr",
  "email": "anasr@imageshack.us",
  "edad": 28,
  "genero": "M",
  "cuota": 16.90,
  "fecha_nacimiento": "2010-04-27",
  "dni": "309632997g"
}