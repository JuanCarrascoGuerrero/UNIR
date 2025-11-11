const router = require('express').Router();
const { getAll, create, update, remove } = require('../../controllers/clientes.controller');
const { getById } = require('../../models/clientes.model');


router.get('/',getAll);
router.get('/:id',getById);

router.put('/:id',update);

router.post('/',create);

router.delete('/:id',remove)

module.exports = router;
