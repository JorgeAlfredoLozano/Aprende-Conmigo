const { Publication, Lesson,User } = require('../../db');

const getAllAnouncementsController = async (page) => {
  let allAnuncios = [];
  
  if (page == 0) {
    allAnuncios = await Publication.findAll({
      include: [Lesson,User], // Incluir las Lessons relacionadas
    });
    if (allAnuncios) {
      return allAnuncios;
    } else {
      return "No existen anuncios";
    }
  } else {
    const offset = (page - 1) * 4;
    allAnuncios = await Publication.findAll({
      include: [Lesson], // Incluir las Lessons relacionadas
      offset: offset,
      limit: 4,
    });
    if (allAnuncios) {
      return allAnuncios;
    } else {
      return "No existen anuncios";
    }
  }
};

module.exports = getAllAnouncementsController;

