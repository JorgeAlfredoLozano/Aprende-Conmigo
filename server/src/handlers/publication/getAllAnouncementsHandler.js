const getAllAnouncementsController = require('../../controllers/publication/getAllAnouncementsController')

const getAllAnouncementsHandler = async (req, res) => {
    const page = req.query.page || 0; // obtener el parámetro de página de los parámetros de consulta en lugar de los parámetros de ruta
    try {
      const allAnuncios = await getAllAnouncementsController(page);
      return res.status(200).send(allAnuncios);
    } catch (error) {
      return res.status(404).send(error);
    }
  };

module.exports = getAllAnouncementsHandler;