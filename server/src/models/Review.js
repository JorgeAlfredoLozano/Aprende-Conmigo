const { DataTypes, NOW } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('Review', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey:true 
    },
    comment:{
        type: DataTypes.STRING,
        allowNull:false     
    },    
    rating:{
        type:DataTypes.INTEGER,
        defaultValue:5,   
    }, 
    date:{
        type:DataTypes.DATEONLY,
        defaultValue:NOW
    },
},{timestamps:false,freezeTableName:true}
)}