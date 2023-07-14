const getAllPublicationController = require('../../controllers/publication/getAllPublicationController')

const getAllPublicationHandler=async(req,res)=>{
    const {email} = req.params;
    try {
      const allPublication = await getAllPublicationController(email)
      return res.status(200).send(allPublication);
    } catch (error) {
      return res.status(400).send("Error en ruta getAllPublication");
    }
  }

  module.exports = getAllPublicationHandler;
