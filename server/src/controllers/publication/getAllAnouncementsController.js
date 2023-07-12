const {Publication} = require('../../db')

const getAllAnouncementsController=async(req,res)=>{
    try{
        const allAnuncios =await Publication.findAll(); 
        if(allAnuncios)return allAnuncios;            
        else return "No existen anuncios";
        }catch(error){
        throw new Error('Error en ruta getAnuncios');
    }};

module.exports = getAllAnouncementsController;
