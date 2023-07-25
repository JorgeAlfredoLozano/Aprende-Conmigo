const {Purchase,Publication,User,Lesson} = require('../../db');

const getSaleController = async (id) => {
  const allSales = await Purchase.findAll({
      
      include: [
          {
            where: { UserId: id },
              model: Publication,
              include: [
                  {
                      model: Lesson,
                      through: { attributes: [] }, // Para excluir los atributos de la tabla intermedia
                  },
                  {
                      model: User, // Include the User model
                      attributes: ['assets'], // Especifica los atributos que quieres incluir (por ejemplo, la foto)
                  },
              ],
          }
         
      ],
  });

  return allSales;
};
module.exports = getSaleController;