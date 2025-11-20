const yup = require('yup');


//OBJETO DEFINE TIPADO Y VALIDACIONES DE ELEMENTOS
const clienteSchema = yup.object({ //que el body sea un objeto...
  nombre: yup.string().required('El nombre es requerido'),  //que nombre sea string y es requerido...
  apellidos: yup.string().required('Los apellidos son requeridos'), //etc...
  email: yup.string().email('Formato de email incorrecto')
});

module.exports = {clienteSchema} //mirar routes, clientes controller y validation middleware