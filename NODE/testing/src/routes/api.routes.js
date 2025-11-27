const router = require('express').Router();
const studentsApi = require('./students.routes.js')

router.use('/api', studentsApi);

module.exports =  router;