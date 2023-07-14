const { Publication, Lesson } = require('../../db');

const getAllAnouncementsController = async (req, res) => {
  try {
    const allAnuncios = await Publication.findAll({
      include: [Lesson], // Incluir las Lessons relacionadas
    });

    if (allAnuncios) {
      return allAnuncios;
    } else {
      return "No existen anuncios";
    }
  } catch (error) {
    throw new Error('Error en ruta getAnuncios');
  }
};

module.exports = getAllAnouncementsController;

