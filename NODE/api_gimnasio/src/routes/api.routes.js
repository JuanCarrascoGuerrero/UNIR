const { Router } = require("express");
const { checkToken } = require("../middlewares/auth.middlewares");

const router = Router();

router.use('/clientes', checkToken, require('./api/clientes.routes'));
router.use('/usuarios', require('./api/usuarios.routes'));

//module.exports = apiRoutes;
module.exports = router;