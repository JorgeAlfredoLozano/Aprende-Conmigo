const { Router } = require("express");
const postReviewHandler = require('../handlers/review/postReviewHandler')
const getReviewHandler = require('../handlers/review/getReviewHandler')
const route = Router();

route.post('/',postReviewHandler); //Manda una review
route.post('/get',getReviewHandler); //Trae todas las review de una publication

module.exports = route;