const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey:true 
    },
    name:{
        type: DataTypes.STRING,
      

    },    
    email:{
        type:DataTypes.STRING,
       
    },
    date:{
        type:DataTypes.DATEONLY,
    },
    gender:{
        type:DataTypes.STRING,
    },
    phone:{
        type:DataTypes.STRING,
    },
    assets:{
        type:DataTypes.STRING,
        defaultValue:'https://w7.pngwing.com/pngs/146/551/png-transparent-user-login-mobile-phones-password-user-miscellaneous-blue-text-thumbnail.png'
    },   
    certificate:{
        type:DataTypes.STRING,
    }
},{timestamps:false,freezeTableName:true}
)}