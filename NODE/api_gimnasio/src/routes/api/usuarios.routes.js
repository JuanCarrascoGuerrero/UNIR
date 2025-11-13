const router = require('express').Router();
const { register, login } = require('../../controllers/usuarios.controller');


router.post('/registro',register);
router.post('/login',login);

module.exports = router;
