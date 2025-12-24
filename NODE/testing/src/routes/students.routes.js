const router = require('express').Router();
const {getAll} = require('../controllers/students.controller.js');

router.use('/students', getAll);

module.exports =  router;