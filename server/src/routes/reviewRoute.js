const { Router } = require("express");
const postReviewHandler = require('../handlers/review/postReviewHandler')
const getReviewHandler = require('../handlers/review/getReviewHandler')
const route = Router();

route.post('/',postReviewHandler); //Manda una review
route.get('/get/:idPub',getReviewHandler); //Trae todas las review de una publication

module.exports = route;