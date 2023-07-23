const {Purchase,Publication,User,Lesson} = require('../../db')

const getAllController = async () => {
    const allPurchases = await Purchase.findAll({
        include: [
            {
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
    return allPurchases;
}

module.exports = getAllController;