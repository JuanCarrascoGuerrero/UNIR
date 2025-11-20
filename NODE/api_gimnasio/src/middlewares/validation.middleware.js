//validateSchema(shema)

const validateSchema = (schema) => {
    return async (req,res,next) =>{
        try {
            await schema.validate(req.body, {abortEarly: false})
            next();
        } catch (error) { //para evitar el error 500 de app.js default
            return res.status(400).json(error.errors)
        }                               // respuesta json en doc librería
    }
}

module.exports = {validateSchema}