const { Router } = require("express");
const getLessonHandler = require('../handlers/lesson/getLessonHandler')

const route = Router();

route.get('/all',getLessonHandler); //Trae todas las materias

module.exports = route;