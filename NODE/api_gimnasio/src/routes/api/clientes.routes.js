const router = require('express').Router();
const { getAll, create, update, remove } = require('../../controllers/clientes.controller');
const { checkAdmin, checkRol } = require('../../middlewares/auth.middlewares');
const { checkClienteId } = require('../../middlewares/clientes.middlewares');
const { validateSchema } = require('../../middlewares/validation.middleware');
const { getById } = require('../../models/clientes.model');
const { clienteSchema } = require('../../schemas/clientes.schema');


router.get('/',getAll);
            //     handlers
            //url, middlewares... , controlador
router.get('/:id',checkRol('regular'),validateSchema(clienteSchema),getById);

router.put('/:id',checkAdmin,checkClienteId,update);

router.post('/',checkAdmin,create);

router.delete('/:id',checkAdmin,checkClienteId,remove)

module.exports = router;
