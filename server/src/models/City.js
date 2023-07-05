const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('City', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,  
        primaryKey:true
    },
    postal_code: {
        type: DataTypes.INTEGER,
        
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false,freezeTableName:true}
)}