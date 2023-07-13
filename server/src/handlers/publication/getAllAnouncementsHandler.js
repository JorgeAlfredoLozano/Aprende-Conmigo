const getAllAnouncementsController = require('../../controllers/publication/getAllAnouncementsController')

const getAllAnouncementsHandler=async(req,res)=>{
    try{
        const allAnuncios = await getAllAnouncementsController()
        return res.status(200).send(allAnuncios);
        }catch(error){
        return res.status(404).send(error);
    }};

module.exports = getAllAnouncementsHandler;