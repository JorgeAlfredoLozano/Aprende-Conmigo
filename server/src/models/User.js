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
        allowNull:false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    mail:{
        type:DataTypes.STRING,
        allowNull:false
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    assets:{
        type:DataTypes.STRING,
        allowNull:false
    },
    location:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false
    },
    certificate:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false,freezeTableName:true}
)}