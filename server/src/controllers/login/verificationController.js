const {User}= require('../../db');
const jwt = require('jsonwebtoken');

const verificationController = async (token,email) => {
      
        try {
        const decoded = jwt.verify(token, 'secreto_del_token');       
        const verificationUser = await User.update({isVerified:true}, {where:{email:email}})
        return 'Usuario verificado exitosamente';
        }catch(error) {
        // Handle token verification failure
        return 'Token inválido o expirado';
        }
};

module.exports = verificationController;