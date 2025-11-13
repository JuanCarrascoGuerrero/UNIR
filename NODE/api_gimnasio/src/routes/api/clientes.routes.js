const router = require('express').Router();
const { getAll, create, update, remove } = require('../../controllers/clientes.controller');
const { checkClienteId } = require('../../middlewares/clientes.middlewares');
const { getById } = require('../../models/clientes.model');


router.get('/',getAll);
            //     handlers
            //url, middlewares... , controlador
router.get('/:id',checkClienteId,getById);

router.put('/:id',checkClienteId,update);

router.post('/',create);

router.delete('/:id',checkClienteId,remove)

module.exports = router;
