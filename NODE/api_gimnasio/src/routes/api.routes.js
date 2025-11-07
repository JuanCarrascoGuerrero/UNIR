const { Router } = require("express");

const router = Router();

router.use('/clientes', require('./api/clientes.routes'));

//module.exports = apiRoutes;
module.exports = router;