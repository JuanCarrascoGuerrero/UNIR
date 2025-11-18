const router = require('express').Router();
const { getAll, create, update, remove } = require('../../controllers/clientes.controller');
const { checkAdmin, checkRol } = require('../../middlewares/auth.middlewares');
const { checkClienteId } = require('../../middlewares/clientes.middlewares');
const { getById } = require('../../models/clientes.model');


router.get('/',getAll);
            //     handlers
            //url, middlewares... , controlador
router.get('/:id',checkRol('regular'),getById);

router.put('/:id',checkAdmin,checkClienteId,update);

router.post('/',checkAdmin,create);

router.delete('/:id',checkAdmin,checkClienteId,remove)

module.exports = router;
