const Students = require('../models/students.model.js')

const getAll = async (req,res) => {
    const students = await Students.find();
    return res.json(students);
}

module.exports = {getAll}